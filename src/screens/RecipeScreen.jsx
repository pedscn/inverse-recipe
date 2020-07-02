import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import RecipeList from "../components/RecipeList";

const RecipeScreen = (props) => {
  const { searchedIngredients, handleSearchButtonClick } = props;
  return (
    <div>
      <Button
        onClick={handleSearchButtonClick}
        variant="contained"
        style={{ backgroundColor: "#C8E6C9" }}
      >
        Search
      </Button>
      <RecipeList searchedIngredients={searchedIngredients} />
    </div>
  );
};

RecipeScreen.propTypes = {
  searchedIngredients: PropTypes.instanceOf(Array),
  handleSearchButtonClick: PropTypes.func.isRequired,
};

RecipeScreen.defaultProps = {
  searchedIngredients: [],
};

export default RecipeScreen;
