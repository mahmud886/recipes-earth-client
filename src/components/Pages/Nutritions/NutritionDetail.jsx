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
                    <h2 className=' text-5xl uppercase text-dark'>
                        Nutrition Facts : {foodCode}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default NutritionDetail;
