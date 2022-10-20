import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Categories from './Categories';
import Recipes from './../Recipes/Recipes';

const apiEndPoint = `http://localhost:8080/api/v1/recipes`;
const CategoriesRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [cateRecipe, setCateRecipes] = useState([]);

    const fetchData = async () => {
        return await axios.get(apiEndPoint).then((response) => {
            setRecipes(response.data);
        });
    };
    useEffect(() => {
        fetchData();
    }, []);

    const filterCategory = (cateItem) => {
        if (cateItem === 'all') {
            setCateRecipes(recipes);
            return;
        }
        const updatedCategory = recipes.filter((recipe) => {
            return (
                recipe.recipeCategory.toLowerCase() == cateItem.toLowerCase()
            );
        });

        setCateRecipes(updatedCategory);
        console.log(updatedCategory);
    };

    return (
        <div className='w-12/12 mx-auto pt-2 pb-20 m-2'>
            <div className='flex justify-center glass backdrop-blur-lg border-2 border-gray-600 rounded-lg  px-8 pt-6 pb-8 mb-4 flex-col my-2'>
                <div className='py-2'>
                    {/* Categories Button */}
                    <Categories filterCategory={filterCategory} />
                </div>

                <div className='grid grid-cols-4 gap-4 place-content-center mx-auto'>
                    {cateRecipe.length === 0
                        ? 'No Recipes'
                        : recipes &&
                          cateRecipe.map((singleRecipe, index) => {
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

export default CategoriesRecipes;
