import React from 'react';
import BannerSlider from './BannerSlider';

const Home = () => {
    return (
        <div className='w-12/12 mx-auto pt-2 pb-20 m-2'>
            <div className='flex justify-center glass backdrop-blur-lg border-2 border-gray-600 rounded-lg  px-8 pt-6 pb-8 mb-4 flex-col my-2'>
                <div className='rounded-lg'>
                    <BannerSlider />
                </div>
                <div />
            </div>
        </div>
    );
};

export default Home;
