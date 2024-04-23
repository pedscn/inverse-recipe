import React, { useContext } from "react";
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"

import { AppContext } from "../context/AppProvider";

interface IngredientProps {
    ingredientName: string;
    ingredientImage: string;
}

// Styles
const cardMediaStyles = {
    width: 200, // Fixed width
    height: 135 // Fixed height
}

const cardStyles = { 
    maxWidth: 200, 
    maxHeight: 200, 
    margin: 0.5, // Equivalent to 5px in the MUI spacing system
    padding: 0.5, // Equivalent to 5px in the MUI spacing system
}

const cardActionStyles = {
    '&:focus': {
        outline: 'none', // Removes the focus outline
        boxShadow: 'none' // Removes any focus shadow that might be applied
    },
}


const Ingredient: React.FC<IngredientProps> = ({ ingredientName, ingredientImage }) => {

    // Get the context object
    const context = useContext(AppContext)

    // Destructure the context
    const { handleIngredientClick } = context


    return (
        <Card 
            onClick={(event) => handleIngredientClick(event)} 
            data-ingredient-name={ingredientName} 
            sx = {cardStyles}
        >
            <CardActionArea sx = {cardActionStyles}>
                <CardMedia 
                    component = "img" 
                    image = {ingredientImage} 
                    alt ={ ingredientName}
                    sx = {cardMediaStyles}
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
  
export default Ingredient;