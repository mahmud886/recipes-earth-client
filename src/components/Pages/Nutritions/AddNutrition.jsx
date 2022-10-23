import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddNutrition = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);

        const url = `http://localhost:8080/api/v1/nutritions`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                toast('Nutrition data successfully added..');
                reset();
            });
    };
    return (
        <div className='w-12/12 mx-auto pt-2 pb-20 m-2'>
            <div className='flex justify-center glass backdrop-blur-lg border-2 border-gray-600 rounded-lg  px-8 pt-6 pb-8 mb-4 flex-col my-2'>
                <div className='flex justify-center glass  border-2 border-gray-600 rounded-lg py-20 mb-10'>
                    <h2 className=' text-5xl uppercase text-dark'>
                        Add Nutritions Data to Database
                    </h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='-mx-4 md:flex mb-6 '>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>Food Code</span>
                            </label>
                            <input
                                {...register('foodCode')}
                                placeholder='Enter Food Code'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>
                                    Food Categories
                                </span>
                            </label>
                            <input
                                {...register('foodCategories')}
                                placeholder='Enter Food Categories'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>
                                    Food Name English
                                </span>
                            </label>
                            <input
                                {...register('foodNameEnglish')}
                                placeholder='Food Name English'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>
                                    Food Name Bangla
                                </span>
                            </label>
                            <input
                                {...register('foodNameBangla')}
                                placeholder='Enter Food Name Bangla'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                    </div>

                    <div className='-mx-4 md:flex mb-6'>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>
                                    Edible Portion Coefficient
                                </span>
                            </label>
                            <input
                                {...register('ediblePortionCoefficient')}
                                placeholder='Edible Portion Coefficient'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>Energy</span>
                            </label>
                            <input
                                {...register('energy')}
                                placeholder='Enter Energy (g)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>

                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>Water</span>
                            </label>
                            <input
                                {...register('water')}
                                placeholder='Enter Water (g)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>Protein</span>
                            </label>
                            <input
                                {...register('protein')}
                                placeholder='Enter Protein (g)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                    </div>
                    <div className='-mx-4 md:flex mb-6'>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>Fat</span>
                            </label>
                            <input
                                {...register('fat')}
                                placeholder='Enter Fat (g)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>Carbohydrate</span>
                            </label>
                            <input
                                {...register('carbohydrate')}
                                placeholder='Enter Carbohydrate (g)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>
                                    Total Dietary Fibre
                                </span>
                            </label>
                            <input
                                {...register('totalDietaryFibre')}
                                placeholder='Enter Total Dietary Fibre (g)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>Ash</span>
                            </label>
                            <input
                                {...register('ash')}
                                placeholder='Enter Ash (g)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                    </div>
                    <div className='-mx-4 md:flex mb-6'>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>Ca</span>
                            </label>
                            <input
                                {...register('ca')}
                                placeholder='Enter Ca (mg)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>Fe</span>
                            </label>
                            <input
                                {...register('fe')}
                                placeholder='Enter Fe (mg)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>Mg</span>
                            </label>
                            <input
                                {...register('mg')}
                                placeholder='Enter Mg (mg)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>P</span>
                            </label>
                            <input
                                {...register('p')}
                                placeholder='Enter P (mg)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                    </div>

                    <div className='-mx-4 md:flex mb-6'>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>K</span>
                            </label>
                            <input
                                {...register('k')}
                                placeholder='Enter K (mg)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>

                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>Na</span>
                            </label>
                            <input
                                {...register('na')}
                                placeholder='Enter Na (mg)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>Zn</span>
                            </label>
                            <input
                                {...register('zn')}
                                placeholder='Enter Zn (mg)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>Cu</span>
                            </label>
                            <input
                                {...register('cu')}
                                placeholder='Enter Cu (mg)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                    </div>

                    <div className='-mx-4 md:flex mb-6'>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>Vitamin A</span>
                            </label>
                            <input
                                {...register('vitaminA')}
                                placeholder='Enter Vitamin A (mcg)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>Retinol</span>
                            </label>
                            <input
                                {...register('retinol')}
                                placeholder='Enter Retinol (mcg)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>
                                    Beta-carotene equivalents
                                </span>
                            </label>
                            <input
                                {...register('betaCaroteneEquivalents')}
                                placeholder='Enter Beta-carotene equivalents (mcg)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>Vitamin D</span>
                            </label>
                            <input
                                {...register('vitaminD')}
                                placeholder='Enter Vitamin D (mcg)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                    </div>

                    <div className='-mx-4 md:flex mb-6'>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>Vitamin E</span>
                            </label>
                            <input
                                {...register('vitaminE')}
                                placeholder='Enter Vitamin E (mcg)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>Thiamin</span>
                            </label>
                            <input
                                {...register('thiamin')}
                                placeholder='Enter Thiamin (mg)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>Riboflavin</span>
                            </label>
                            <input
                                {...register('ribonflavin')}
                                placeholder='Enter Riboflavin (mg)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>
                                    Niacin equivalents
                                </span>
                            </label>
                            <input
                                {...register('niacinEquivalents')}
                                placeholder='Enter Niacin equivalents (mg)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                    </div>

                    <div className='-mx-4 md:flex mb-6'>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>Vitamin B6</span>
                            </label>
                            <input
                                {...register('vitaminB6')}
                                placeholder='Vitamin B6 (mg)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>Folate(mcg)</span>
                            </label>
                            <input
                                {...register('folate')}
                                placeholder='Enter Folate(mcg)'
                                className='input input-bordered w-full max-w-xs'
                            />
                        </div>
                        <div className='form-control w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='label'>
                                <span className='label-text'>
                                    Vitamin C(mg)
                                </span>
                            </label>
                            <input
                                {...register('vitaminC')}
                                placeholder='Enter Vitamin C (mg)'
                                className='input input-bordered w-full max-w-xs'
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
                </form>
            </div>
        </div>
    );
};

export default AddNutrition;
