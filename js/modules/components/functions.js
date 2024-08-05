//go to top
function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

// show back to top button
function scrollFunction(button) {
    let n = 40
    if (document.body.scrollTop > n || document.documentElement.scrollTop > n) {
        button.style.display = 'block'
    } else {
        button.style.display = 'none'
    }
}

// toggle hamburger menu
function toggleMenu(button, container) {
    button.classList.toggle('closed')
    container.classList.toggle('open')
}

// show text for services
function toggleText(button, container) {
    container.classList.toggle('hide')
        if (container.classList.contains('hide')) {
            button.textContent = '+'
        } else {
            button.textContent = 'X'
        }
}

export {toggleMenu, toggleText, scrollFunction, topFunction}