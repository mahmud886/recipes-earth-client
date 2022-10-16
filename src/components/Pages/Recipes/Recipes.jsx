import React from 'react';

import { useNavigate } from 'react-router-dom';

const Recipes = (props) => {
    const { _id, recipeTitle, recipeDuration, recipeServing, recipeCategory } =
        props.singleRecipe;

    const navigate = useNavigate();

    const showDetailsRecipe = (id) => {
        const path = `/recipe/${id}`;
        navigate(path);
    };

    return (
        <div className='card w-80 glass'>
            <figure>
                <img
                    className='w-80'
                    src='https://placeimg.com/400/225/arch'
                    alt='car!'
                />
            </figure>
            <div className='card-body'>
                <h2 className='font-normal text-xl text-center'>
                    {recipeTitle.substring(0, 30)}
                </h2>
                <div>
                    <p>Duration: {recipeDuration}</p>
                    <p>Serving: {recipeServing}</p>
                    <p>Serving: {recipeCategory}</p>
                </div>
                <button
                    className='btn btn-outline'
                    onClick={() => showDetailsRecipe(_id)}>
                    SHOW DETAILS
                </button>
            </div>
        </div>
    );
};

export default Recipes;
