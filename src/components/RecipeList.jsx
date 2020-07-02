/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Recipe from "./Recipe";
import { apiKey } from "../config";

const useStyles = makeStyles((theme) => ({
  ul: {
    "background-color": "#8BC34A",
    padding: "10px",
    margin: "10px",
    border: "5px solid #8BC34A",
    "border-radius": "9px",
    justifyContent: "center",
    listStyleType: "none",
  },
}));

const RecipeList = (props) => {
  const classes = useStyles();
  const [apiData, setApiData] = React.useState([]);
  const { searchedIngredients } = props;

  // searchedIngredients argument needed to avoid useEffect being called infinitely, only called when searchedIngredient prop changes..
  React.useEffect(() => {
    const queryParams = searchedIngredients.join(",+");
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${queryParams}&apiKey=${apiKey}&includeNutrition=false.`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setApiData(data));
  }, [searchedIngredients]);
  if (searchedIngredients.length > 0) {
    return (
      <ul className={classes.ul}>
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
  }
  return <div />;
};

RecipeList.propTypes = {
  searchedIngredients: PropTypes.instanceOf(Array),
};

RecipeList.defaultProps = {
  searchedIngredients: [],
};

export default RecipeList;
