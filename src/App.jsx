import React, { useState } from "react";
import "./App.css";
import RecipeScreen from "./screens/RecipeScreen";
import IngredientScreen from "./screens/IngredientScreen";

function App() {
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
    <div className="App">
      <IngredientScreen
        handleClick={handleClick}
        handleDelete={handleDelete}
        chipData={chipData}
      />
      <RecipeScreen />
    </div>
  );
}

export default App;
