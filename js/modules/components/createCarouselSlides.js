import { createEl } from "./createEl.js";

// CREATE SLIDES FUNCTION:
function createCarouselSlides(carouselSlideContainer, carouselDotsContainer, list) {
    list.forEach(element => {
      let slide = createEl('div', element.id, 'my-carousel-slide fade', '', '', carouselSlideContainer, '')
      let img = createEl('img', '', 'carousel-slide-img', '', element.images[0], slide, '')
      // let textContainer = createEl('div', '', 'carousel-slide-text-container', '', '', slide)
      let title = createEl('h2', '', '', element.title, '', slide)
      let description = createEl('p', '', '', element.shortDescription, '', slide)
      let dot = createEl('span', '', 'dot', '', '', carouselDotsContainer)
    });
}

export {createCarouselSlides}