import { createServicesList } from "./modules/listaServizi.js"
import { SERVIZI } from "./modules/servizi.js"


let menuButton = document.querySelector('#hamburger')
let headerLinks = document.querySelector('.header-links')
let listaServizi = document.querySelector('.lista-servizi')
let containers = Array.from(listaServizi.querySelectorAll('div'))

createServicesList(SERVIZI, listaServizi)

menuButton.addEventListener('click', () => {
    toggleMenu(menuButton, headerLinks)
})

headerLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        toggleMenu(menuButton, headerLinks)
    }
})

function toggleMenu(button, container) {
    button.classList.toggle('closed')
    container.classList.toggle('open')
}



