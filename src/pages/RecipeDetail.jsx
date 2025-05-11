import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function RecipeDetail() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
      const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;

      try {
        const response = await axios.get(url);
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-5">Loading recipe details...</p>;
  }

  return (
    <div className="container">
      <button className="btn btn-secondary my-3" onClick={() => navigate(-1)}>
        ⏪ Go Back
      </button>
      <h1 className="text-center text-white">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="img-fluid rounded mx-auto d-block" />
      <h4 className="mt-4 text-white">Ingredients:</h4>
      <ul className="recipe-text">
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h4 className="mt-4 text-white">Instructions:</h4>
      <p className="recipe-text" dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
    </div>
  );
}

export default RecipeDetail;
