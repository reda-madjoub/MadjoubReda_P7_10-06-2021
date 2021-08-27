import { recipes } from './data.js'

export const filterByInput = (userInput = '') => {
    let result = [] 
    for (let i = 0; i < recipes.length; i++) {
        if(recipes[i].description.toLowerCase().indexOf(userInput.toLowerCase()) > -1) {
            result.push(recipes[i].id)
        }
    }
    for (let i = 0; i < recipes.length; i++) {
        if(recipes[i].name.toLowerCase().indexOf(userInput.toLowerCase()) > -1) {
            result.push(recipes[i].id)
        }
    }
    for (let i = 0; i < recipes.length; i++) {
        recipes[i].ingredients.forEach(elt => {   
            if(elt.ingredient.toLowerCase().indexOf(userInput.toLowerCase()) > -1) result.push(recipes[i].id)
        })
    }
    return result.filter((item, index) => result.indexOf(item) == index)
}