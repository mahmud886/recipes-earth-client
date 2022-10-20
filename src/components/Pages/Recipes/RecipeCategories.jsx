import React from 'react';

const RecipeCategories = ({ filterCategory, categories }) => {
    return (
        <>
            <div className='flex flex-wrap justify-center py-3 uppercase'>
                {categories.length === 0
                    ? 'No Categories Button'
                    : categories?.map((category) => {
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
        </>
    );
};

export default RecipeCategories;
