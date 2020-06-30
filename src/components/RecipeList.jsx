import React from "react";
import PropTypes from "prop-types";
import Recipe from "./Recipe";
// eslint-disable-next-line no-unused-vars
import recipecache from "../reccipecache.json";
// eslint-disable-next-line no-unused-vars
import apiKey from "../config";

const RecipeList = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [apiData, setApiData] = React.useState([]);

  // eslint-disable-next-line no-unused-vars
  const { selectedIngredients } = props;
  // React.useEffect(() => {
  //   fetch(
  //     `https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples&number=2&apiKey=${apiKey}&includeNutrition=false.`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setApiData(data));
  // });

  return (
    <ul>
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
