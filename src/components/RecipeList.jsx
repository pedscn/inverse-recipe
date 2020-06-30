import React from "react";
import Recipe from "./Recipe";
import recipesFile from "../recipedb.json";

const RecipeList = () => {
  const recipeMappedList = recipesFile.map((recipe) => (
    <Recipe title={recipe.Title} directions={recipe.Directions} />
  ));
  return <ul>{recipeMappedList}</ul>;
};

export default RecipeList;
