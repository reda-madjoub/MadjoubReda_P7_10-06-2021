const arrow = document.querySelectorAll('.bloc-top img')
const input = document.querySelectorAll('.bloc-top input')

//CHANGE PLACEHOLDER INPUT ON FOCUS

input.forEach(el => {
    el.addEventListener('focus', () => {
        // CLOSE ALL DROPDOWNS ALREADY OPEN
        arrow.forEach(elt => {
            elt.parentElement.parentElement.classList.add('close')
            elt.parentElement.parentElement.classList.remove('open')
            elt.style.transform =  'rotate(0deg)'
            // console.log(elt);
                
            if(elt.parentElement.parentElement.classList.contains('ust')) {
                elt.parentElement.children[0].setAttribute('PLACEHOLDER', 'Ustensiles')
            }else if (elt.parentElement.parentElement.classList.contains('ing')) {
                elt.parentElement.children[0].setAttribute('PLACEHOLDER', 'Ingredient')
            }else if(elt.parentElement.parentElement.classList.contains('app')){
                elt.parentElement.children[0].setAttribute('PLACEHOLDER', 'Appareil')
            }
        })
                
        // } 
            
        // OPEN SELECTED MENU
        if(el.parentElement.parentElement.classList.contains('close')){
            el.parentElement.parentElement.classList.remove('close')
            el.parentElement.parentElement.classList.add('open')
            el.nextElementSibling.style.transform = 'rotate(180deg)' 

            if(el.parentElement.parentElement.classList.contains('ust') && el.parentElement.parentElement.classList.contains('open')) {
                el.parentElement.children[0].setAttribute('PLACEHOLDER', 'Rechercher un ustensile')
            }else if (el.parentElement.parentElement.classList.contains('ing') && el.parentElement.parentElement.classList.contains('open')) {
                el.parentElement.children[0].setAttribute('PLACEHOLDER', 'Rechercher un ingrédient')
            }else if(el.parentElement.parentElement.classList.contains('app') && el.parentElement.parentElement.classList.contains('open'))
                el.parentElement.children[0].setAttribute('PLACEHOLDER', 'Rechercher un appareil')
        } 
    })
})

// OPEN DROPDOWNS MENU
arrow.forEach(el => {
    // CLICK ON ARROW
    el.addEventListener('click', () => {
        // CLOSE ALL DROPDOWNS ALREADY OPEN
        arrow.forEach(elt => {
            // elt.parentElement.parentElement.classList.remove("open")
            // elt.style.transform =  "rotate(0deg)"
            // elt.parentElement.parentElement.classList.add("close")
            
            if(elt.parentElement.parentElement.classList.contains('ust')) {
                elt.parentElement.children[0].setAttribute('PLACEHOLDER', 'Ustensiles')
            }else if (elt.parentElement.parentElement.classList.contains('ing')) {
                elt.parentElement.children[0].setAttribute('PLACEHOLDER', 'Ingredient')
            }else if(elt.parentElement.parentElement.classList.contains('app')){
                elt.parentElement.children[0].setAttribute('PLACEHOLDER', 'Appareil')
            } 
        
        })
        // OPEN SELECTED MENU
        if(el.parentElement.parentElement.classList.contains('close')){
            el.parentElement.parentElement.classList.remove('close')
            el.style.transform = 'rotate(180deg)' 
            
            if(el.parentElement.parentElement.classList.contains('ust')) {
                el.parentElement.parentElement.classList.add('open')
                el.parentElement.children[0].setAttribute('PLACEHOLDER', 'Rechercher un ustensile')
            }else if (el.parentElement.parentElement.classList.contains('ing')) {
                el.parentElement.parentElement.classList.add('open')
                el.parentElement.children[0].setAttribute('PLACEHOLDER', 'Rechercher un ingrédient')
            }else if(el.parentElement.parentElement.classList.contains('app')){
                el.parentElement.parentElement.classList.add('open')
                el.parentElement.children[0].setAttribute('PLACEHOLDER', 'Rechercher un appareil')
            }

        } else {
            el.parentElement.parentElement.classList.remove('open')
            el.parentElement.parentElement.classList.add('close')
            el.style.transform = 'rotate(0deg)' 
        } 
        // console.log("test");
    })
})


