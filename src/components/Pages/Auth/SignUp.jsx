import React from 'react';
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.int';
import Loading from '../../utils/Loading';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    };

    if (loading || updating) {
        return <Loading />;
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/');
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
                                Get your free account now.
                            </h1>

                            <p className='mt-4'>
                                Let’s get you all set up so you can verify your
                                personal account and begin setting up your
                                profile.
                            </p>

                            <form
                                onSubmit={handleRegister}
                                className='grid grid-cols-1 gap-6 mt-8 md:grid-cols-2'>
                                <div>
                                    <label className='block mb-2 text-sm '>
                                        Enter Name
                                    </label>
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder='John Wick'
                                        className='block input input-bordered w-full max-w-xs'
                                    />
                                </div>

                                <div>
                                    <label className='block mb-2 text-sm'>
                                        Email address
                                    </label>
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='johnsnow@example.com'
                                        className='block input input-bordered w-full max-w-xs'
                                    />
                                </div>

                                <div>
                                    <label className='block mb-2 text-sm'>
                                        Password
                                    </label>
                                    <input
                                        type='password'
                                        name='password'
                                        placeholder='Enter your password'
                                        className='block input input-bordered w-full max-w-xs'
                                    />
                                </div>

                                <br />
                                <button className='flex items-center justify-between px-6 py-3 text-sm tracking-wide  btn btn-outline btn-ghost'>
                                    <span>Sign Up </span>
                                </button>
                                <p className='text-sm font-semibold mt-2 pt-1 mb-0'>
                                    Already have an account! Please |&nbsp;
                                    <NavLink
                                        to='/login'
                                        className='text-green-600 hover:text-green-700 focus:text-green-700 transition duration-200 ease-in-out'>
                                        Login
                                    </NavLink>
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

export default SignUp;
