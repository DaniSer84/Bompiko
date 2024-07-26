let botBtn = document.getElementById('bot-btn')

// the button appear when the user scrolls downs n px:
let n = 30
window.onscroll = () => {scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop > n || document.documentElement.scrollTop > n) {
        botBtn.style.display = 'block'
    } else {
        botBtn.style.display = 'none'
    }
}

// function to go back on top: 
botBtn.addEventListener('click', topFunction)

function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}
