import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import { Link } from "react-router-dom";

function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div className="container">
      <h1 className="text-center my-4">❤️ Favorite Recipes</h1>
      {favorites.length === 0 ? (
        <p className="text-center">No favorites yet. Add some!</p>
      ) : (
        <div className="row">
          {favorites.map((recipe) => (
            <div key={recipe.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={recipe.image} className="card-img-top" alt={recipe.title} />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">View Details</Link>
                  <button className="btn btn-danger mt-2" onClick={() => removeFavorite(recipe.id)}>
                    ❌ Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
