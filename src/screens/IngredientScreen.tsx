import React from "react";
import Paper from "@mui/material/Paper"
import { Typography } from "@mui/material";
import IngredientList from "../components/IngredientList";
import SelectedIngredients from "../components/SelectedIngredients";


const paperStyles = {
    backgroundColor: '#8BC34A',
    justifyContent: 'center',
    border: '5px solid #8BC34A',
    borderRadius: '9px',
    listStyleType: 'none',
    padding: '10px',
}


const IngredientScreen: React.FC = () => {
    
    return (
        <div id = "IngredientScreen">
            <Typography
                variant="h3"
                style={{ color: "white", margin: "20px", textAlign: 'center'}}
                gutterBottom
            >
                Select Ingredients
            </Typography>
            <Paper sx = {paperStyles}>
                <IngredientList/>
            </Paper>
            <SelectedIngredients />
        </div>
    );
};

export default IngredientScreen;