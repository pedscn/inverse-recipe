import React from "react";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import IngredientList from "../components/IngredientList";

export default function IngredientScreen(props) {
  const { handleClick, handleDelete, chipData } = props;

  return (
    <div>
      <IngredientList onClick={handleClick} />
      <Paper component="ul">
        {Array.from(chipData).map((data) => {
          return <Chip label={data.name} onDelete={handleDelete(data)} />;
        })}
      </Paper>
    </div>
  );
}

IngredientScreen.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  chipData: PropTypes.instanceOf(Array).isRequired,
};
