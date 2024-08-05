import { scrollFunction, toggleMenu, topFunction } from "./modules/functions.js"

let menuButton = document.querySelector('#hamburger')
let headerLinks = document.querySelector('.header-links')
let botBtn = document.getElementById('bot-btn')
let projectBtn = document.querySelector('.project-list-container span i')
let projectList = document.querySelector('.project-list')

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

projectBtn.addEventListener('click', () => {
    projectList.classList.toggle('show-project-list')
    if (projectList.classList.contains('show-project-list')) {
        projectBtn.style.rotate = '90deg'
    } else {
        projectBtn.style.rotate = 'none'
    }
})







