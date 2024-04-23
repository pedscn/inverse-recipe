import React, { useContext } from "react"
import Chip from "@mui/material/Chip"
import Box from "@mui/material/Box"

import { AppContext } from "../context/AppProvider"


// Styles
const boxStyles = {
    minHeight: '60px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
        margin: '0.5rem',
    }
}

const chipStyles = {
    margin: '0.5rem', 
    backgroundColor: '#E0E0E0', // Lighter gray for the main body of the Chip
    color: 'black', // Optional: changing text color to black for better readability
    '&:hover': {
        backgroundColor: '#BDBDBD' // Slightly darker gray on hover for a bit of interactive effect
    },
    '& .MuiChip-deleteIcon': {
        color: '#616161', // Darker gray for the delete icon
        '&:hover': {
            color: '#424242' // Even darker gray on hover for delete icon
        }
    }
}


const SelectedIngredients: React.FC = () => {

    // Use useContext to access context values
    const context = useContext(AppContext);

    // Destructure the context to get the needed functions and state
    const { chipData, handleIngredientDelete } = context;

    return (
        <Box sx = {boxStyles}>
            {chipData.map((data, index) => (
                <Chip 
                    key={index} 
                    label={data.name} 
                    onDelete={handleIngredientDelete(data)} 
                    sx = {chipStyles}
                />
            ))}
        </Box>
    )
}

export default SelectedIngredients