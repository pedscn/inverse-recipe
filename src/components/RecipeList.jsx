import React from "react";
import PropTypes from "prop-types";
import Recipe from "./Recipe";
import recipesFile from "../recipedb.json";

const RecipeList = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { selectedIngredients } = props;
  const recipeMappedList = recipesFile.map((recipe) => (
    <Recipe title={recipe.Title} directions={recipe.Directions} />
  ));
  return <ul>{recipeMappedList}</ul>;
};

RecipeList.propTypes = {
  selectedIngredients: PropTypes.instanceOf(Array),
};

RecipeList.defaultProps = {
  selectedIngredients: [],
};

export default RecipeList;
