import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

const NutritionDetail = () => {
    const { id } = useParams();
    const [nutritionDetails, setNutritionDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/nutritions/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setNutritionDetails(data.nutrition);
            });
    }, [id]);

    const {
        foodCode,
        foodCategories,
        foodNameEnglish,
        foodNameBangla,
        ediblePortionCoefficient,
        energy,
        water,
        protein,
        fat,
        carbohydrate,
        totalDietaryFibre,
        ash,
        ca,
        fe,
        mg,
        p,
        k,
        na,
        zn,
        cu,
        retinol,
        betaCaroteneEquivalents,
        vitaminA,
        vitaminB6,
        vitaminD,
        vitaminE,
        thiamin,
        ribonflavin,
        niacinEquivalents,
        folate,
        vitaminC,
    } = nutritionDetails;

    return (
        <div className='w-12/12 mx-auto pt-2 pb-20 m-2'>
            <div className='flex justify-center glass backdrop-blur-lg border-2 border-gray-600 rounded-lg  px-8 pt-6 pb-8 mb-4 flex-col my-2'>
                <div className='flex justify-center glass  border-2 border-gray-600 rounded-lg py-20 mb-10'>
                    <h2 className=' text-5xl uppercase text-dark text-center'>
                        Nutrition Facts : <br /> <br />
                        <br />
                        English Name: {foodNameEnglish} <br />
                        <br />
                        Bangla Name: {foodNameBangla}
                    </h2>
                </div>
                <div className='glass  border-2 border-gray-600 rounded-lg py-20 mb-10'>
                    <h2 className=' text-3xl uppercase text-dark text-center'>
                        Nutrition Information
                    </h2>
                    <div className='text-center uppercase font-bold py-4'>
                        <p>
                            Food Code: &nbsp;&nbsp;
                            {foodCode}
                        </p>
                        <p>
                            Category Name:
                            {foodCategories}
                        </p>
                        <p>
                            Edible Portion Coefficient Per 100g: &nbsp;&nbsp;
                            {ediblePortionCoefficient}.00
                        </p>
                    </div>
                    <div className='flex flex-col w-full lg:flex-row p-3'>
                        <div className='grid flex-grow h-auto card   place-items-center m-20 glass  border-2 border-gray-600 rounded-lg py-20 mb-10'>
                            <h5 className='font-bold text-xl uppercase'>
                                Calorie Information
                            </h5>
                            <li className='list-none'>
                                Calories:&nbsp;{' '}
                                <strong>{energy} &nbsp;(kJ)</strong>
                            </li>
                            <li className='list-none'>
                                Carbohydrate:&nbsp;{' '}
                                <strong>{carbohydrate} &nbsp;(g)</strong>
                            </li>
                            <li className='list-none'>
                                Fat:&nbsp; <strong>{fat} &nbsp;(g)</strong>
                            </li>
                            <li className='list-none'>
                                Protein:&nbsp;{' '}
                                <strong>{protein} &nbsp;(g)</strong>
                            </li>
                        </div>

                        <div className='grid flex-grow h-auto card rounded-box place-items-center m-20 glass  border-2 border-gray-600  py-20 mb-10'>
                            <h5 className='font-bold text-xl uppercase'>
                                Carbohydrates
                            </h5>
                            <li className='list-none'>
                                Carbohydrate:&nbsp;{' '}
                                <strong>{carbohydrate} &nbsp;(g)</strong>
                            </li>
                            <li className='list-none'>
                                Dietary Fiber:&nbsp;{' '}
                                <strong>{totalDietaryFibre} &nbsp;(g)</strong>
                            </li>
                            <li className='list-none'>
                                Fat:&nbsp; <strong>{fat} &nbsp;(g)</strong>
                            </li>
                            <li className='list-none'>
                                Protein:&nbsp;{' '}
                                <strong>{protein} &nbsp;(g)</strong>
                            </li>
                        </div>
                    </div>

                    <div className='flex flex-col w-full lg:flex-row p-3'>
                        <div className='grid flex-grow h-auto card   place-items-center m-20 glass  border-2 border-gray-600 rounded-lg py-20 mb-10'>
                            <h5 className='font-bold text-xl uppercase'>
                                Vitamins
                            </h5>
                            <li className='list-none'>
                                Vitamin A:&nbsp;{' '}
                                <strong>{vitaminA} &nbsp;(mcg)</strong>
                            </li>
                            <li className='list-none'>
                                Vitamin B6:&nbsp;{' '}
                                <strong>{vitaminB6} &nbsp;(mcg)</strong>
                            </li>
                            <li className='list-none'>
                                Vitamin C:&nbsp;{' '}
                                <strong>{vitaminC} &nbsp;(mcg)</strong>
                            </li>
                            <li className='list-none'>
                                Vitamin D:&nbsp;{' '}
                                <strong>&nbsp;{vitaminD} &nbsp;(mcg)</strong>
                            </li>
                            <li className='list-none'>
                                Vitamin E: &nbsp;
                                <strong>{vitaminE} &nbsp;(mcg)</strong>
                            </li>
                            <li className='list-none'>
                                Thiamin:&nbsp;{' '}
                                <strong>{thiamin} &nbsp;(mg)</strong>
                            </li>

                            <li className='list-none'>
                                Riboflavin:&nbsp;{' '}
                                <strong>{ribonflavin} &nbsp;(mg)</strong>
                            </li>
                            <li className='list-none'>
                                Niacin:&nbsp;{' '}
                                <strong>{niacinEquivalents} &nbsp;(mg)</strong>
                            </li>
                            <li className='list-none'>
                                Folate:&nbsp;{' '}
                                <strong>{folate} &nbsp;(mg)</strong>
                            </li>
                        </div>

                        <div className='grid flex-grow h-auto card   place-items-center m-20 glass  border-2 border-gray-600 rounded-lg py-20 mb-10'>
                            <h5 className='font-bold text-xl uppercase'>
                                Minarels
                            </h5>
                            <li className='list-none'>
                                Calcium: &nbsp; <strong>{ca} &nbsp;(mg)</strong>
                            </li>
                            <li className='list-none'>
                                Fluoride:&nbsp; <strong>{fe} &nbsp;(mg)</strong>
                            </li>
                            <li className='list-none'>
                                Magnesium:&nbsp;{' '}
                                <strong>{mg} &nbsp;(mcg)</strong>
                            </li>
                            <li className='list-none'>
                                Phosphorus:&nbsp;{' '}
                                <strong>{p} &nbsp;(mcg)</strong>
                            </li>
                            <li className='list-none'>
                                Potassium:&nbsp;{' '}
                                <strong>{k} &nbsp;(mcg)</strong>
                            </li>
                            <li className='list-none'>
                                Sodium:&nbsp; <strong>{na} &nbsp;(mg)</strong>
                            </li>

                            <li className='list-none'>
                                Zinc:&nbsp; <strong>{zn} &nbsp;(mg)</strong>
                            </li>
                            <li className='list-none'>
                                Copper:&nbsp; <strong>{cu} &nbsp;(mg)</strong>
                            </li>
                            <li className='list-none'>
                                Folate:&nbsp;{' '}
                                <strong>{folate} &nbsp;(mg)</strong>
                            </li>
                        </div>
                    </div>
                    <div className='flex flex-col w-full lg:flex-row p-3'>
                        <div className='grid flex-grow h-auto card   place-items-center m-20 glass  border-2 border-gray-600 rounded-lg py-20 mb-10'>
                            <h5 className='font-bold text-xl uppercase'>
                                Other
                            </h5>
                            <li className='list-none'>
                                Water:&nbsp; <strong>{water} &nbsp;(kJ)</strong>
                            </li>
                            <li className='list-none'>
                                Ash:&nbsp; <strong>{ash} &nbsp;(g)</strong>
                            </li>
                            <li className='list-none'>
                                Retinol:&nbsp;{' '}
                                <strong>{retinol} &nbsp;(g)</strong>
                            </li>
                            <li className='list-none'>
                                Beta Carotene Equivalents:&nbsp;{' '}
                                <strong>
                                    {betaCaroteneEquivalents} &nbsp;(g)
                                </strong>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NutritionDetail;
