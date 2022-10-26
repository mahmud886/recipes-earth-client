import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/Home/Header';
import Home from './components/Home/Home';
import AddNutrition from './components/Pages/Nutritions/AddNutrition';
import Nutrition from './components/Pages/Nutritions/Nutrition';
import AddRecipies from './components/Pages/Recipes/AddRecipies';
import background from './assets/images/recipes-earth-bg.jpg';
import Recipe from './components/Pages/Recipes/Recipe';
import RecipeDetails from './components/Pages/Recipes/RecipeDetails';
import Profile from './components/Pages/Auth/Profile/Profile';
import SignUp from './components/Pages/Auth/SignUp';
import Login from './components/Pages/Auth/Login';
import NutritionDetail from './components/Pages/Nutritions/NutritionDetail';
import CategoriesRecipes from './components/Pages/Categories/CategoriesRecipes';
import ChickenPageDetails from './components/Pages/Recipes/RecipePages/ChickenPage/ChickenPageDetails';
import ChickenPage from './components/Pages/Recipes/RecipePages/ChickenPage/ChickenPage';
import BreakfastPage from './components/Pages/Recipes/RecipePages/BreakfastPage/BreakfastPage';
import BreakfastPageDetails from './components/Pages/Recipes/RecipePages/BreakfastPage/BreakfastPageDetails';
import DessertPageDetails from './components/Pages/Recipes/RecipePages/DessertPage/DessertPagedetails';
import DessertPage from './components/Pages/Recipes/RecipePages/DessertPage/DessertPage';
import AddHealthyRecipie from './components/Pages/HealthyRecipe/AddHealthyRecipe';
import HealthyRecipe from './components/Pages/HealthyRecipe/HealthyRecipe';
import HealthyRecipeDetails from './components/Pages/HealthyRecipe/HealthyRecipeDetails';
import Footer from './components/Home/Footer';
import RequireAuth from './components/Pages/Auth/RequireAuth';

function App() {
    return (
        <>
            <div
                className='bg-cover min-h-screen bg-fixed bg-gradient-to-r from-cyan-800 to-blue-900 '
                style={{ backgroundImage: `url(${background})` }}>
                <div className='w-9/12 mx-auto'>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />}></Route>

                        <Route
                            path='nutrition/add-nutrition'
                            element={
                                <RequireAuth>
                                    <AddNutrition />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path='nutrition/all-nutritions'
                            element={<Nutrition />}
                        />
                        <Route
                            path='nutrition/:id'
                            element={<NutritionDetail />}
                        />
                        <Route
                            path='recipe/add-recipe'
                            element={
                                <RequireAuth>
                                    <AddRecipies />
                                </RequireAuth>
                            }
                        />

                        <Route
                            path='categories-recipe'
                            element={<CategoriesRecipes />}
                        />

                        <Route
                            path='healthyRrecipes/add-healthy-recipe'
                            element={<AddHealthyRecipie />}
                        />

                        <Route
                            path='healthyRecipes/all-recipes'
                            element={<HealthyRecipe />}
                        />

                        <Route
                            path='healthyRecipes/:id'
                            element={<HealthyRecipeDetails />}
                        />

                        <Route path='recipe/all-recipes' element={<Recipe />} />

                        <Route path='recipe/:id' element={<RecipeDetails />} />

                        <Route
                            path='recipe/chicken-recipes'
                            element={<ChickenPage />}
                        />
                        <Route
                            path='recipe/:id'
                            element={<ChickenPageDetails />}
                        />

                        <Route
                            path='recipe/breakfast-recipes'
                            element={<BreakfastPage />}
                        />
                        <Route
                            path='recipe/:id'
                            element={<BreakfastPageDetails />}
                        />

                        <Route
                            path='recipe/dessert-recipes'
                            element={<DessertPage />}
                        />
                        <Route
                            path='recipe/:id'
                            element={<DessertPageDetails />}
                        />

                        <Route
                            path='profile'
                            element={
                                <RequireAuth>
                                    <Profile />
                                </RequireAuth>
                            }
                        />

                        <Route path='sign-up' element={<SignUp />} />
                        <Route path='login' element={<Login />} />
                    </Routes>
                    <ToastContainer />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
