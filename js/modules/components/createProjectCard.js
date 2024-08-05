import {createEl} from './createEl.js'

function createProjectCard(container, project) {
    let projectTitle = createEl('h2', '', 'project-title', project.title, '', container)
    let projectSlidesContainer = createEl('div', '', 'project-slides', '', '', container) 
    project.images.forEach(image => {
        let projectSlide = createEl('img', '', 'project-img fade', '', image, projectSlidesContainer)
    })
    // let projectSlide = createEl('img', '', 'project-img', '', project.images[0], projectSlidesContainer)
    let prev = createEl('a', '', 'prev', `<i class="fa-solid fa-chevron-left"></i>`, '', projectSlidesContainer)
    let next = createEl('a', '', 'next', `<i class="fa-solid fa-chevron-right" ></i>`, '', projectSlidesContainer)
    let projectDetailsContainer = createEl('div', '', 'project-details', `<h3>Dettagli del progetto</h3>${project.description}`, '', container)
    let projectExtraContainer = createEl('div', '', 'project-extra', '', '', container)
    let cliente = createEl('p', '', '', `<i class="fa-solid fa-caret-right"></i><span>cliente: </span> ${project.cliente}`, '', projectExtraContainer)
    let lavoro = createEl('p', '', '', `<i class="fa-solid fa-caret-right"></i><span>lavoro: </span> ${project.lavoro}`, '', projectExtraContainer)

}

export {createProjectCard}