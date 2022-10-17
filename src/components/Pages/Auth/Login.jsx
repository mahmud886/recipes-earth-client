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
                            backgroundImage: `url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')`,
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

                            <div className='mt-6'>
                                <h1 className=''>Select type of account</h1>

                                <div className='mt-3 md:flex md:items-center md:-mx-2'>
                                    <button className='flex justify-center w-full px-6 py-3 mt-4  rounded-md md:mt-0 md:w-auto md:mx-2 btn btn-outline btn-ghost'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            class='w-6 h-6'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                            stroke-width='2'>
                                            <path
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                                            />
                                        </svg>

                                        <span className='mx-2'>User</span>
                                    </button>

                                    <button className='flex justify-center w-full px-6 py-3 mt-4  rounded-md md:mt-0 md:w-auto md:mx-2 btn btn-outline btn-ghost'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='w-6 h-6'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                            stroke-width='2'>
                                            <path
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                                            />
                                        </svg>

                                        <span className='mx-2'>Doctor</span>
                                    </button>
                                </div>
                            </div>

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
