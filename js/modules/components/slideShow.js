// project slideshow
let projectSlideIndex = 1;

function plusProjectSlides(n, slides) {
  showProjectSlides(projectSlideIndex += n, slides);
}

function currentProjectSlide(n, slides) {
  showProjectSlides(projectSlideIndex = n, slides)
}

function showProjectSlides(n, slides) {
  let i;
  if (n > slides.length) {
    projectSlideIndex = 1
  }    
  if (n < 1) {
    projectSlideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[projectSlideIndex-1].style.display = "block";  
}

export { plusProjectSlides, currentProjectSlide}

