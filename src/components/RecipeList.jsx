import React from "react";
import PropTypes from "prop-types";
import Recipe from "./Recipe";
// eslint-disable-next-line no-unused-vars
import recipecache from "../reccipecache.json";
// eslint-disable-next-line no-unused-vars
import { apiKey2 } from "../config";

const RecipeList = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [apiData, setApiData] = React.useState([]);

  // eslint-disable-next-line no-unused-vars
  const { selectedIngredients } = props;
  // Empty array argument needed to avoid useEffect being called infinitely.
  // React.useEffect(() => {
  //   const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=apple&number=1&apiKey=${apiKey2}&includeNutrition=false.`;
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setApiData(data));
  // }, []);

  return (
    <ul style={{ "list-style-type": "none" }}>
      {/* /Substitute recipecache for apiData */}
      {recipecache.map((recipe) => (
        <Recipe
          title={recipe.title}
          missingIngredients={recipe.missedIngredientCount}
          thumbnail={recipe.image}
        />
      ))}
    </ul>
  );
};

RecipeList.propTypes = {
  selectedIngredients: PropTypes.instanceOf(Array),
};

RecipeList.defaultProps = {
  selectedIngredients: [],
};

export default RecipeList;
