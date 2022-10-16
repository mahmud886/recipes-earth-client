import React from 'react';

const SingleNutrition = (props) => {
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
    } = props.nutrition;
    return (
        <tr className='glass'>
            <th>{foodCode}</th>
            <th>{foodCategories}</th>
            <th>{foodNameEnglish}</th>
            <th>{foodNameBangla}</th>
            <th>{ediblePortionCoefficient}</th>
            <th>{energy}</th>
            <th>{water}</th>
            <th>{protein}</th>
            <th>{fat}</th>
            <th>{carbohydrate}</th>
            <th>{totalDietaryFibre}</th>
            <th>{ash}</th>
            <th>{ca}</th>
            <th>{fe}</th>
            <th>{mg}</th>
            <th>{p}</th>
            <th>{k}</th>
            <th>{na}</th>
            <th>{zn}</th>
            <th>{cu}</th>
            <th>{retinol}</th>
            <th>{betaCaroteneEquivalents}</th>
            <th>{vitaminA}</th>
            <th>{vitaminB6}</th>
            <th>{vitaminD}</th>
            <th>{vitaminE}</th>
            <th>{thiamin}</th>
            <th>{ribonflavin}</th>
            <th>{niacinEquivalents}</th>
            <th>{folate}</th>
            <th>{vitaminC}</th>
        </tr>
    );
};

export default SingleNutrition;
