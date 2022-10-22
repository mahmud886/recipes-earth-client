import React, { useEffect, useState } from 'react';
import Loading from '../../../../utils/Loading';
import DessertPages from './DessertPages';

const DessertPage = () => {
    const [dessertRecipes, setDessertRecipes] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/recipes`)
            .then((res) => res.json())
            .then((data) => {
                setDessertRecipes(data);
            });
    });
    let recipeItem = 'Dessert';

    return (
        <>
            <div className='w-12/12 mx-auto align-middle justify-center'>
                <div className='py-8'>
                    <h2 className='text-3xl font-normal'>Dessert Reicpes</h2>
                </div>
                {dessertRecipes.length === 0 ? (
                    <Loading />
                ) : (
                    <div className='grid grid-cols-4 gap-4 place-content-center mx-auto'>
                        {dessertRecipes &&
                            dessertRecipes
                                .filter(
                                    (recipe) =>
                                        recipe.recipeCategory === recipeItem
                                )
                                .sort()
                                .reverse()
                                .map((recipe, index) => {
                                    return (
                                        <DessertPages
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

export default DessertPage;

// onClick={() => showDetailsRecipe(_id)}
