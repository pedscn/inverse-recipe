import React from "react";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import IngredientList from "../components/IngredientList";

const useStyles = makeStyles((theme) => ({
  chipDiv: {
    minHeight: "40px",
    margin: "10px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  mainPaper: {
    "background-color": "#8BC34A",
    padding: "10px",
    margin: "10px",
    justifyContent: "center",
    border: "5px solid #8BC34A",
    "border-radius": "9px",
  },
}));

export default function IngredientScreen(props) {
  const { handleClick, handleDelete, chipData } = props;
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.mainPaper} component="ul">
        <IngredientList onClick={handleClick} />
      </Paper>
      <div className={classes.chipDiv}>
        {Array.from(chipData).map((data) => {
          return <Chip label={data.name} onDelete={handleDelete(data)} />;
        })}
      </div>
    </div>
  );
}

IngredientScreen.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  chipData: PropTypes.instanceOf(Array).isRequired,
};
