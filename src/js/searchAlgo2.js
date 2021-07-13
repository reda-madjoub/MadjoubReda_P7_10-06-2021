import { recipes } from './data.js'

// export const getMatchIdFromInput = (userInput = '', array2 = []) => {
//     let result = []
//     if(array2.length !== 0){
//         console.log('if')
        
//         for (const item of array2) {
//             if(recipes[item-1].description.indexOf(userInput) > -1) {
//                 result.push(item)
//             }else if(recipes[item-1].name.indexOf(userInput) > -1) {
//                 result.push(item)
//             }else {
//                 recipes[item-1].ingredients.forEach(elt => {  
//                     if(elt.ingredient.indexOf(userInput) > -1) result.push(item)
//                 })
//             }
//         }
//         array2.length = 0
//     } else {
//         console.log('else')
//         for (const item of recipes) {
//             if(item.description.indexOf(userInput) > -1) {
//                 result.push(item.id)
//             }else if(item.name.indexOf(userInput) > -1) {
//                 result.push(item.id)
//             }else{
//                 item.ingredients.forEach(elt => {   
//                     if(elt.ingredient.indexOf(userInput) > -1) result.push(item.id)
//                 })
//             }
//         }
//     }

//     return [...new Set(result)]

// }

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