import React, { useState, useContext } from "react";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { Link } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";



function Home() {
  const [recipes, setRecipes] = useState([]);
  const { addFavorite } = useContext(FavoritesContext);


  const searchRecipes = async (query) => {
    const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`;

    try {
      const response = await axios.get(url);
      setRecipes(response.data.results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Recipe Finder 🍽️</h1>
      <SearchBar onSearch={searchRecipes} />
      <div className="row">
  {recipes.map((recipe) => (
    <div key={recipe.id} className="col-md-4 mb-4">
      <div className="card">
        <Link to={`/recipe/${recipe.id}`} className="text-decoration-none text-dark">
          <img src={recipe.image} className="card-img-top" alt={recipe.title} />
          <div className="card-body">
            <h5 className="card-title">{recipe.title}</h5>
          </div>
        </Link>
        <div className="card-footer text-center">
          <button className="btn btn-outline-danger" onClick={() => addFavorite(recipe)}>
            ❤️ Add to Favorites
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default Home;
