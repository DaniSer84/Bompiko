import { createProjectCard } from "./modules/components/createProjectCard.js"
import { PROJECTS } from "./modules/mock/projectList.js"
import { plusProjectSlides } from "./modules/components/projectSlideShow.js"

let projectBtn = document.querySelector('.project-list-container span i')
let projectList = document.querySelector('.project-list')

projectBtn.addEventListener('click', () => {
    projectList.classList.toggle('show-project-list')
    if (projectList.classList.contains('show-project-list')) {
        projectBtn.style.rotate = '90deg'
    } else {
        projectBtn.style.rotate = 'none'
    }
})

let progectCardContainer = document.querySelector('.project-card')
createProjectCard(progectCardContainer, PROJECTS[1])

let projectSlides = Array.from(document.getElementsByClassName('project-img'))
plusProjectSlides(0, projectSlides)

let projectPrev = document.getElementsByClassName('prev')
projectPrev[0].addEventListener('click', () => {
    plusProjectSlides(-1, projectSlides)
})

let projectNext = document.getElementsByClassName('next')
projectNext[0].addEventListener('click', () => {
    plusProjectSlides(1, projectSlides)
})