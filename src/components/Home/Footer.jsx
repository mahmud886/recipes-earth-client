import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className='p-4 glass rounded-lg shadow md:px-6 md:py-8'>
                <div className='sm:flex sm:items-center sm:justify-between'>
                    <a href='#' className='flex items-center mb-4 sm:mb-0'>
                        <img src='' className='mr-3 h-8' alt='RECIPES EARTH' />
                        <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                            RECIPES EARTH
                        </span>
                    </a>
                    <ul className='flex flex-wrap items-center mb-6 text-sm text-dark sm:mb-0'>
                        <li>
                            <a
                                href='#'
                                className='mr-4 hover:underline md:mr-6 '>
                                About
                            </a>
                        </li>
                        <li>
                            <a href='#' className='hover:underline'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
                <span className='block text-sm text-dark sm:text-center '>
                    © 2022{' '}
                    <a href='#' className='hover:underline'>
                        RECIPES EARTH™
                    </a>
                    . All Rights Reserved.
                </span>
            </footer>
        </div>
    );
};

export default Footer;
