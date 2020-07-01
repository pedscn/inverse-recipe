import React, { useState } from "react";
import "./App.css";
import RecipeScreen from "./screens/RecipeScreen";
import IngredientScreen from "./screens/IngredientScreen";

function App() {
  const [chipData, setChipData] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [searchedIngredients, setSearchedIngredients] = useState([]);

  function handleIngredientClick(e) {
    const ingredient = e.currentTarget.getAttribute("ingredientName");
    if (!selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(selectedIngredients.concat(ingredient));
      setChipData(chipData.concat({ name: ingredient }));
    }
  }

  function handleSearchButtonClick() {
    setSearchedIngredients(selectedIngredients);
  }

  const handleDelete = (ingredientToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.name !== ingredientToDelete.name)
    );
    setSelectedIngredients(
      selectedIngredients.filter((item) => item !== ingredientToDelete.name)
    );
  };

  return (
    <div className="App">
      <IngredientScreen
        handleClick={handleIngredientClick}
        handleDelete={handleDelete}
        chipData={chipData}
      />
      <RecipeScreen
        handleSearchButtonClick={handleSearchButtonClick}
        searchedIngredients={searchedIngredients}
      />
    </div>
  );
}

export default App;
