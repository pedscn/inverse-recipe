import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Recipe from "./Recipe";
import { API_KEY } from "../config";
import { AppContext } from "../context/AppProvider";


interface RecipeData {
    title: string;
    image: string;
    missedIngredients: any[];
    usedIngredients: any[];
}

const RecipeList: React.FC = () => {

    // Use useContext to access context values
    const context = useContext(AppContext);

    // Destructure the context to get the needed functions and state
    const { searchedIngredients } = context;

    // Define States
    const [apiData, setApiData] = useState<RecipeData[]>([]);
    
    // Effect for making HTTP request
    useEffect(() => {
        async function fetchRecipes() {
            const queryParams = searchedIngredients.join(",+");
            const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${queryParams}&apiKey=${API_KEY}&includeNutrition=false.`;
            const response = await fetch(url);
            const responseData = await response.json();
            setApiData(responseData);
        }
        
        if (searchedIngredients.length > 0) {
            fetchRecipes();
        }
    }, [searchedIngredients]);

    
    return (
        <Box component="ul" sx={{
            backgroundColor: '#8BC34A',
            padding: '10px',
            border: '5px solid #8BC34A',
            borderRadius: '9px',
            justifyContent: 'center',
            listStyleType: 'none',
        }}>
            {apiData.map((recipe, index) => (
                <Recipe
                    key={index}
                    title={recipe.title}
                    missingIngredients={recipe.missedIngredients}
                    thumbnail={recipe.image}
                    usedIngredients={recipe.usedIngredients}
                />
            ))}
        </Box>
    );
};

export default RecipeList;
