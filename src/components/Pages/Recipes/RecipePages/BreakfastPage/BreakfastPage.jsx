import React, { useEffect, useState } from 'react';
import Loading from '../../../../utils/Loading';
import BreakfastPages from './BreakfastPages';

const BreakfastPage = () => {
    const [breakfastRecipes, setBreakfastRecipes] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/recipes`)
            .then((res) => res.json())
            .then((data) => {
                setBreakfastRecipes(data);
            });
    });
    let recipeItem = 'Breakfast';

    return (
        <>
            <div className='w-12/12 mx-auto align-middle justify-center'>
                <div className='py-8'>
                    <h2 className='font-normal text-3xl'>Breakfast Recipes</h2>
                </div>
                {breakfastRecipes.length === 0 ? (
                    <Loading />
                ) : (
                    <div className='grid grid-cols-4 gap-4 place-content-center mx-auto'>
                        {breakfastRecipes
                            .filter(
                                (recipe) => recipe.recipeCategory === recipeItem
                            )
                            .map((recipe, index) => {
                                return (
                                    <BreakfastPages
                                        recipe={recipe}
                                        key={recipe._id}
                                    />
                                );
                            })}
                    </div>
                )}
            </div>
        </>
    );
};

export default BreakfastPage;
