let menuButton = document.querySelector('#hamburger')
let headerLinks = document.querySelector('.header-links')
let listaServizi = document.querySelector('.lista-servizi')

console.log(listaServizi)
listaServizi.addEventListener('click', (e) => {
    // console.log(e.target)
})

let buttons = Array.from(listaServizi.querySelectorAll('span'))
console.log(buttons)

let comunicazioneButton = document.querySelector('#comunicazione-btn')
let comunicazioneDiv = document.querySelector('#comunicazione-text')
let marketingButton = document.querySelector('#marketing-btn')
let marketingDiv = document.querySelector('#marketing-text')
let identityButton = document.querySelector('#identity-btn')
let identityDiv = document.querySelector('#identity-text')
let consulenzaButton = document.querySelector('#consulenza-btn')
let consulenzaDiv = document.querySelector('#consulenza-text')
let formazioneButton = document.querySelector('#formazione-btn')
let formazioneDiv = document.querySelector('#formazione-text')


menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('closed')
    headerLinks.classList.toggle('open')
})

headerLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        menuButton.classList.toggle('closed')
        headerLinks.classList.toggle('open')
    }
})


comunicazioneButton.addEventListener('click', () => {
    toggleText(comunicazioneButton, comunicazioneDiv)

})
marketingButton.addEventListener('click', () => {
    toggleText(marketingButton, marketingDiv)

})
identityButton.addEventListener('click', () => {
    toggleText(identityButton, identityDiv)

})
consulenzaButton.addEventListener('click', () => {
    toggleText(consulenzaButton, consulenzaDiv)

})
formazioneButton.addEventListener('click', () => {
    toggleText(formazioneButton, formazioneDiv)

})

function toggleText(button, container) {
    container.classList.toggle('hide')
        if (container.classList.contains('hide')) {
            button.textContent = '+'
        } else {
            button.textContent = 'X'
        }
}