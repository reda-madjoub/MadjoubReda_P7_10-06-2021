import { recipes } from './data.js'

const ingredientDropdownList = document.getElementById('ing-list')
const appareilDropdownList = document.getElementById('app-list')
const ustensileDropdownList = document.getElementById('ust-list')
const cardSection = document.getElementById('result')
const labelZone = document.getElementById('filterTag')
const error = document.getElementById('error')
const dropdownList = document.getElementById('advanced-filter')
const listDropdownFilterElement = document.getElementsByClassName('list')
// const arrowLabel = document.getElementsByClassName('removeTag')
const ingInput = document.getElementById('ing-input')
const appInput = document.getElementById('app-input')
const ustInput = document.getElementById('ust-input')

const filterDropdownElementByinput = (e) => {
    const list = [...listDropdownFilterElement]
    list.map(liste => {
        const listTemp = [...liste.children]
        listTemp.forEach(elt => {
            if(elt.textContent.toLowerCase().indexOf(e.target.value.toLowerCase()) === -1) {
                elt.style.display = 'none'
            }else {
                elt.style.display = 'block'
            }
        })
    })
}

const createDomElement = (element, className = null, idName = null) => {
    let elt = document.createElement(`${element}`)
    if(className !== null) elt.classList.add(className)
    if(idName !== null) elt.setAttribute('id', idName)
    return elt
}
const updateIngredientDropdownList = (arrayOfId) => {
    let result = []
    arrayOfId.forEach(elt => recipes[elt -1].ingredients.forEach(elt => result.push(elt.ingredient)))
    result = [...new Set(result)]
    ingredientDropdownList.innerHTML = ''
    for (let i = 0; i < result.length; i++) {
        let Li = createDomElement('li')
        Li.textContent = result[i]
        // Li.addEventListener('click', )
        ingredientDropdownList.appendChild(Li)
    }
}
const updateApplianceDropdownList = (arrayOfId ) => {
    let result = []
    arrayOfId.forEach(elt => result.push(recipes[elt -1].appliance))
    result = [...new Set(result)]
    appareilDropdownList.innerHTML = ''
    for (let i = 0; i < result.length; i++) {
        let Li = createDomElement('li')
        Li.textContent = result[i]
        // Li.addEventListener('click', )
        appareilDropdownList.appendChild(Li)
    }
}
const updateUstensilsDropdownList = (arrayOfId ) => {
    let result = []
    arrayOfId.forEach(elt => recipes[elt -1].ustensils.map(elt => result.push(elt)))
    // console.log(result);
    result = [...new Set(result)]
    ustensileDropdownList.innerHTML = ''
    for (let i = 0; i < result.length; i++) {
        let Li = createDomElement('li')
        Li.textContent = result[i]
        // Li.addEventListener('click', )
        ustensileDropdownList.appendChild(Li)
    }
}
const showAllFilterInDropdownList = () => { // use class when refactoring code (factory pattern)
    let ing = []
    let ust = []
    let app = []

    // INGREDIENT
    for (const item of recipes) {
        item.ingredients.map(elt => ing.includes(elt.ingredient) ? false : ing.push(elt.ingredient))
    }
    for (let i = 0; i < ing.length; i++) {
        let Li = createDomElement('li')
        Li.textContent = ing[i]
        // Li.addEventListener('click', )
        ingredientDropdownList.appendChild(Li)
    }
    
    // APPLIANCE
    for (const item of recipes) {
        app.includes(item.appliance) ? false : app.push(item.appliance)
    }
    for (let i = 0; i < app.length; i++) {
        let Li = createDomElement('li')
        Li.textContent = app[i]
        // Li.addEventListener('click', )
        appareilDropdownList.appendChild(Li)
    }

    // USTENSILS
    for (const item of recipes) {
        item.ustensils.map(elt => ust.includes(elt) ? false : ust.push(elt))
    }
    for (let i = 0; i < ust.length; i++) {
        let Li = createDomElement('li')
        Li.textContent = ust[i]
        // Li.addEventListener('click', )
        ustensileDropdownList.appendChild(Li)
    }
}
const getAllLabelTextSelected = () => {
    let labelText = []
    let children = labelZone.children
    for (let i = 0; i < children.length; i++) {
        let tableChild = children[i]
        // console.log(tableChild.textContent.trim().toLowerCase())
        labelText.push(tableChild.textContent.trim().toLowerCase())
    }
    return labelText
}
const filterByLabel = (array) => {
    let allLabel = getAllLabelTextSelected()
    let result = []
    for (const item in array) {
        const ing = [...recipes[item].ingredients].map(elt => elt.ingredient.toLowerCase())
        const ust = [...recipes[item].ustensils]
        const app = recipes[item].appliance.toLowerCase()

        if(allLabel.every(elt => ing.includes(elt.toLowerCase())) || allLabel.every(elt => ust.includes(elt.toLowerCase())) || allLabel.includes(app)){
            console.log(recipes[item])
            result.push(recipes[item].id)
          }
    }
    return [...new Set(result)]
}
const updateCardRecipe = (arrayOfId) => {
    cardSection.innerHTML = ''
    for (const item of arrayOfId) {
        cardSection.innerHTML += `<div class="recipe">
        <div class="img-recipe"></div>
        <div class="info-recipe">
          <div class="top">
            <p>${recipes[[item]-1].name}</p>
            <p><img src="./src/img/time.svg" alt="logo time"><strong> ${recipes[[item]-1].time} min</strong></p>
          </div>
          <div class="bottom">
            <p id="ing-list">${recipes[[item]-1].ingredients.map(elt =>`<strong>${elt.ingredient}</strong> : ${elt.quantity ? elt.quantity : ''} ${elt.unit ? elt.unit : ''} <br>`).join(' ')}</p>
            <p>${recipes[[item]-1].description}</p>
          </div>
        </div>
      </div>`
    }
}
const showAllCardRecipe = () => {
    for (const item of recipes) {
        cardSection.innerHTML += `<div class="recipe">
      <div class="img-recipe"></div>
      <div class="info-recipe">
        <div class="top">
          <p>${item.name}</p>
          <p><img src="/src/img/time.svg" alt="logo time"><strong> ${item.time} min</strong></p>
        </div>
        <div class="bottom">
          <p id="ing-list">${item.ingredients.map(elt =>`<strong>${elt.ingredient}</strong> : ${elt.quantity ? elt.quantity : ''} ${elt.unit ? elt.unit : ''} <br>`).join(' ')}</p>
          <p>${item.description}</p>
        </div>
      </div>
    </div>`
    }
}
const addLabel = () => {
    dropdownList.addEventListener('click', (e) => {
      if(e.target.nodeName === 'LI') {
          if(!getAllLabelTextSelected().includes(e.target.textContent.trim().toLowerCase())){ 
            //   console.log('un label est cree')
            //   console.log(e.target.parentNode.getAttribute('id'))
              switch (e.target.parentNode.getAttribute('id')) {
              case 'app-list':
                  labelZone.innerHTML += `<div class="app-tag">
                                      <p>${e.target.textContent}</p>
                                      <img class="removeTag"  src="./src/img/close.svg" alt="close button">
                                    </div>`
                  break
              case 'ust-list':
                  labelZone.innerHTML += `<div class="ust-tag">
                                      <p>${e.target.textContent}</p>
                                      <img class="removeTag" src="./src/img/close.svg" alt="close button">
                                    </div>`
                  break
              case 'ing-list':
                  labelZone.innerHTML += `<div class="ing-tag">
                                      <p>${e.target.textContent}</p>
                                      <img class="removeTag" src="./src/img/close.svg" alt="close button">
                                    </div>`
                  break
              }
            // ADDING EVENT WHEN ELEMENT IS CREATED
            // for (const elt of arrowLabel) {
            //     console.log(elt);
            //     elt.addEventListener('click', )
            // }
          }
        }
    })
}
const removeLabel = () => {
    document.addEventListener('click', (e) => {
        if(e.target.nodeName === 'IMG' && e.target.className === 'removeTag') {
            e.target.parentNode.remove()
        }
    })
}
const showNoIdFound = (arrayOfId) => {
    if(arrayOfId.length === 0) {
        error.innerHTML = `<p style="background-color: #fed8b2">Aucune recette ne correspond à votre recherche... Vous pouvez chercher "tarte aux pommes", "poisson", etc.
    </p>`
    }
}


ingInput.addEventListener('input', filterDropdownElementByinput)
appInput.addEventListener('input', filterDropdownElementByinput)
ustInput.addEventListener('input', filterDropdownElementByinput)

export {addLabel,
        removeLabel,
        showAllFilterInDropdownList,
        showAllCardRecipe,
        filterByLabel, 
        showNoIdFound, 
        updateIngredientDropdownList ,
        updateApplianceDropdownList ,
        updateUstensilsDropdownList ,
        createDomElement, 
        updateCardRecipe
} 