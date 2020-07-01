/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import Recipe from "./Recipe";
import recipecache from "../reccipecache.json";
import { apiKey } from "../config";

const RecipeList = (props) => {
  const [apiData, setApiData] = React.useState([]);
  const { searchedIngredients } = props;

  // searchedIngredients argument needed to avoid useEffect being called infinitely, only called when searchedIngredient prop changes..
  React.useEffect(() => {
    const queryParams = searchedIngredients.join(",+");
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${queryParams}&number=5&apiKey=${apiKey}&includeNutrition=false.`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setApiData(data));
  }, [searchedIngredients]);

  return (
    <ul style={{ listStyleType: "none" }}>
      {/* /Substitute recipecache for apiData */}
      {apiData.map((recipe) => (
        <Recipe
          title={recipe.title}
          missingIngredients={recipe.missedIngredients}
          thumbnail={recipe.image}
          searchedIngredients={searchedIngredients}
          usedIngredients={recipe.usedIngredients}
        />
      ))}
    </ul>
  );
};

RecipeList.propTypes = {
  searchedIngredients: PropTypes.instanceOf(Array),
};

RecipeList.defaultProps = {
  searchedIngredients: [],
};

export default RecipeList;
