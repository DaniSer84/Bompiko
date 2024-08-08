import { scrollFunction, toggleMenu, topFunction } from "./modules/components/functions.js"
import { projectList, projectBtn } from "./projects.js"

let menuButton = document.querySelector('#hamburger')
let headerLinks = document.querySelector('.header-links')
let botBtn = document.getElementById('bot-btn')

menuButton.addEventListener('click', () => {
    toggleMenu(menuButton, headerLinks)
    if(projectList) {
        projectList.classList.remove('show-project-list')
    }
    if(projectBtn) {
        projectBtn.style.rotate = 'none'
    }
})

headerLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        toggleMenu(menuButton, headerLinks)
        if(projectList) {
            projectList.classList.remove('show-project-list')
        }
    }
})

window.onscroll = () => {scrollFunction(botBtn)}

botBtn.addEventListener('click', topFunction)









