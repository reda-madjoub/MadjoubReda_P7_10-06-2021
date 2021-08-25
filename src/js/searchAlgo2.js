import { recipes } from './data.js'

export const filterByInput = (userInput = '') => {
    let result = [] 
    for (let i = 0; i < recipes.length; i++) {
        if(recipes[i].description.indexOf(userInput) > -1) {
            result.push(recipes[i].id)
        }
    }
    for (let i = 0; i < recipes.length; i++) {
        if(recipes[i].name.indexOf(userInput) > -1) {
            result.push(recipes[i].id)
        }
    }
    for (let i = 0; i < recipes.length; i++) {
        recipes[i].ingredients.forEach(elt => {   
            if(elt.ingredient.indexOf(userInput) > -1) result.push(recipes[i].id)
        })
    }
    return result.filter((item, index) => result.indexOf(item) == index)
}