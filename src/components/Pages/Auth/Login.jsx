import React, { useRef } from 'react';
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import auth from './../../../firebase.int';
import Loading from '../../utils/Loading';
import { toast } from 'react-toastify';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    let errorElement;

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading />;
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = (
            <div>
                <p className='bg-error'>Error: {error.message}</p>
            </div>
        );
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
        toast('Successfully Logged In');
    };

    const navigateRegister = (event) => {
        navigate('/register');
    };

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('please enter your email address');
        }
    };

    return (
        <div className='w-12/12 mx-auto pt-2 pb-20 m-2'>
            <div className='flex justify-center glass backdrop-blur-lg border-2 border-gray-600 rounded-lg  px-8 pt-6 pb-8 mb-4 flex-col my-2'>
                <div className='flex justify-center glass  border-2 border-gray-600 rounded-lg py-10 mb-10'>
                    <div
                        className='hidden bg-cover lg:block lg:w-2/5'
                        style={{
                            backgroundImage: `url('https://i.ibb.co/tBHLrZv/306164544-707550264382380-1766343590130467835-n.png')`,
                        }}></div>

                    <div className='flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5'>
                        <div className='w-full'>
                            <h1 className='text-2xl font-semibold tracking-wider'>
                                Pease Login Your account now...
                            </h1>

                            <p className='mt-4'>
                                Let’s Login and Create Your own recipe share
                                with others also personal account and begin
                                setting up your profile.
                            </p>

                            <form
                                onSubmit={handleSubmit}
                                className='grid grid-cols-1 gap-6 mt-8 md:grid-cols-2'>
                                <div>
                                    <label className='block mb-2 text-sm'>
                                        Email address
                                    </label>
                                    <input
                                        ref={emailRef}
                                        type='email'
                                        placeholder='johnsnow@example.com'
                                        className='block input input-bordered w-full max-w-xs'
                                    />
                                </div>

                                <div>
                                    <label className='block mb-2 text-sm'>
                                        Password
                                    </label>
                                    <input
                                        ref={passwordRef}
                                        type='password'
                                        placeholder='Enter your password'
                                        className='block input input-bordered w-full max-w-xs'
                                    />
                                </div>

                                <button
                                    type='submit'
                                    className='flex items-center justify-between px-6 py-3 text-sm tracking-wide  btn btn-outline btn-ghost'>
                                    <span>Sign In </span>
                                </button>
                                {errorElement}
                                <p className='text-sm font-semibold mt-2 pt-1 mb-0'>
                                    Don't have an account? Please | &nbsp;
                                    <NavLink
                                        to='/sign-up'
                                        className='text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out'>
                                        Register
                                    </NavLink>
                                </p>
                                <p>
                                    Forget Password? <br />
                                    <button
                                        className='btn btn-outline'
                                        onClick={resetPassword}>
                                        Reset Password
                                    </button>{' '}
                                </p>
                            </form>
                            <div>
                                <SocialLogin />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
