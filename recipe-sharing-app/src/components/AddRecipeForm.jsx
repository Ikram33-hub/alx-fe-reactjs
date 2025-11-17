import { useState } from "react";
import recipeStore from "../recipeStore";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return;

    recipeStore.addRecipe({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Recipe</h2>

      <input
        type="text"
        placeholder="Recipe title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Recipe description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button type="submit">Add Recipe</button>
    </form>
  );
}
