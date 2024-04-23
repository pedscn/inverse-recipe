import React, { createContext, useState } from "react";

// Types and interfaces for state management
type ChipData = {
    name: string;
};

interface IngredientEventTarget extends HTMLDivElement {
    getAttribute(attrName: string): string | null;
}

export interface IngredientMouseEvent extends React.MouseEvent<HTMLDivElement> {
    currentTarget: IngredientEventTarget;
}

// Define Context interface
interface AppContextType {
    chipData: ChipData[];
    selectedIngredients: string[];
    searchedIngredients: string[];
    handleIngredientClick: (event: IngredientMouseEvent) => void;
    handleIngredientDelete: (ingredientToDelete: ChipData) => () => void;
    handleSearchButtonClick: () => void;
}

const defaultContext: AppContextType = {
    chipData: [],
    selectedIngredients: [],
    searchedIngredients: [],
    handleIngredientClick: () => {},
    handleIngredientDelete: () => () => {},
    handleSearchButtonClick: () => {}
}

// Create the Context
export const AppContext = createContext<AppContextType>(defaultContext);


// Define App Provider component with App logic
interface AppProviderProps {
    children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {

    const [chipData, setChipData] = useState<ChipData[]>([]);
    const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
    const [searchedIngredients, setSearchedIngredients] = useState<string[]>([]);

    function handleIngredientClick(event: IngredientMouseEvent) {
        const ingredient = event.currentTarget.getAttribute('data-ingredient-name');
        if (ingredient && !selectedIngredients.includes(ingredient)) {
            setSelectedIngredients((prevSelected) => [...prevSelected, ingredient]);
            setChipData((prevChip) => [...prevChip, { name: ingredient }]);
        }
    }

    function handleSearchButtonClick() {
        setSearchedIngredients(selectedIngredients);
    }

    const handleIngredientDelete = (ingredientToDelete: ChipData) => () => {
        setChipData((chips) =>
            chips.filter((chip) => chip.name !== ingredientToDelete.name)
        );
        setSelectedIngredients((selected) => 
            selected.filter((item) => item !== ingredientToDelete.name)
        );
    };

    return (
        <AppContext.Provider value={{
            chipData,
            selectedIngredients,
            searchedIngredients,
            handleIngredientClick,
            handleIngredientDelete,
            handleSearchButtonClick
        }}>
            {children}
        </AppContext.Provider>
    );
};


export default AppProvider