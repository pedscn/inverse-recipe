import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

interface RecipeProps {
    title: string;
    missingIngredients: Ingredient[];
    thumbnail?: string;
    usedIngredients: Ingredient[];
}

interface Ingredient {
    name: string;
}

// Styles
const cardStyles = {
    display: 'flex', // Set display to flex to align children side by side
    flexDirection: 'row', // Align children side by side
    margin: '10px', 
    padding: '10px',
}

const cardMediaStyles = { 
    maxWidth: 200, 
    float: 'left',
}

const cardContentStyles = { 
    display: 'flex',
    flexDirection: 'column', // Stack the text content vertically
    justifyContent: 'flex-start', // Align content to the start of the card content
    flex: '1', // Take up remaining space
    paddingLeft: 2, // Optional padding to space out text from the image
    textAlign: 'left' 
}

const chipStyles = { 
    margin: '2px' 
}

// Main Component
const Recipe: React.FC<RecipeProps> = ({ title, missingIngredients, thumbnail = "", usedIngredients }) => { 
    
    const mapMissingIngredients = () => {
        let missingIngredientsFormatted = missingIngredients.map(
            (ingredient) => ingredient.name
        );

        if (missingIngredients.length > 3) {
            const extraIngredientNum = missingIngredients.length - 3;
            missingIngredientsFormatted = missingIngredientsFormatted.splice(0, 3);
            missingIngredientsFormatted.push(`+ ${extraIngredientNum} more`);
        }

        return missingIngredientsFormatted.map((ingredientName, index) => (
            <Chip key={index} label={ingredientName} color="secondary" sx={chipStyles} />
        ));
    };

    const mappedMissingIngredients = mapMissingIngredients()

    const mappedUsedIngredients = usedIngredients.map((ingredient, index) => (
        <Chip key={index} label={ingredient.name} color="primary" sx={chipStyles} />
    ));
  
    return (
        <Card sx={cardStyles}>
            <CardActionArea>
                <CardMedia component="img" image={thumbnail} title={title} sx={cardMediaStyles}/>
                <CardContent sx={cardContentStyles}>
                    <Typography variant="h5">{title}</Typography>
                    <Typography variant="body1" color="textSecondary" component="div">
                        Used Ingredients: {mappedUsedIngredients}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="div" sx = {{flexWrap: 'wrap'}}>
                        Missing Ingredients: {mappedMissingIngredients}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Recipe;
