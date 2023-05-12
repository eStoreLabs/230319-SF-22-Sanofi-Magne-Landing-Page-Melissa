//slider

const esNext = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-next');
const esPrev = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-prev');

const esNext2 = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-next2');
const esPrev2 = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-prev2');

const esNext3 = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-next3');
const esPrev3 = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-prev3');


let slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["es-mySlides", "es-mySlides-2"]
showSlides(1, 0);
showSlides(1, 1);
//showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}

esNext.addEventListener('click', ()=> plusSlides(1,0));
esPrev.addEventListener('click', ()=> plusSlides(-1,0));

esNext2.addEventListener('click', ()=> plusSlides(1,1));
esPrev2.addEventListener('click', ()=> plusSlides(-1,1));

// esNext3.addEventListener('click', ()=> plusSlides(1,2));
// esPrev3.addEventListener('click', ()=> plusSlides(-1,2));

//show content

const esShowContentButtons = document.querySelectorAll("[data-esshow-id]");

esShowContentButtons.forEach(esShowContentButton=> {
  esShowContentButton.addEventListener("click", () => {
    const esshowId = esShowContentButton.dataset.esshowId
    const esModal = document.getElementById(esshowId)
    esModal.classList.remove("es-hide");
    esShowContentButton.classList.add("es-hide");
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

calculatorSubmitBtn.addEventListener('click', () => showCalculatorResults(calculatorInputsCtn, calculatorResutlsCtn));
calculatorReturnBtn.addEventListener('click', () => returnToCalculator(calculatorInputsCtn, calculatorResutlsCtn));



//faq

const faqQuestions = document.querySelectorAll("[data-esquestion-id]");

faqQuestions.forEach(faqQuestion=> {
  faqQuestion.addEventListener("click", () => {
    const esquestionId = faqQuestion.dataset.esquestionId 
    const esfaqArrow= document.getElementById(esquestionId )
    esfaqArrow.classList.toggle('es-faq__rotate')
  })
})