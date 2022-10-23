import React from 'react';
import { useNavigate } from 'react-router-dom';

const HealthyRecipes = (props) => {
    const {
        _id,
        recipeTitle,
        recipeDuration,
        recipeServing,
        recipeCategory,
        image,
    } = props.healthyRecipe;

    const navigate = useNavigate();

    const showDetailsRecipe = (id) => {
        const path = `/healthyRecipes/${id}`;
        navigate(path);
    };

    return (
        <div className='card w-80 glass'>
            <figure>
                <img className='w-80 h-44' src={image} alt={recipeTitle} />
            </figure>
            <div className='card-body'>
                <h2 className='font-normal text-xl text-center'>
                    {recipeTitle}
                </h2>
                <div className='text-center'>
                    <p>Duration: {recipeDuration}</p>
                    <p>Serving: {recipeServing}</p>
                    <p>Category: {recipeCategory}</p>
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

export default HealthyRecipes;
