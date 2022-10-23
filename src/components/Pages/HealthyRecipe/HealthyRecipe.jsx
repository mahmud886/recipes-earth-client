import React, { useState, useEffect } from 'react';
import Loading from '../../utils/Loading';
import HealthyRecipes from './HealthyRecipes';
import axios from 'axios';

const apiEndPoint = `http://localhost:8080/api/v1/healthyRecipes`;

const HealthyRecipe = () => {
    const [healthyRecipes, setHealthyRecipes] = useState([]);

    const fetchData = async () => {
        return await axios.get(apiEndPoint).then((response) => {
            const healthyRecipesData = response.data;
            console.log('Data', healthyRecipesData);
            setHealthyRecipes(healthyRecipesData);
            console.log('Recipes', healthyRecipes);
        });
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='w-12/12 mx-auto align-middle justify-center'>
            <div className='py-8'>
                <h2 className='font-normal text-3xl'>Healthy Recipes</h2>
            </div>

            {healthyRecipes.length === 0 ? (
                <Loading />
            ) : (
                <div className='grid grid-cols-4 gap-4 place-content-center mx-auto'>
                    {healthyRecipes.map((healthyRecipe, index) => {
                        return (
                            <HealthyRecipes
                                healthyRecipe={healthyRecipe}
                                key={index}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default HealthyRecipe;
