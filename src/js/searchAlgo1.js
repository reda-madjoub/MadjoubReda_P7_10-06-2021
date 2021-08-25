import { recipes } from './data.js'

export const filterByInput = (userInput = '') => {
    let result = [] 
    for (const item of recipes) {
        if(item.description.indexOf(userInput) > -1) {
            result.push(item.id)
        }else if(item.name.indexOf(userInput) > -1) {
            result.push(item.id)
        }else{
            item.ingredients.forEach(elt => {   
                if(elt.ingredient.indexOf(userInput) > -1) result.push(item.id)
            })
        }
    }
    return [...new Set(result)]
}