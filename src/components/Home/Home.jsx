import React from 'react';
import { NavLink } from 'react-router-dom';
import NutritionDetail from '../Pages/Nutritions/NutritionDetail';
import ChickenPage from '../Pages/Recipes/RecipePages/ChickenPage/ChickenPage';
import BannerSlider from './BannerSlider';

const Home = () => {
    return (
        <div className='w-12/12 mx-auto pt-2 pb-20 m-2'>
            <div className='flex justify-center glass backdrop-blur-lg border-2 border-gray-600 rounded-lg  px-8 pt-6 pb-8 mb-4 flex-col my-2'>
                <div className='rounded-lg '>
                    <BannerSlider />
                </div>
                <div className='py-5'>
                    <h2 className='font-normal text-center uppercase mb-10 text-2xl'>
                        Chicken Recipes
                    </h2>
                    <ChickenPage />
                </div>

                <div className='py-20'>
                    <h2 className='font-normal text-center uppercase mb-10 text-6xl'>
                        About
                    </h2>
                    <div className='text-center justify'>
                        <p className='mx-20 text-2xl'>
                            In this modern world, there is no alternative to
                            healthy eating. To make it easier we are launching a
                            web app that is compatible with various types of
                            diets comes with a large database of exclusively
                            nutritious and tasty recipes which are planned and
                            illustrated by combined efforts of certified
                            nutritionists, chefs and wellness coaches. These not
                            only supports macronutrients and net carbs but also
                            promote all aspects of a healthy lifestyle. <br />
                            <br /> A healthful eating regimen is important for
                            fitness and nutrients. It protects you from many
                            persistent non-communicable sicknesses along with
                            coronary heart disease, diabetes and cancer. A
                            healthful eating regimen calls for a various eating
                            regimen and a discount in salt, sugar, saturated and
                            processed trans fat. The significance of a balanced
                            eating regimen for a healthful life-style can not be
                            overemphasized. <br />
                            <br /> A healthful life-style may be done through
                            keeping a balanced eating regimen, deliberating that
                            each one important vitamins required through the
                            frame areimport from 'react-router-dom'; covered. A
                            right nutrients plan permit you to obtain your best
                            weight and decrease your chance of persistent
                            sicknesses along with diabetes, cardiovascular
                            disease, and different cancers.
                        </p>
                    </div>
                </div>

                <div className='pb-20'>
                    <h2 className='font-normal text-center uppercase mb-10 text-6xl'>
                        Nutrition Facts
                    </h2>
                    <div className='text-center justify'>
                        <p className='mx-20 text-2xl'>
                            This new edition of the Bangladesh food composition
                            table is based on a systematic data management
                            process and on international standards and
                            guidelines for food composition. Food composition
                            data from various research institutes, universities,
                            national and international NGOs in Bangladesh were
                            collected and compiled. <br /> <br /> In addition,
                            20 key foods were analyzed for proximate, mineral,
                            vitamin, fatty acid and amino acid composition. Food
                            composition data from other sources (e.g. Indian
                            FCT, Vietnam FCT, USDA, scientific literature) were
                            used to supplement missing values. The FCT contains
                            381 foods and 87 components. Most of the data are
                            for raw foods. Values for cooked foods and recipes
                            were calculated by using yield factors from Islam et
                            al (2012) and Rahim et al (2013) and retention
                            factors from Eurofir (Vásquez-Caicedo et al., 2008).
                            <br /> <br /> The FCT is divided in a main table
                            (containing values on proximates, minerals and
                            vitamin) and several annex tables for amino acids,
                            fatty acids, sugar, antioxidants and antinutrients.
                            Moreover, this edition contains protein values based
                            on food-specific nitrogen to protein conversion
                            factors instead of a general factor of 6.25 and
                            emphasis was given to include values for total
                            dietary fibre.
                        </p>

                        <div className='flex justify-center m-2'>
                            <NavLink to='/nutritons' className='ml-2'>
                                <button className='btn btn-outline'>
                                    Nutriton Page
                                </button>
                            </NavLink>
                            <NavLink
                                to='/nutritons-guidelines'
                                className='ml-2'>
                                <button className='btn btn-outline'>
                                    Nutrition Guidelines
                                </button>
                            </NavLink>
                            <NavLink
                                to='/nutrition/all-nutritions'
                                className='ml-2'>
                                <button className='btn btn-outline'>
                                    Food Nutriton Data
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className='pb-20'>
                    <h2 className='font-normal text-center uppercase mb-10 text-6xl'>
                        Healthly Recipes
                    </h2>
                    <div className='text-center justify'>
                        <p className='mx-20 text-2xl'>
                            Food is generally cooked in some form before
                            consumption. Depending on the type and condition of
                            the food and the desired end product, the required
                            heat treatment will follow (e.g. boiling in water,
                            frying in oil, or steaming). The purpose of the
                            preparation is to convert the food into an edible
                            form that is termed as the recipe. <br />
                            <br />
                            Nutrient values of cooked foods were calculated by
                            using the nutrient retention factors (RF) from
                            EuroFIR (Vásquez-Caicedo et al., 2008) and yield
                            factors (YF) from (Islam et al, 2012, Rahim et al.,
                            2009, Pasricha et al, 2006 and Bergström, 1994). The
                            mixed recipe calculation method was used. This means
                            that Yield factors (YF) are applied at the recipe
                            level and nutrient retention factors (RF) are
                            applied at the ingredient level (see below).
                        </p>

                        <div className='flex justify-center m-2'>
                            <NavLink to='/healty-recipes' className='ml-2'>
                                <button className='btn btn-outline'>
                                    Healthy Recipes
                                </button>
                            </NavLink>
                            <NavLink to='/recipe/all-recipes' className='ml-2'>
                                <button className='btn btn-outline'>
                                    Recipes
                                </button>
                            </NavLink>
                            <NavLink to='/user/recipes' className='ml-2'>
                                <button className='btn btn-outline'>
                                    User Recipes
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
