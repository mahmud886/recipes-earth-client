import React, { useEffect, useState } from 'react';
import Recipes from './Recipes';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

const Recipe = () => {
    const [recipes, setRecipes] = useState([]);
    const apiEndPoint = `http://localhost:8080/api/v1/recipes`;

    useEffect(() => {
        fetch(apiEndPoint)
            .then((response) => response.json())
            .then((data) => {
                setRecipes(data);
            });
    });

    // const recipesCart = () => {
    //     recipes.map((singleRecipe, index) => {
    //         return (
    //             <Recipes singleRecipe={singleRecipe} key={singleRecipe.id} />
    //         );
    //     });
    // };

    return (
        <div className='w-12/12 mx-auto pt-2 pb-20 m-2'>
            <div className='flex justify-center glass backdrop-blur-lg border-2 border-gray-600 rounded-lg  px-8 pt-6 pb-8 mb-4 flex-col my-2'>
                <div className='flex justify-center glass  border-2 border-gray-600 rounded-lg py-20 mb-10'>
                    <h2 className=' text-5xl uppercase text-dark'>RECIPE</h2>
                </div>
                <div className='grid grid-cols-4 gap-4 place-content-center mx-auto'>
                    {recipes.map((singleRecipe, index) => {
                        return (
                            <Recipes
                                singleRecipe={singleRecipe}
                                key={singleRecipe._id}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Recipe;
