import { createStore } from 'redux'

const initialState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATENAME = 'UPDATENAME'
export const UPDATECATEGORY = 'UPDATECATEGORY'
export const UPDATEFIRST = 'UPDATEFIRST'
export const UPDATELAST = 'UPDATELAST'
export const UPDATEINGREDIENTS = 'UPDATEINGREDIENTS'
export const UPDATEINSTRUCTIONS = 'UPDATEINSTRUCTIONS'
export const SHOWRECIPES = 'SHOWRECIPES'
export const CLEARFORM = 'CLEARFORM'

function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case UPDATENAME:
            return {
                ...state, 
                name: payload
            }
        case UPDATECATEGORY:
            return {
                ...state, 
                category: payload
            }
        case UPDATEFIRST:
            return {
                ...state,
                authorFirst: payload
            }
        case UPDATELAST:
            return {
                ...state,
                authorLast: payload
            }
        case UPDATEINGREDIENTS:
            const newIngredients = [...state.ingredients, payload]
            return {
                ...state, ingredients: newIngredients
            }
        case UPDATEINSTRUCTIONS:
            const newInstructions = [...state.instructions, payload]
            return {
                ...state, instructions: newInstructions
            }
        case SHOWRECIPES:
            const { name, category, authorFirst, authorLast, ingredients, instructions } = state
            const recipe = { name, category, authorFirst, authorLast, ingredients, instructions }
            const newRecipes = [...state.recipes, recipe]
            return {
                ...state, recipes: newRecipes
            }
        case CLEARFORM: 
            return {
                state: initialState
            }
        default:
            return state;
    }

}

export default createStore(reducer)
