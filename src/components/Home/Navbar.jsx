import React from 'react';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.int';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
    let [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    };

    user = auth.currentUser;

    const displayName = user?.displayName;
    const email = user?.email;
    const photoURL = user?.photoURL;

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
                                <NavLink to='/healthyRecipes/all-recipes'>
                                    <li>
                                        <a>Healthy Recipes</a>
                                    </li>
                                </NavLink>

                                <li tabIndex='0'>
                                    <a className='justify-between'>
                                        Categories
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
                                        <NavLink to='/categories-recipe'>
                                            <li>
                                                <a>All Categories</a>
                                            </li>
                                        </NavLink>
                                        <NavLink to='/recipe/chicken-recipes'>
                                            <li>
                                                <a>Chicken Category</a>
                                            </li>
                                        </NavLink>
                                        <NavLink to='/recipe/breakfast-recipes'>
                                            <li>
                                                <a>Breakfast Category</a>
                                            </li>
                                        </NavLink>
                                        <NavLink to='/recipe/dessert-recipes'>
                                            <li>
                                                <a>Dessert Category</a>
                                            </li>
                                        </NavLink>
                                    </ul>
                                </li>
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
                                    <img src={photoURL} alt={displayName} />
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

                                {user ? (
                                    <li>
                                        <a onClick={handleSignOut}>Logout</a>
                                    </li>
                                ) : (
                                    <NavLink to='/login'>
                                        <li>
                                            <a>Login</a>
                                        </li>
                                    </NavLink>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
