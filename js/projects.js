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
