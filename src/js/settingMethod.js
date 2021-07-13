import * as view from './view.js'
import * as utils from './Utils/dataLogic.js'
// const input = document.getElementById('main-search-input')
const labelZone = document.getElementById('filterTag')





const isInputUpToTwoCharacters = (userInput) => userInput.length > 2 ? true : false
// console.log(isInputUpToTwoCharacters())


const isLabelSelected = () => {
    // console.log('le label existe t-il ?')
    // console.log(labelZone.children.length)
   return labelZone.children.length > 0 ? true : false
}
// for (let i = 0; i < labelZone.children.length; i++) {
//     let tableChild = labelZone.children[i]
//     console.log(tableChild.textContent.trim().toLowerCase())
// }

const isSearchConditionValid = () => (isInputUpToTwoCharacters() || isLabelSelected()) ? true : false


const initState = (array1, array2) => {
    array1.length = 0
    array2.length = 0
    showAllCardRecipe()
    showAllFilterInDropdownList()
}

const keepDuplicateThenRemoveDuplicate = (array1, array2) => {
    let result = []
    if(array1.length === 0 && array2.length !== 0) return [... new Set(array2)]
    if(array1.length !== 0 && array2.length === 0) return [...new Set(array1)] 
    for (let i = 0; i < array1.length; i++) {
        if(array2.includes(array1[i])) result.push(array1[i])
    }
    // console.log([...new Set(result)])
    return [...new Set(result)]
} 

// const filterByLabel = (array) => {
    
// }


// const setResultBeforeNewSearch = (array1, array2) => {
//     array1.length = 0
//     // array2 = [...array1]
// }

const getIdFromLabel = () => {
    let result = []
    for (let i = 0; i < labelZone.children.length; i++) {
        let nameLabel = labelZone.children[i].textContent.trim().toLocaleLowerCase()
        switch (labelZone.children[i].classList.value) {
        case 'ing-tag':
            result = [...result, ...utils.getAllIdIngredientFromString(nameLabel)]
            break
        case 'app-tag':
            result = [...result, ...utils.getAllIdApplianceFromString(nameLabel)]
            break
        case 'ust-tag':
            result = [...result, ...utils.getAllIdUstensileFromString(nameLabel)]
            break
        }
    }
    result = [...new Set (result)]

    return result.sort(function(a,b) { return a - b })
}

// getIdFromLabel()

export {
    isInputUpToTwoCharacters,
    isLabelSelected,
    isSearchConditionValid,
    initState,
    // setResultBeforeNewSearch,
    getIdFromLabel,
    keepDuplicateThenRemoveDuplicate
}




view.addLabel()
view.removeLabel()
view.showAllCardRecipe()
view.showAllFilterInDropdownList()
