import AppProvider from "./context/AppProvider";
import IngredientScreen from "./screens/IngredientScreen";
import RecipeScreen from "./screens/RecipeScreen";

export default function App(){
    return (
        <div className="App">
            <AppProvider>
                <IngredientScreen />
                <RecipeScreen />
            </AppProvider>
        </div>
    );
}