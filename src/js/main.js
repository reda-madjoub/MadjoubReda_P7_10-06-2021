// import { recipes } from './data.js'
// import * as utils from './Utils/dataLogic.js'
// import * as view from './view.js'
import * as setting from './settingMethod.js'
import { filterByInput } from './searchAlgo2.js'
import { recipes } from './data.js'
import * as view from './view.js'





const arrowLabel = document.getElementsByClassName('removeTag')
const input = document.getElementById('main-search-input')
const labelZone = document.getElementById('filterTag')
const filterElt = document.getElementsByClassName('bloc-links')
const error = document.getElementById('error')


export const main = () => {
    // let selectedId = []
    // let previousSelectedId = []
    let result = []
    for (const elt in recipes) {
        result.push(recipes[elt].id)
    }


    const search = (userInput) => {
        // console.log('hello')
        // console.log(labelZone.children)
        if(setting.isInputUpToTwoCharacters(userInput)) {
            result = [...filterByInput(userInput)]
            console.log('filter by input : ' +result)
        }

        if(setting.isLabelSelected()) {
            result = [...view.filterByLabel(result)]
            console.log('filter by label : ' +result)
        }
        console.log('final result : ' +result)
        for (const elt of result) {
            elt.ingredients
        }
        view.updateIngredientDropdownList(result)
        view.updateApplianceDropdownList(result)
        view.updateUstensilsDropdownList(result)
        view.updateCardRecipe(result)


        // console.time()
        // let result = []
        // let IdFromInput = []
        // let IdFromLabel = []

        // if(setting.isInputUpToTwoCharacters(userInput)) {
        //     IdFromInput = [...getMatchIdFromInput(userInput, previousSelectedId)]
        //     // IdFromInput = [...getMatchIdFromInput(userInput, selectedId, previousSelectedId)]
        //     // console.log(selectedId);
        //     // result = [...IdFromInput]
        //     // console.log(`id from input : ${IdFromInput}`)
        // }
        // console.log(labelZone.children)
        // if(setting.isLabelSelected()) {
        //     console.log(labelZone)
        //     IdFromLabel = [...setting.getIdFromLabel()]
        //     // console.log(`id from label : ${IdFromLabel}`)
        //     // result = [...selectedId, ...IdFromLabel]
        // }
        // // if(!setting.isSearchConditionValid) {
        // //     setting.initState()
        // // }
        // result = [...setting.keepDuplicateThenRemoveDuplicate(IdFromInput, IdFromLabel)]
        // console.log(result)
        // if(result.length === 0){
        //     view.showNoIdFound(result) 

        // } else {
        //     view.updateIngredientDropdownList(result)
        //     view.updateApplianceDropdownList(result)
        //     view.updateUstensilsDropdownList(result)
        //     view.updateCardRecipe(result)
        //     error.innerHTML = ''
        // }
        

        // previousSelectedId = [...result]
        // // selectedId.length = 0
        
        // console.timeEnd()
    }

    search(input.value)
    // console.log('resultat de la recherche : ' + result)

    // console.log(labelZone.children.length)  
    // console.log(labelZone.children)
}


input.addEventListener('keyup', main)
document.addEventListener('click', (e) => {
    if(e.target.nodeName === 'LI' || e.target.className === 'removeTag') {
        main()
    }
})