import { scrollFunction, toggleMenu, toggleText, topFunction } from "./modules/functions.js"

import { createServicesList } from "./modules/listaServizi.js"
import { SERVIZI } from "./modules/servizi.js"


let menuButton = document.querySelector('#hamburger')
let headerLinks = document.querySelector('.header-links')
let listaServizi = document.querySelector('.lista-servizi')
let containers = Array.from(listaServizi.querySelectorAll('div'))
let botBtn = document.getElementById('bot-btn')

createServicesList(SERVIZI, listaServizi)

menuButton.addEventListener('click', () => {
    toggleMenu(menuButton, headerLinks)
})

headerLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        toggleMenu(menuButton, headerLinks)
    }
})

window.onscroll = () => {scrollFunction(botBtn)}

botBtn.addEventListener('click', topFunction)



function toggleMenu(button, container) {
    button.classList.toggle('closed')
    container.classList.toggle('open')
}



