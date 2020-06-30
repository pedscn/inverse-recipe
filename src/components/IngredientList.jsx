import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import ingredientListJson from "../ingredientListJson.json";
import Ingredient from "./Ingredient";

const useStyles = makeStyles({
  flexContainer: {
    height: "400px",
    display: "flex",
    "flex-wrap": "wrap",
    "overflow-y": "scroll",
  },
});

const IngredientList = (props) => {
  const classes = useStyles();
  const ingredientMappedList = ingredientListJson.map((ingredient) => (
    <Ingredient ingredientName={ingredient.name} onClick={props.onClick} />
  ));
  return <div className={classes.flexContainer}>{ingredientMappedList}</div>;
};

IngredientList.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default IngredientList;
