const esNext = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-next')
const esPrev = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-prev')


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("es-mySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  slides[slideIndex-1].style.display = "block";
}

esNext.addEventListener('click', ()=> plusSlides(1))
esPrev.addEventListener('click', ()=> plusSlides(-1))
