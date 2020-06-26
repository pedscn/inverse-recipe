import React from "react";
import "./App.css";
import RecipeScreen from "./screens/RecipeScreen";
import IngredientScreen from "./screens/IngredientScreen";

function App() {
  return (
    <div className="App">
      <IngredientScreen />
      <RecipeScreen />
    </div>
  );
}

export default App;
