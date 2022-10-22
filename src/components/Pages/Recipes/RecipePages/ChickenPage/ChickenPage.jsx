import React, { useEffect, useState } from 'react';
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
            <div className='w-12/12 mx-auto pt-2 m-2 align-middle justify-center'>
                <div className='grid grid-cols-4 gap-4 place-content-center mx-auto'>
                    {chickenRecipes &&
                        chickenRecipes
                            .filter(
                                (recipe) => recipe.recipeCategory === recipeItem
                            )
                            .map((recipe, index) => {
                                return (
                                    <ChickenPages
                                        recipe={recipe}
                                        key={recipe._id}
                                    />
                                );
                            })}
                    )
                </div>
            </div>
        </>
    );
};

export default ChickenPage;

// onClick={() => showDetailsRecipe(_id)}
