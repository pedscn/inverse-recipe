import React from "react";
import PropTypes from "prop-types";
import RecipeList from "../components/RecipeList";

const RecipeScreen = (props) => {
  const { selectedIngredients } = props;
  return <RecipeList selectedIngredients={selectedIngredients} />;
};

RecipeScreen.propTypes = {
  selectedIngredients: PropTypes.instanceOf(Array),
};

RecipeScreen.defaultProps = {
  selectedIngredients: [],
};

export default RecipeScreen;
