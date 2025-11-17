import { useParams } from "react-router-dom";
import useRecipeStore from "../recipeStore";

function RecipeDetails() {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id == id)
  );

  if (!recipe) return <h2>Recipe not found</h2>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
    </div>
  );
}

export default RecipeDetails;
