import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import IngredientList from "../components/IngredientList";

export default function IngredientScreen() {
  const [chipData, setChipData] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  function handleClick(e) {
    const ingredient = e.currentTarget.getAttribute("ingredientName");
    setSelectedIngredients(selectedIngredients.concat(ingredient));
    setChipData(chipData.concat({ name: ingredient }));
  }

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.name !== chipToDelete.name)
    );
  };

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
