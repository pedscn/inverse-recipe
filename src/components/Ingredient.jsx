import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
// import placeholderImage from "../placeholder-img.png";

const useStyles = makeStyles({
  card: {
    maxWidth: 200,
    maxHeight: 200,
  },
});

const Ingredient = (props) => {
  const classes = useStyles();
  const { ingredientName, onClick, ingredientImage } = props;
  return (
    <Card
      className={classes.card}
      ingredientName={ingredientName}
      onClick={onClick}
    >
      <CardActionArea>
        <CardMedia
          className={classes.image}
          component="img"
          image={ingredientImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {ingredientName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

Ingredient.propTypes = {
  ingredientName: PropTypes.string.isRequired,
  ingredientImage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Ingredient;
