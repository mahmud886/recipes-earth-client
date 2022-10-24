import React from 'react';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
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

                            <form className='grid grid-cols-1 gap-6 mt-8 md:grid-cols-2'>
                                <div>
                                    <label className='block mb-2 text-sm '>
                                        First Name
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='John'
                                        className='block input input-bordered w-full max-w-xs'
                                    />
                                </div>

                                <div>
                                    <label className='block mb-2 text-sm'>
                                        Last name
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='Snow'
                                        className='block input input-bordered w-full max-w-xs'
                                    />
                                </div>

                                <div>
                                    <label className='block mb-2 text-sm'>
                                        Phone number
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='XXX-XX-XXXX-XXX'
                                        className='block input input-bordered w-full max-w-xs'
                                    />
                                </div>

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

                                <div>
                                    <label className='block mb-2 text-sm'>
                                        Confirm password
                                    </label>
                                    <input
                                        type='password'
                                        placeholder='Enter your password'
                                        className='block input input-bordered w-full max-w-xs'
                                    />
                                </div>

                                <button className='flex items-center justify-between px-6 py-3 text-sm tracking-wide  btn btn-outline btn-ghost'>
                                    <span>Sign Up </span>

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
                                    Already have an account! Please |&nbsp;
                                    <NavLink
                                        to='/login'
                                        class='text-green-600 hover:text-green-700 focus:text-green-700 transition duration-200 ease-in-out'>
                                        Login
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

export default SignUp;
