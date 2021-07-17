import * as setting from './settingMethod.js'
import { filterByInput } from './searchAlgo2.js'
import { recipes } from './data.js'
import * as view from './view.js'

const input = document.getElementById('main-search-input')

export const main = () => {
    const chronoStart =  Date.now()

    let result = []
    for (const elt in recipes) {
        result.push(recipes[elt].id)
    }
    const search = (userInput) => {
        if(setting.isInputUpToTwoCharacters(userInput)) {
            result = [...filterByInput(userInput)]
        }
        if(setting.isLabelSelected()) {
            result = [...view.filterByLabel(result)]
        }
        for (const elt of result) {
            elt.ingredients
        }
        view.updateIngredientDropdownList(result)
        view.updateApplianceDropdownList(result)
        view.updateUstensilsDropdownList(result)
        view.updateCardRecipe(result)
        view.showNoIdFound(result)
    }
    search(input.value)

    const chronoEnd = Date.now()
    const timeRunning = chronoEnd -chronoStart
    console.log(`${timeRunning} ms`)
}


input.addEventListener('keyup', main)
document.addEventListener('click', (e) => {
    if(e.target.nodeName === 'LI' || e.target.className === 'removeTag') {
        main()
    }
})