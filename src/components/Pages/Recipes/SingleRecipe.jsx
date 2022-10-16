import React from 'react';

const SingleRecipe = (props) => {
    return (
        <div className='w-12/12 mx-auto pt-2 pb-20 m-2'>
            <div className='flex justify-center glass backdrop-blur-lg border-2 border-gray-600 rounded-lg  px-8 pt-6 pb-8 mb-4 flex-col my-2'>
                <div className='flex justify-center glass  border-2 border-gray-600 rounded-lg py-20 mb-10'>
                    <h2 className=' text-5xl uppercase text-dark'>
                        RECIPE TTILE:
                    </h2>
                </div>
                <div />
                <h2>Recipe Details About ID: </h2>
            </div>
        </div>
    );
};

export default SingleRecipe;
