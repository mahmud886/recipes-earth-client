import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
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

                            <form className='grid grid-cols-1 gap-6 mt-8 md:grid-cols-2'>
                                <div>
                                    <label className='block mb-2 text-sm'>
                                        Email address
                                    </label>
                                    <input
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
                                        type='password'
                                        placeholder='Enter your password'
                                        className='block input input-bordered w-full max-w-xs'
                                    />
                                </div>

                                <button className='flex items-center justify-between px-6 py-3 text-sm tracking-wide  btn btn-outline btn-ghost'>
                                    <span>Sign In </span>

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
                                <p class='text-sm font-semibold mt-2 pt-1 mb-0'>
                                    Don't have an account? Please | &nbsp;
                                    <NavLink
                                        to='/sign-up'
                                        class='text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out'>
                                        Register
                                    </NavLink>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
