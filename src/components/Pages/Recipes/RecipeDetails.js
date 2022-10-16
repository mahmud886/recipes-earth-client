import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
    const { id } = useParams();

    const [recipes, setRecipes] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/recipes/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setRecipes(data.recipe);
            });
    }, [id]);

    const {
        recipeTitle,
        recipeDuration,
        recipeServing,
        recipeCategory,
        recipeType,
        recipeIngredients,
        recipeSteps,
        image,
        recipeDescription,
    } = recipes;
    return (
        <div className='w-12/12 mx-auto pt-2 pb-20 m-2'>
            <div className='flex justify-center glass backdrop-blur-lg border-2 border-gray-600 rounded-lg  px-8 pt-6 pb-8 mb-4 flex-col my-2'>
                <div className='flex justify-center glass  border-2 border-gray-600 rounded-lg py-20 mb-10'>
                    <h2 className=' text-5xl uppercase text-dark'>
                        {recipeTitle}
                    </h2>
                </div>
                <img src='https://placeimg.com/400/225/arch' alt='caar' />
                <h2>{recipeTitle}</h2>
                <h2>{recipeDuration}</h2>
                <h2>{recipeServing}</h2>
                <h2>{recipeCategory}</h2>
                <h2>{recipeType}</h2>
                <h2>{recipeIngredients}</h2>
                <h2>{recipeSteps}</h2>
                <h2>{recipeDescription}</h2>
            </div>
        </div>
    );
};

export default RecipeDetails;
