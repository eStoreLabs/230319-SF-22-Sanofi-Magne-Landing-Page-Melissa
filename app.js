//slider

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

//show content

const esShowContentButtons = document.querySelectorAll("[data-esshow-id]");

esShowContentButtons.forEach(esShowContentButton=> {
  esShowContentButton.addEventListener("click", () => {
    const esshowId = esShowContentButton.dataset.esshowId
    const esModal = document.getElementById(esshowId)
    esModal.classList.remove("es-hide");
    esShowContentButton.classList.add("es-hide")
  })
})


//calculator

const calculatorSubmitBtn = document.querySelector('.es-calculator__submitBtn');
const calculatorReturnBtn = document.querySelector('.es-calculator__returnBtn');

const calculatorInputsCtn = document.querySelector('.es-calculator__ctn--inputs');
const calculatorResutlsCtn = document.querySelector('.es-calculator__ctn--results');


const showCalculatorResults= (input, result) => {
  input.classList.add("es-hide")
  result.classList.remove("es-hide")
}

const returnToCalculator= (input, result) => {
  input.classList.remove("es-hide")
  result.classList.add("es-hide")
}

calculatorSubmitBtn.addEventListener('click', () => showCalculatorResults(calculatorInputsCtn, calculatorResutlsCtn))
calculatorReturnBtn.addEventListener('click', () => returnToCalculator(calculatorInputsCtn, calculatorResutlsCtn))





//faq

const faqQuestions = document.querySelectorAll("[data-esquestion-id]");

faqQuestions.forEach(faqQuestion=> {
  faqQuestion.addEventListener("click", () => {
    const esquestionId = faqQuestion.dataset.esquestionId 
    const esfaqArrow= document.getElementById(esquestionId )
    esfaqArrow.classList.toggle('es-faq__rotate')
  })
})