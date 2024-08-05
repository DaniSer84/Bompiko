import { PROJECTS } from "./modules/mock/projectList.js"
import { createCardAndSlideShow } from "./modules/components/createProjectCard.js"
import { createEl } from "./modules/components/createEl.js"

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
    
}


export {projectList}