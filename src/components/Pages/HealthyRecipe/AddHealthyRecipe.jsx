import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddHealthyRecipie = () => {
    const { register, handleSubmit, reset } = useForm();

    const imageStorageKey = '263878f680072cf1880d378e0df5c2c2';

    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const imgDbUrl = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(imgDbUrl, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    toast.success('Recipe data successfully added..');
                    reset();
                    const img = result.data.url;

                    const recipe = {
                        recipeTitle: data.recipeTitle,
                        recipeSummary: data.recipeSummary,
                        recipeDuration: data.recipeDuration,
                        recipeServing: data.recipeServing,
                        recipeType: data.recipeType,
                        recipeCategory: data.recipeCategory,
                        recipeDescription: data.recipeDescription,
                        recipeIngredients: data.recipeIngredients,
                        recipeNutritionServeSize: data.recipeNutritionServeSize,
                        recipeNutritionPerServe: data.recipeNutritionPerServe,
                        recipeNutritionExchanges: data.recipeNutritionExchanges,
                        recipeSteps: data.recipeSteps,
                        image: img,
                    };
                    const url = `http://localhost:8080/api/v1/healthyRecipes`;
                    fetch(url, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(recipe),
                    })
                        .then((res) => res.json())
                        .then((inserted) => {
                            console.log('Healthy Recipe', inserted);
                            // if (inserted) {
                            //     toast.success(
                            //         'Recipe data successfully added..'
                            //     );
                            //     reset();
                            // } else {
                            //     toast.error('Recipe data cannot added..');
                            // }
                        });
                }
            });

        // const url = `http://localhost:8080/api/v1/recipes`;
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then((res) => res.json())
        //     .then((result) => {
        //         console.log(result);
        //         toast('Nutrition data successfully added..');
        //     });
    };

    return (
        <div className='w-12/12 mx-auto pt-2 pb-20 m-2'>
            <div className='flex justify-center glass backdrop-blur-lg border-2 border-gray-600 rounded-lg  px-8 pt-6 pb-8 mb-4 flex-col my-2'>
                <div className='flex justify-center glass  border-2 border-gray-600 rounded-lg py-20 mb-10'>
                    <h2 className=' text-5xl uppercase text-dark'>
                        ADD HEALTHY RECIPE
                    </h2>
                </div>

                {/* ADD RECIPE FORM */}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='w-full'>
                        <div className='mb-5'>
                            <div className='form-control w-full mb-6 md:mb-0'>
                                <label className='label'>
                                    <span className='label-text'>
                                        Recipe Title
                                    </span>
                                </label>
                                <input
                                    {...register('recipeTitle')}
                                    placeholder='Enter Recipe Title Here'
                                    className='input input-bordered input-md w-full '
                                />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <div className='form-control w-full mb-6 md:mb-0'>
                                <label className='label'>
                                    <span className='label-text'>
                                        Recipe Summary
                                    </span>
                                </label>
                                <textarea
                                    className='textarea textarea-bordered h-24'
                                    {...register('recipeSummary')}
                                    placeholder='Enter Recipe Summary'
                                />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <div className='form-control w-full mb-6 md:mb-0'>
                                <label className='label'>
                                    <span className='label-text'>
                                        Recipe Duration
                                    </span>
                                </label>
                                <input
                                    {...register('recipeDuration')}
                                    placeholder='Enter Recipe Duration Here'
                                    className='input input-bordered input-md w-full '
                                />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <div className='form-control w-full mb-6 md:mb-0'>
                                <label className='label'>
                                    <span className='label-text'>
                                        Recipe Serving
                                    </span>
                                </label>
                                <input
                                    {...register('recipeServing')}
                                    placeholder='Enter Recipe Serving'
                                    className='input input-bordered input-md w-full '
                                />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <div className='form-control w-full mb-6 md:mb-0'>
                                <label className='label'>
                                    <span className='label-text'>
                                        Recipe Type
                                    </span>
                                </label>
                                <input
                                    {...register('recipeType')}
                                    placeholder='Enter Recipe Type Lunch/ Dinner / Fastfood/ Snacks...'
                                    className='input input-bordered input-md w-full '
                                />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <div className='form-control w-full mb-6 md:mb-0'>
                                <label className='label'>
                                    <span className='label-text'>
                                        Recipe Category
                                    </span>
                                </label>
                                <input
                                    {...register('recipeCategory')}
                                    placeholder='Enter Recipe Category Like- Chicken / Sweet / Veggie'
                                    className='input input-bordered input-md w-full '
                                />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <div className='form-control w-full mb-6 md:mb-0'>
                                <label className='label'>
                                    <span className='label-text'>
                                        Recipe Description
                                    </span>
                                </label>
                                <textarea
                                    className='textarea textarea-bordered h-24'
                                    {...register('recipeDescription')}
                                    placeholder='Enter Recipe Description'
                                />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <div className='form-control w-full mb-6 md:mb-0'>
                                <label className='label'>
                                    <span className='label-text'>
                                        Recipe Ingredients
                                    </span>
                                </label>
                                <textarea
                                    className='textarea textarea-bordered h-24'
                                    {...register('recipeIngredients')}
                                    placeholder='Enter Recipe Ingredients '
                                />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <div className='form-control w-full mb-6 md:mb-0'>
                                <label className='label'>
                                    <span className='label-text'>
                                        Recipe Step
                                    </span>
                                </label>
                                <textarea
                                    className='textarea textarea-bordered h-24'
                                    {...register('recipeSteps')}
                                    placeholder='Enter Recipe Steps'
                                />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <div className='form-control w-full mb-6 md:mb-0'>
                                <label className='label'>
                                    <span className='label-text'>
                                        Recipe Nutrition Serve Size
                                    </span>
                                </label>
                                <input
                                    {...register('recipeNutritionServeSize')}
                                    placeholder='Serving Size: 1 sandwich'
                                    className='input input-bordered input-md w-full '
                                />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <div className='form-control w-full mb-6 md:mb-0'>
                                <label className='label'>
                                    <span className='label-text'>
                                        Recipe Nutrition Per Serve
                                    </span>
                                </label>
                                <input
                                    {...register('recipeNutritionPerServe')}
                                    placeholder='Per Serving: 325 calories; protein 12.8g'
                                    className='input input-bordered input-md w-full '
                                />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <div className='form-control w-full mb-6 md:mb-0'>
                                <label className='label'>
                                    <span className='label-text'>
                                        Recipe Nutrition Exchanges
                                    </span>
                                </label>
                                <input
                                    {...register('recipeNutritionExchanges')}
                                    placeholder='Exchanges: 2 fat, 1 1/2 starch, 1 vegetable, 1/2 lean protein, 1/2 carbohydrate '
                                    className='input input-bordered input-md w-full '
                                />
                            </div>
                        </div>

                        <div className='mb-5'>
                            <div className='form-control w-full mb-6 md:mb-0'>
                                <label className='label'>
                                    <span className='label-text'>
                                        File Choose
                                    </span>
                                </label>
                                <input
                                    className='form-control w-full mb-6 md:mb-0'
                                    {...register('image')}
                                    placeholder='Enter Recipe Image'
                                    type='file'
                                />
                            </div>
                        </div>

                        <div className='flex  justify-between'>
                            <button className='btn btn-wide' type='submit'>
                                SUBMIT
                            </button>
                            <button
                                className='btn btn-wide btn-error'
                                type='button'
                                onClick={() => {
                                    reset();
                                }}>
                                RESET
                            </button>
                        </div>
                    </div>
                </form>

                <div />
            </div>
        </div>
    );
};

export default AddHealthyRecipie;
