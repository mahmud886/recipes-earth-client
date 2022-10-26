import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.int';
import { useNavigate } from 'react-router-dom';
import Loading from '../../utils/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;
    if (loading) {
        return <Loading />;
    }

    if (error) {
        errorElement = (
            <div>
                <p className='bg-error'>Error: {error.message}</p>
            </div>
        );
    }
    if (user) {
        navigate('/');
    }

    return (
        <div>
            <div className='flex flex-col w-full border-opacity-50'>
                <div className=''></div>
                <div className='divider'>OR</div>
                <div className=''></div>
            </div>
            {errorElement}
            <button
                onClick={() => signInWithGoogle()}
                className='flex items-center justify-between px-6 py-3 text-sm tracking-wide  btn btn-outline btn-ghost'>
                <span>Sign In WITH GOOGLE </span>

                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 rtl:-scale-x-100'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path
                        fill-rule='evenodd'
                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                        clip-rule='evenodd'
                    />
                </svg>
            </button>
        </div>
    );
};

export default SocialLogin;
