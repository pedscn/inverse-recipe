import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import recipesFile from "../recipedb.json";
import placeholderImage from "../placeholder-img.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    maxHeight: 200,
  },
  flexcontainer: {
    height: "400px",
    display: "flex",
    "flex-wrap": "wrap",
    "overflow-y": "scroll",
  },
});

const IngredientList = () => {
  const classes = useStyles();
  const ingredientMappedList = recipesFile.map((recipe) => (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia component="img" image={placeholderImage} />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {recipe.Ingredient01}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));
  return <div className={classes.flexcontainer}>{ingredientMappedList}</div>;
};

export default IngredientList;
