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
import Profile from './components/Pages/Profile/Profile';
import SignUp from './components/Pages/Auth/SignUp';
import Login from './components/Pages/Auth/Login';
import NutritionDetail from './components/Pages/Nutritions/NutritionDetail';
// import Categories from './components/Pages/Categories/Categories';
import CategoriesRecipes from './components/Pages/Categories/CategoriesRecipes';
import ChickenPageDetails from './components/Pages/Recipes/RecipePages/ChickenPage/ChickenPageDetails';
import ChickenPage from './components/Pages/Recipes/RecipePages/ChickenPage/ChickenPage';

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
                            element={<AddNutrition />}
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
                            element={<AddRecipies />}
                        />

                        <Route
                            path='categories-recipe'
                            element={<CategoriesRecipes />}
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
                        <Route path='profile' element={<Profile />} />

                        <Route path='sign-up' element={<SignUp />} />
                        <Route path='login' element={<Login />} />
                    </Routes>
                    <ToastContainer />
                </div>
            </div>
        </>
    );
}

export default App;
