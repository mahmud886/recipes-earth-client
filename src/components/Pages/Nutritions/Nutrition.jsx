import React, { useEffect, useState } from 'react';
import SingleNutrition from './SingleNutrition';

const apiEndPoint = `http://localhost:8080/api/v1/nutritions`;

const Nutrition = () => {
    const [getNutritions, setGetNutritions] = useState([]);
    const [searchApiFilter, setSearchApiFilter] = useState([]);
    const [filterValue, setFilterValue] = useState('');

    const fetchData = () => {
        return fetch(apiEndPoint)
            .then((response) => response.json())
            .then((data) => {
                setGetNutritions(data);
                setSearchApiFilter(data);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);

    // Search Filtering Function

    const handleFilter = (e) => {
        if (e.target.value === '') {
            setGetNutritions(searchApiFilter);
        } else {
            const filterResult = searchApiFilter.filter(
                (item) =>
                    item.foodCode
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase()) ||
                    item.foodNameEnglish
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase()) ||
                    item.foodNameBangla
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
            );
            setGetNutritions(filterResult);
        }
        setFilterValue(e.target.value);
    };

    // Search Filtering Function

    return (
        <div className='w-12/12 mx-auto pt-2 pb-20 m-2'>
            <div className='flex justify-center glass backdrop-blur-lg border-2 border-gray-600 rounded-lg  px-8 pt-6 pb-8 mb-4 flex-col my-2'>
                <div className='flex justify-center glass  border-2 border-gray-600 rounded-lg py-20 mb-10'>
                    <h2 className=' text-5xl uppercase text-dark'>
                        NUTRITION FACTS
                    </h2>
                </div>
                {/* ---------------SEARCH NUTRITION DATA------------------ */}
                <div className='flex items-center pb-10'>
                    <div className='relative w-full'>
                        <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                            <svg
                                aria-hidden='true'
                                className='w-5 h-5 text-gray-500 dark:text-gray-400'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    fillRule='evenodd'
                                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                                    clipRule='evenodd'></path>
                            </svg>
                        </div>
                        <input
                            value={filterValue}
                            onInput={(e) => handleFilter(e)}
                            type='text'
                            placeholder='Search by Food Code, English Name, Bangla Name then you can find easily any Nutrition Value...'
                            className='input input-bordered text-sm rounded-lg focus  block w-full pl-10 p-2.5 dark:placeholder '
                        />
                    </div>
                </div>
                {/* ---------------SEARCH NUTRITION DATA------------------ */}
                <div className='overflow-x-auto rounded-lg '>
                    <table className='table  w-full text-center '>
                        <thead>
                            <tr className=''>
                                <th className='py-4 px-6'>Details Button</th>
                                <th className='py-4 px-6'>Food Code</th>
                                <th className='py-4 px-6'>Cood Category</th>
                                <th className='py-4 px-6'>English Name</th>
                                <th className='py-4 px-6'>Bangla Name</th>
                                <th className='py-4 px-6'>
                                    Edible Portion Coefficient
                                </th>
                                <th className='py-4 px-6'>Energy (kcal) kJ</th>
                                <th className='py-4 px-6'>Water (g)</th>
                                <th className='py-4 px-6'>Protein (g)</th>
                                <th className='py-4 px-6'>Fat (g)</th>
                                <th className='py-4 px-6'>
                                    Carbohydrate available (g)
                                </th>
                                <th className='py-4 px-6'>
                                    Total dietary fibre (g)
                                </th>
                                <th className='py-4 px-6'>Ash (g)</th>
                                <th className='py-4 px-6'>Ca (mg)</th>
                                <th className='py-4 px-6'>Fe (mg)</th>
                                <th className='py-4 px-6'>Mg (mg)</th>
                                <th className='py-4 px-6'>P (mg)</th>
                                <th className='py-4 px-6'>K (mg)</th>
                                <th className='py-4 px-6'>Na (mg)</th>
                                <th className='py-4 px-6'>Zn (mg)</th>
                                <th className='py-4 px-6'>Cu (mg)</th>
                                <th className='py-4 px-6'>Retinol (mcg)</th>
                                <th className='py-4 px-6'>
                                    Beta-carotene equivalents (mcg)
                                </th>
                                <th className='py-4 px-6'>Vitamin A (mcg)</th>
                                <th className='py-4 px-6'>Vitamin B6 (mg)</th>
                                <th className='py-4 px-6'>Vitamin D (mcg)</th>
                                <th className='py-4 px-6'>Vitamin E (mg)</th>
                                <th className='py-4 px-6'>Thiamin (mg)</th>
                                <th className='py-4 px-6'>Riboflavin (mg)</th>
                                <th className='py-4 px-6'>
                                    Niacin equivalents (mg)
                                </th>
                                <th className='py-4 px-6'>Folate (mcg)</th>
                                <th className='py-4 px-6'>Vitamin C (mg)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getNutritions.map((nutrition, index) => (
                                <SingleNutrition
                                    key={nutrition.foodCode}
                                    nutrition={nutrition}
                                />
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th className='py-4 px-6'>Details Button</th>
                                <th className='py-4 px-6'>Food Code</th>
                                <th className='py-4 px-6'>Cood Category</th>
                                <th className='py-4 px-6'>English Name</th>
                                <th className='py-4 px-6'>Bangla Name</th>
                                <th className='py-4 px-6'>
                                    Edible Portion Coefficient
                                </th>
                                <th className='py-4 px-6'>Energy (kcal) kJ</th>
                                <th className='py-4 px-6'>Water (g)</th>
                                <th className='py-4 px-6'>Protein (g)</th>
                                <th className='py-4 px-6'>Fat (g)</th>
                                <th className='py-4 px-6'>
                                    Carbohydrate available (g)
                                </th>
                                <th className='py-4 px-6'>
                                    Total dietary fibre (g)
                                </th>
                                <th className='py-4 px-6'>Ash (g)</th>
                                <th className='py-4 px-6'>Ca (mg)</th>
                                <th className='py-4 px-6'>Fe (mg)</th>
                                <th className='py-4 px-6'>Mg (mg)</th>
                                <th className='py-4 px-6'>P (mg)</th>
                                <th className='py-4 px-6'>K (mg)</th>
                                <th className='py-4 px-6'>Na (mg)</th>
                                <th className='py-4 px-6'>Zn (mg)</th>
                                <th className='py-4 px-6'>Cu (mg)</th>
                                <th className='py-4 px-6'>Retinol (mcg)</th>
                                <th className='py-4 px-6'>
                                    Beta-carotene equivalents (mcg)
                                </th>
                                <th className='py-4 px-6'>Vitamin A (mcg)</th>
                                <th className='py-4 px-6'>Vitamin B6 (mg)</th>
                                <th className='py-4 px-6'>Vitamin D (mcg)</th>
                                <th className='py-4 px-6'>Vitamin E (mg)</th>
                                <th className='py-4 px-6'>Thiamin (mg)</th>
                                <th className='py-4 px-6'>Riboflavin (mg)</th>
                                <th className='py-4 px-6'>
                                    Niacin equivalents (mg)
                                </th>
                                <th className='py-4 px-6'>Folate (mcg)</th>
                                <th className='py-4 px-6'>Vitamin C (mg)</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Nutrition;
