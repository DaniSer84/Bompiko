import { toggleText } from "./functions.js";

function createServicesList(list, container) {
    list.forEach(element => {
        let listElement = document.createElement('li')
        let button = document.createElement('span')
        let paragraphContainer = document.createElement('div')
        let paragraph = document.createElement('p')

        button.dataset.filter = element.dataFilter
        button.id = `${element.dataFilter}-btn`
        paragraphContainer.dataset.filter = element.dataFilter
        paragraphContainer.id = `${element.dataFilter}-text`
        paragraphContainer.className = 'nav-text hide'        

        button.textContent = '+'
        paragraph.textContent = element.paragraph
        listElement.innerHTML = element.name

        container.addEventListener('click', (e) => {
            let pressedButton = e.target.closest('span')
                if (paragraphContainer.dataset.filter === pressedButton.dataset.filter) {
                    toggleText(pressedButton, paragraphContainer)
                }
            }
        )

        container.append(listElement, paragraphContainer)
        listElement.append(button)
        paragraphContainer.append(paragraph)
    });
} 


export { createServicesList }
