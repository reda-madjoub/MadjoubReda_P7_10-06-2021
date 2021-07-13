import {recipes} from '../data.js'

const getAllIngredient = () => {
    let allIngredient = []
    for (const ingredient of recipes) {
        ingredient.ingredients.forEach(elt => {
            console.log(elt.ingredient)
            if(!allIngredient.includes(elt.ingredient)) {
                allIngredient.push(elt.ingredient)
            } 
        })
    }
    return allIngredient
}

const getAllAppliance = () => {
    let allAppliance = []
    for (const appliance of recipes) {
        if(!allAppliance.includes(appliance.appliance)) {
            allAppliance.push(appliance.appliance)
        }
    }
    return allAppliance
}

const getAllUstensile = () => {
    let allUstensile = []
    for (const ustensile of recipes) {
        ustensile.ustensils.forEach(elt => {
            if(!allUstensile.includes(elt)) {
                allUstensile.push(elt)
            } 
        })
    }
    return allUstensile
}

const getAllRecipes = () => [...recipes]


const getAllIdOfAllRecipe = () => {
    return recipes.map(recipe => recipe.id)
}

const getAllIdIngredientFromString = (userInput) => {
    let tempArray = []
    recipes.forEach(recipe => {
        recipe.ingredients.forEach(elt => {
            elt.ingredient.toLocaleLowerCase().indexOf(userInput.toLowerCase()) > -1 ? tempArray.push(recipe.id) : null
        })
    })
    return [...new Set (tempArray)]
}

const getAllIdUstensileFromString = (userInput) => {
    let tempArray = []
    recipes.forEach(recipe => recipe.ustensils.includes(userInput.toLowerCase()) ? tempArray.push(recipe.id) : null)
    return [...new Set (tempArray)]
}

const getAllIdApplianceFromString = (userInput) => {
    let tempArray = []
    recipes.forEach(recipe => recipe.appliance.toLocaleLowerCase() === userInput.toLowerCase() ? tempArray.push(recipe.id) : null)
    
    return [...new Set (tempArray)]
}


export { getAllAppliance,
    getAllIngredient, 
    getAllUstensile, 
    getAllRecipes, 
    getAllIdApplianceFromString, 
    getAllIdOfAllRecipe,
    getAllIdIngredientFromString,
    getAllIdUstensileFromString
}