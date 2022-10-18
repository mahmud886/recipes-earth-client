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
                    <h2 className='text-center text-5xl uppercase text-dark'>
                        {recipeTitle}
                    </h2>
                </div>
                <div className='flex justify-center'>
                    <img
                        src={image}
                        alt={recipeTitle}
                        className='object-cover w-2/3 rounded-lg'
                    />
                </div>
                <div className='text-center py-2'>
                    <div className='flex justify-center glass backdrop-blur-lg border-2 border-gray-600 rounded-lg  px-8 pt-6 pb-8 mb-4 flex-col my-2'>
                        <h2 className='font-bold text-5xl py-5'>
                            {recipeTitle}
                        </h2>
                        <p>{recipeDescription}</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between px-8 pt-6 pb-8 mb-4 '>
                            <button className='btn btn-outline btn-wide'>
                                Duration <br /> <br />
                                <span className='text-2xl'>
                                    {recipeDuration}
                                </span>
                            </button>
                            <button className='btn btn-outline btn-wide'>
                                Serving <br />
                                <br />
                                <span className='text-2xl'>
                                    {recipeServing}
                                </span>
                            </button>
                            <button className='btn btn-outline btn-wide'>
                                Category <br />
                                <br />
                                <span className='text-2xl'>
                                    {recipeCategory}
                                </span>
                            </button>
                            <button className='btn btn-outline btn-wide'>
                                Meal Type <br />
                                <br />
                                <span className='text-2xl'>{recipeType}</span>
                            </button>
                        </div>
                    </div>

                    <div className='flex justify-center glass backdrop-blur-lg border-2 border-gray-600 rounded-lg  px-8 pt-6 pb-8 mb-4 flex-col my-2'>
                        <h2 className='text-4xl uppercase py-3'>Ingredients</h2>
                        <p className='text-xl'>{recipeIngredients}</p>
                    </div>
                    <div className='flex justify-center glass backdrop-blur-lg border-2 border-gray-600 rounded-lg  px-8 pt-6 pb-8 mb-4 flex-col my-2'>
                        <h2 className='text-4xl uppercase py-3'>Steps</h2>
                        <p className='text-xl'>{recipeSteps}</p>
                    </div>
                    <div className='flex justify-center glass backdrop-blur-lg border-2 border-gray-600 rounded-lg  px-8 pt-6 pb-8 mb-4 flex-col my-2'>
                        <h2 className='text-4xl uppercase py-3'>Description</h2>
                        <p className='text-xl'>{recipeDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;
