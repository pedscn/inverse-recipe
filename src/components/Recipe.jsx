/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    // display: "inline-block",
    margin: "10px",
    padding: "10px",
  },
  img: {
    maxWidth: 200,
    float: "left",
  },
  cardContent: {
    display: "inline-block",
    float: "left",
    "text-align": "left",
  },
});

const Recipe = (props) => {
  const {
    title,
    missingIngredients,
    thumbnail,
    usedIngredients,
    searchedIngredients,
  } = props;
  const classes = useStyles();

  const mappedMissingIngredients = missingIngredients.map((ingredient) => (
    <Chip label={ingredient.name} color="secondary" />
  ));

  const mappedUsedIngredients = usedIngredients.map((ingredient) => (
    <Chip label={ingredient.name} color="primary" />
  ));

  return (
    <li>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.img}
            component="img"
            image={thumbnail}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body1" color="textSecondary">
              Searched Ingredients: {searchedIngredients}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Used Ingredients: {mappedUsedIngredients}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Missing Ingredients: {mappedMissingIngredients}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </li>
  );
};

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  missingIngredients: PropTypes.instanceOf(Array).isRequired,
  thumbnail: PropTypes.string,
  usedIngredients: PropTypes.instanceOf(Array).isRequired,
  searchedIngredients: PropTypes.instanceOf(Array).isRequired,
};

Recipe.defaultProps = {
  thumbnail: "",
};

export default Recipe;
