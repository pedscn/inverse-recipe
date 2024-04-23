import React from "react";
import Box from "@mui/material/Box";
import ingredientListJson from "../ingredientListJson.json";
import Ingredient from "./Ingredient";

interface IngredientData {
    id: number;
    name: string;
    imgurl: string;
}

const IngredientList: React.FC = () => {
    const ingredientMappedList = ingredientListJson.map((ingredient: IngredientData) => (
        <Ingredient
            key={ingredient.id}  // Adding a key for React list rendering optimization
            ingredientName={ingredient.name}
            ingredientImage={ingredient.imgurl}
        />
    ));

    return (
        <Box
            sx={{
                height: '400px',
                display: 'flex',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap',
                overflowY: 'scroll'
            }}
        >
            {ingredientMappedList}
        </Box>
    );
};

export default IngredientList;
