# Inverse Recipe 
Web app to search for recipes through the ingredients you currently have. Find a dish, discover which ingredients you're missing and which ones you can put to good use! Built with React and Javascript.

## Demo
![Alt Text](https://github.com/pedscn/assets/blob/master/inverse-recipe-gif.gif)

## Credits
- React and create-react-app - https://reactjs.org/
- Spoonacular API for recipe searching - https://spoonacular.com/food-api/
- Material UI for styling - https://material-ui.com/
- Postimages for image hosting - https://postimages.org/
- Pixabay for free stock images - https://pixabay.com/
## Setup
- Run `git clone https://github.com/pedscn/inverse-recipe.git`
- Enter directory with `cd inverse-recipe`
- Run `npm install` to install dependencies
- Sign up at https://spoonacular.com/food-api/console#Dashboard (No email confirmation needed)
- Copy api key from your Spoonacular profile.
- Paste api key into (inverse-recipe/src/config.js)
- Run `npm start`

# Updates:
- Switch to Vite (from create-react-app). To run use `npm run dev`
- Styled components previously implemented with MUI's makeStyles hook (now deprecated), have been converted using the "sx" MUI prop/atrribute.
- Component property type safety: project migrated to TypeScript instead of relying on the prop-types library.
- Added key's to dynamically generated components (via map) in IngredientsList and RecipeList.
- Move Typography component from App component (Text: Select Ingredients) into IndredientScreen
- Fixed handleIngredientClick bug. Custom attribute "ingredientName" no longer valid JSX -> React processes camel case as a component prop. Changed to "data-ingredient-name" to comply with HTML5 standard.
- Fixed warning "*validateDOMNesting(...): `<div>` cannot appear as a descendant of `<p>`*" in Recipe component. The warning concerns nesting mapped (missingIngredients and usedIngredients) MUI Chip component (value of HTML type `<div>`) inside of the MUI Typography component (by default has HTML type `<p>`). To fix add the '*component="div"*' attribute to both Typography component's containing the mapped ingredients.
- Wrapped HTTP request in async function (RecipeList component)
- Refactored project to use Context API (avoids prop drilling and repetitive use of prop types declaration in TypeScript)
