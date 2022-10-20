import React, { useState, useEffect } from 'react';
import Recipe from '../Recipes/Recipe';
import RecipeCategories from '../Recipes/RecipeCategories';

const Categories = ({ filterCategory }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/categories`)
            .then((response) => response.json())
            .then((data) => {
                setCategories(data);
            });
    });

    return (
        <div className='w-12/12 mx-auto pt-2  m-2'>
            <div className='flex justify-center glass backdrop-blur-lg border-2 border-gray-600 rounded-lg   flex-col '>
                <div className='flex justify-center glass  border-2 border-gray-600 rounded-lg py-2'>
                    <h2 className=' text-3xl uppercase text-dark'>
                        All Recipe Categories
                    </h2>
                </div>

                <div className='flex flex-wrap justify-center py-3 uppercase'>
                    {categories.map((category, index) => {
                        const { categoryName } = category;
                        return (
                            <div className='card-actions justify-center'>
                                <button
                                    className='btn btn-outline m-2'
                                    onClick={() =>
                                        filterCategory(categoryName)
                                    }>
                                    {categoryName}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Categories;
