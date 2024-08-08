import { PROJECTS } from "./modules/mock/projectList.js"
import { createCardAndSlideShow } from "./modules/components/createProjectCard.js"
import { createEl } from "./modules/components/createEl.js"
import { createCarouselSlides } from "./modules/components/createCarouselSlides.js"
import { plusSlides, repeatedPlusSlides, currentSlide, timeout } from "./modules/components/AutomaticSlideshow.js"

let projectBtn = document.querySelector('.project-list-container span i')
let projectList = document.querySelector('.project-list')

if (projectBtn) {
    projectBtn.addEventListener('click', () => {
        projectList.classList.toggle('show-project-list')
        if (projectList.classList.contains('show-project-list')) {
            projectBtn.style.rotate = '90deg'
        } else {
            projectBtn.style.rotate = 'none'
        }
    })
}

let carouselSlidesContainer = document.querySelector('.carousel-slides-container')
let carouselDotsContainer = document.querySelector('.carousel-dots-container')
if (carouselSlidesContainer && carouselDotsContainer) {
    createCarouselSlides(carouselSlidesContainer, carouselDotsContainer, PROJECTS)

    repeatedPlusSlides()

    let carouselContainer = document.querySelector('.carousel-container')
    let timeout2 
    carouselContainer.onmouseenter = () => {
    clearTimeout(timeout)
    clearTimeout(timeout2)
    }
    carouselContainer.onmouseleave = () => {
    timeout2 = setTimeout(repeatedPlusSlides, 8000)
    }

    let prev = document.querySelector('.carousel-prev') 
    let next = document.querySelector('.carousel-next')
    prev.addEventListener('click', () => {
    plusSlides(-1)
    })
    next.addEventListener('click', () => {
    plusSlides(1)
    })

    let dots = document.getElementsByClassName('dot')
    let dotsList = Array.from(dots)
    dotsList.forEach(dot => {
    dot.addEventListener('click', () => {
        currentSlide(dotsList.indexOf(dot) + 1)
    })
    })
}

let progectCardContainer = document.querySelector('.project-card')
if (progectCardContainer) {

    PROJECTS.forEach(project => {
        let projectItem = createEl('li', project.id, 'list-item', `<a>${project.title}</a>`, '', projectList)
    })
    let projectListItems = Array.from(document.getElementsByClassName('list-item'))
    projectListItems[0].classList.add('selected-project')
    let selectedProject = PROJECTS[0]

    createCardAndSlideShow(progectCardContainer, selectedProject)
    
    projectListItems.forEach(listItem => {
        listItem.addEventListener('click', (e) => {
            selectedProject = PROJECTS.find(project => project.title === e.target.innerHTML)
            createCardAndSlideShow(progectCardContainer, selectedProject)
            projectListItems.map(item => {
                if (item.id === selectedProject.id && !item.classList.contains('seleted-project')) {
                    item.classList.add('selected-project')
                } else {
                    item.classList.remove('selected-project')
                }
            })
        })
    })

    let carouselSlide = Array.from(document.getElementsByClassName('my-carousel-slide'))
    carouselSlide.forEach(slide => {
        slide.addEventListener('click', () => {
            selectedProject = PROJECTS.find(project => project.id === slide.id)
            createCardAndSlideShow(progectCardContainer, selectedProject)
            projectListItems.map(item => {
                if (item.id === selectedProject.id && !item.classList.contains('seleted-project')) {
                    item.classList.add('selected-project')
                } else {
                    item.classList.remove('selected-project')
                }
            })
        })
    })
    
}


export {projectList, projectBtn}