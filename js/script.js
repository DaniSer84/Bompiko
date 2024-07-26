import { scrollFunction, toggleMenu, toggleText, topFunction } from "./modules/functions.js"

let menuButton = document.querySelector('#hamburger')
let headerLinks = document.querySelector('.header-links')
let listaServizi = document.querySelector('.lista-servizi')
let containers = Array.from(listaServizi.querySelectorAll('div'))
let botBtn = document.getElementById('bot-btn')

listaServizi.addEventListener('click', (e) => {
    let pressedButton = e.target.closest('span')
    containers.forEach(container => {
        if (container.dataset.filter === pressedButton.dataset.filter) {
            toggleText(pressedButton, container)
        }
    })
    }
)

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


