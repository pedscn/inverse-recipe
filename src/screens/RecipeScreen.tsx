import React, { useContext } from "react";
import Button from "@mui/material/Button";
import RecipeList from "../components/RecipeList";

import { AppContext } from "../context/AppProvider";


const buttonStyles = {
    backgroundColor: '#C8E6C9', // Green background
    color: 'black',
    '&:hover': {
        backgroundColor: '#A5D6A7', // Lighter green on hover
    },
    '&:focus': {
        outline: 'none', // Removes the focus outline
        boxShadow: 'none' // Removes any focus shadow that might be applied
    },
}

const RecipeScreen: React.FC = () => {

    // Use useContext to access context values
    const context = useContext(AppContext);

    // Destructure the context to get the needed functions and state
    const { searchedIngredients, handleSearchButtonClick } = context;
    

    return (
        <div id="RecipeScreen" style={{
            display: 'flex',
            flexDirection: 'column', // Keep the column layout
            alignItems: 'center', // Center all items horizontally
        }}>
            <Button onClick={handleSearchButtonClick} variant="contained" sx={buttonStyles}>
                Search
            </Button>
            {searchedIngredients.length !== 0 && <RecipeList />}
        </div>
    );
};

export default RecipeScreen;
