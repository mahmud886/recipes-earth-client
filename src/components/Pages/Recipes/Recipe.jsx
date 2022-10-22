import React, { useEffect, useState } from 'react';
import RecipeCategories from './RecipeCategories';
import Recipes from './Recipes';
import axios from 'axios';

const apiEndPoint = `http://localhost:8080/api/v1/recipes`;
const Recipe = () => {
    const [recipes, setRecipes] = useState([]);
    const [cateRecipe, setCateRecipes] = useState([]);
    const [searchApiFilter, setSearchApiFilter] = useState([]);
    const [filterValue, setFilterValue] = useState('');
    const [categories, setCategories] = useState(recipes);

    const fetchData = async () => {
        return await axios.get(apiEndPoint).then((response) => {
            setRecipes(response.data);
            setSearchApiFilter(response.data);
            const allCategories = [
                ...new Set(
                    response.data?.map((recipe, index) => recipe.recipeCategory)
                ),
                'all',
            ];
            setCategories(allCategories);
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
            return recipe.recipeCategory === cateItem;
        });

        setCateRecipes(updatedCategory);
        console.log(updatedCategory);
    };

    // Search Filtering Function

    const handleFilter = (e) => {
        if (e.target.value === '') {
            setCateRecipes(searchApiFilter);
        } else {
            const filterResult = searchApiFilter.filter(
                (item) =>
                    item.recipeCategory
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase()) ||
                    item.recipeTitle
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase()) ||
                    item.recipeDuration
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
            );
            setCateRecipes(filterResult);
        }
        setFilterValue(e.target.value);
    };

    return (
        <div className='w-12/12 mx-auto pt-2 pb-20 m-2'>
            <div className='flex justify-center glass backdrop-blur-lg border-2 border-gray-600 rounded-lg  px-8 pt-6 pb-8 mb-4 flex-col my-2'>
                {/* <div className='flex justify-center glass  border-2 border-gray-600 rounded-lg py-20 mb-10'>
                    <h2 className=' text-5xl uppercase text-dark'>RECIPE</h2>
                </div> */}
                <div className='py-2'>
                    <input
                        value={filterValue}
                        onInput={(e) => handleFilter(e)}
                        type='text'
                        placeholder='Search by Food Code, English Name, Bangla Name then you can find easily any Nutrition Value...'
                        className='input input-bordered text-sm rounded-lg focus  block w-full pl-10 p-2.5 dark:placeholder '
                    />
                    {/* Categories Button */}
                    <RecipeCategories
                        filterCategory={filterCategory}
                        categories={categories}
                    />
                </div>

                <div className='grid grid-cols-4 gap-4 place-content-center mx-auto'>
                    {cateRecipe.length === 0
                        ? 'No Recipes'
                        : recipes &&
                          cateRecipe
                              .sort()
                              .reverse()
                              .map((singleRecipe, index) => {
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
