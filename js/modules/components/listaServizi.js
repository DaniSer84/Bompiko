import { toggleText } from "./functions.js";
import { createEl } from "./createEl.js";

function createServicesList(list, container) {
    list.forEach(element => {

        let listElement = createEl('li', '', '', element.name, '', container)
        let button = createEl('span', `${element.dataFilter}-btn`, '', '+', '', listElement)
        let paragraphContainer = createEl('div', `${element.dataFilter}-text`, 'nav-text hide', '', '', container)
        let paragraph = createEl('p', '', '', element.paragraph, '', paragraphContainer)

        button.dataset.filter = element.dataFilter
        paragraphContainer.dataset.filter = element.dataFilter

        container.addEventListener('click', (e) => {
            let pressedButton = e.target.closest('span')
                if (paragraphContainer.dataset.filter === pressedButton.dataset.filter) {
                    toggleText(pressedButton, paragraphContainer)
                }
            }
        )
    });
} 


export { createServicesList }
