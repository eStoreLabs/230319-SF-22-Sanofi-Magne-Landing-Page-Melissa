(
  ()=> {
//slider

const esNext = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-next');
const esPrev = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-prev');

const esNext2 = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-next2');
const esPrev2 = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-prev2');

const esNext3 = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-next3');
const esPrev3 = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-prev3');

const esNext4 = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-next4');
const esPrev4 = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-prev4');

const esNext5 = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-next5');
const esPrev5 = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-prev5');

let slideIndex = [1,1,1,1,1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["es-mySlides", "es-mySlides-2", "es-mySlides-3", "es-mySlides-4", "es-mySlides-5"]
showSlides(1, 0, 0, 0, 0);
showSlides(1, 1, 1, 1, 1);
showSlides(1, 2, 2, 2, 2);
showSlides(1, 3, 3, 3, 3);
showSlides(1, 4, 4, 4, 4);

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

esNext3.addEventListener('click', ()=> plusSlides(1,2));
esPrev3.addEventListener('click', ()=> plusSlides(-1,2));

esNext4.addEventListener('click', ()=> plusSlides(1,3));
esPrev4.addEventListener('click', ()=> plusSlides(-1,3));

esNext5.addEventListener('click', ()=> plusSlides(1,4));
esPrev5.addEventListener('click', ()=> plusSlides(-1,4));


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

const calculatorSubmitBtn = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-calculator__submitBtn');
const calculatorReturnBtn = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-calculator__returnBtn');

const calculatorInputsCtn = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-calculator__ctn--inputs');
const calculatorResutlsCtn = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-calculator__ctn--results');


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


//magnifier glass

function esMagnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /* Create magnifier glass: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "es-symptoms__magnifierGlass");

  /* Insert magnifier glass: */
  img.parentElement.insertBefore(glass, img);

  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", esMoveMagnifier);
  img.addEventListener("mousemove", esMoveMagnifier);

  /*and also for touch screens:*/
  glass.addEventListener("touchmove", esMoveMagnifier);
  img.addEventListener("touchmove", esMoveMagnifier);
  function esMoveMagnifier(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /* Set the position of the magnifier glass: */
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}

esMagnify("esBodyImg", 1.4);


//faq

const faqQuestions = document.querySelectorAll("[data-esquestion-id]");

faqQuestions.forEach(faqQuestion=> {
  faqQuestion.addEventListener("click", () => {
    const esquestionId = faqQuestion.dataset.esquestionId 
    const esfaqArrow= document.getElementById(esquestionId )
    esfaqArrow.classList.toggle('es-faq__rotate')
  })
})

})()