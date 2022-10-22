import React, { useEffect, useState } from 'react';
import Loading from '../../../../utils/Loading';
import ChickenPages from './ChickenPages';

const ChickenPage = () => {
    const [chickenRecipes, setChickenRecipes] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/recipes`)
            .then((res) => res.json())
            .then((data) => {
                setChickenRecipes(data);
            });
    });
    let recipeItem = 'Chicken';

    return (
        <>
            <div className='w-12/12 mx-auto align-middle justify-center'>
                <div className='py-8'>
                    <h2 className='text-3xl font-normal'>Chicken Reicpes</h2>
                </div>
                {chickenRecipes.length === 0 ? (
                    <Loading />
                ) : (
                    <div className='grid grid-cols-4 gap-4 place-content-center mx-auto'>
                        {chickenRecipes &&
                            chickenRecipes

                                .filter(
                                    (recipe) =>
                                        recipe.recipeCategory === recipeItem
                                )
                                .sort()
                                .reverse()
                                .map((recipe, index) => {
                                    return (
                                        <ChickenPages
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

export default ChickenPage;

// onClick={() => showDetailsRecipe(_id)}
