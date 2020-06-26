import React from "react";
import recipesFile from "../recipedb.json";

const IngredientList = () => {
  const ingredientMappedList = recipesFile.map((recipe) => (
    <li>{recipe.Ingredient01}</li>
  ));
  return (
    <div>
      <ul>{ingredientMappedList}</ul>
    </div>
  );
};

export default IngredientList;
