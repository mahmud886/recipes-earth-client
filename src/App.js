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
function App() {
    return (
        <>
            <div
                className='bg-cover min-h-screen bg-fixed'
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
                            path='recipe/add-recipe'
                            element={<AddRecipies />}
                        />
                        <Route path='recipe/all-recipes' element={<Recipe />} />
                        <Route path='recipe/:id' element={<RecipeDetails />} />
                    </Routes>
                    <ToastContainer />
                </div>
            </div>
        </>
    );
}

export default App;
