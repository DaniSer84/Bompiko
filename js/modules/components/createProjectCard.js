import {createEl} from './createEl.js'
import { plusProjectSlides } from './projectSlideShow.js'

function createProjectCard(container, project) {
    container.innerHTML = ''
    let projectTitle = createEl('h2', '', 'project-title', project.title, '', container)
    let projectSlidesContainer = createEl('div', '', 'project-slides', '', '', container) 
    project.images.forEach(image => {
        let projectSlide = createEl('img', '', 'project-img fade', '', image, projectSlidesContainer)
    })
    let prev = createEl('a', '', 'prev', `<i class="fa-solid fa-chevron-left"></i>`, '', projectSlidesContainer)
    let next = createEl('a', '', 'next', `<i class="fa-solid fa-chevron-right" ></i>`, '', projectSlidesContainer)
    let projectDetailsContainer = createEl('div', '', 'project-details', `<h3>Dettagli del progetto</h3>${project.description}`, '', container)
    let projectExtraContainer = createEl('div', '', 'project-extra', '', '', container)
    let cliente = createEl('p', '', '', `<i class="fa-solid fa-caret-right"></i><span>cliente: </span> ${project.cliente}`, '', projectExtraContainer)
    let lavoro = createEl('p', '', '', `<i class="fa-solid fa-caret-right"></i><span>lavoro: </span> ${project.lavoro}`, '', projectExtraContainer)

}


function createCardAndSlideShow(container, project) {
    createProjectCard(container, project)
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
}

export {createCardAndSlideShow}