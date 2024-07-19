let menuButton = document.querySelector('#hamburger')
let headerLinks = document.querySelector('.header-links')
let listaServizi = document.querySelector('.lista-servizi')
let containers = Array.from(listaServizi.querySelectorAll('div'))

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
        console.log(e.target.tagName)
        toggleMenu(menuButton, headerLinks)
    }
})

function toggleMenu(button, container) {
    button.classList.toggle('closed')
    container.classList.toggle('open')
}

function toggleText(button, container) {
    container.classList.toggle('hide')
        if (container.classList.contains('hide')) {
            button.textContent = '+'
        } else {
            button.textContent = 'X'
        }
}