import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='py-2 sticky top-2 z-10 glass rounded-lg uppercase font-bold'>
            <div className=''>
                <div className='navbar w-12/12  mx-auto'>
                    <div className='navbar-start'>
                        <div className='dropdown dropdown-start'>
                            <label
                                tabIndex={0}
                                className='btn btn-ghost btn-circle'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-5 w-5'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M4 6h16M4 12h16M4 18h7'
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex='0'
                                className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60'>
                                <NavLink to='/'>
                                    <li>
                                        <a>Homepage</a>
                                    </li>
                                </NavLink>
                                <li tabIndex='0'>
                                    <a className='justify-between'>
                                        Nutritions
                                        <svg
                                            className='fill-current'
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'>
                                            <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
                                        </svg>
                                    </a>
                                    <ul className=' p-4 shadow bg-base-100 rounded-box w-60'>
                                        <NavLink to='/nutrition/add-nutrition'>
                                            <li>
                                                <a>Add Nutrition</a>
                                            </li>
                                        </NavLink>
                                        <NavLink to='/nutrition/all-nutritions'>
                                            <li>
                                                <a>All Nutritions</a>
                                            </li>
                                        </NavLink>
                                    </ul>
                                </li>

                                <li tabIndex='0'>
                                    <a className='justify-between'>
                                        Recipes
                                        <svg
                                            className='fill-current'
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'>
                                            <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
                                        </svg>
                                    </a>
                                    <ul className=' p-4 shadow bg-base-100 rounded-box w-60'>
                                        <NavLink to='/recipe/add-recipe'>
                                            <li>
                                                <a>Add Recipe</a>
                                            </li>
                                        </NavLink>
                                        <NavLink to='/recipe/all-recipes'>
                                            <li>
                                                <a>All Repices</a>
                                            </li>
                                        </NavLink>
                                    </ul>
                                </li>
                                <NavLink to='/categories'>
                                    <li>
                                        <a>Categories</a>
                                    </li>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                    <div className='navbar-center'>
                        <div className='btn btn-ghost normal-case text-xl'>
                            RECIPES EARTH
                        </div>
                    </div>
                    <div className='navbar-end'>
                        <div className='dropdown dropdown-end'>
                            <label
                                tabIndex={0}
                                className='btn btn-ghost btn-circle avatar'>
                                <div className='w-10 rounded-full'>
                                    <img src='https://placeimg.com/80/80/people' />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
                                <NavLink to='/profile'>
                                    <li>
                                        <a>Profile</a>
                                    </li>
                                </NavLink>
                                <li>
                                    <a>Create Recipe</a>
                                </li>
                                <NavLink to='/login'>
                                    <li>
                                        <a>Login</a>
                                    </li>
                                </NavLink>
                                <NavLink to='/sign-up'>
                                    <li>
                                        <a>Sign Up</a>
                                    </li>
                                </NavLink>
                                <li>
                                    <a>Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
