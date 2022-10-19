import React, { useState, useEffect } from 'react';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/categories`)
            .then((response) => response.json())
            .then((data) => {
                setCategories(data);
            });
    });

    return (
        <div className='w-12/12 mx-auto pt-2 pb-20 m-2'>
            <div className='flex justify-center glass backdrop-blur-lg border-2 border-gray-600 rounded-lg  px-8 pt-6 pb-8 mb-4 flex-col my-2'>
                <div className='flex justify-center glass  border-2 border-gray-600 rounded-lg py-20 mb-10'>
                    <h2 className=' text-5xl uppercase text-dark'>
                        Categories Page
                    </h2>
                </div>

                <div className=' glass   border-2 border-gray-600 rounded-lg p-5 mb-10'>
                    <div className='grid grid-cols-4 gap-4 place-content-center mx-auto'>
                        {categories.map((category, index) => {
                            const { categoryName, categoryType, image } =
                                category;
                            return (
                                <div className='text-white card w-70 bg-base-100 shadow-xl image-full'>
                                    <figure>
                                        <img
                                            src='https://placeimg.com/400/225/arch'
                                            alt='Shoes'
                                        />
                                    </figure>
                                    <div className='card-body text-center uppercase'>
                                        <h2 className='text-2xl font-bold text-center'>
                                            {categoryName}
                                        </h2>
                                        <p>{categoryType}</p>
                                        <div className='card-actions justify-center'>
                                            <button className='text-white btn btn-ghost btn-outline w-full'>
                                                See Recipes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
