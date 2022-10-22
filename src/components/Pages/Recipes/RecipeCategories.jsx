import React from 'react';
import Loading from '../../utils/Loading';

const RecipeCategories = ({ filterCategory, categories }) => {
    return (
        <>
            {categories.length === 0 ? (
                <Loading />
            ) : (
                <div className='flex flex-wrap justify-center py-3 uppercase'>
                    {categories?.map((category) => {
                        return (
                            <button
                                key={category}
                                className='btn btn-outline m-2'
                                onClick={() => filterCategory(category)}>
                                {category}
                            </button>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default RecipeCategories;
