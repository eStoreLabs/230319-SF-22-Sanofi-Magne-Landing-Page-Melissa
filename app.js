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

//add that 6 to test if it works for some more slides
const esNext6 = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-next6');
const esPrev6 = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-prev6');

let slideIndex = [1,1,1,1,1,1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["es-mySlides", "es-mySlides-2", "es-mySlides-3", "es-mySlides-4", "es-mySlides-5", "es-mySlides-6"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
//here added the 5, test
//they all stopped working
showSlides(1, 5);

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

// test if this works for one more slider
esNext6.addEventListener('click', ()=> plusSlides(1,5));
esPrev6.addEventListener('click', ()=> plusSlides(-1,5));

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
const calculatorResultsCtn = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-calculator__ctn--results');

const doseMatrix = {
  'F-100' : {
    'amount' : 100,
    'adult' : {
      'dose' : 4,
      'text' : '3-4'
    },
    'young' : {
      'dose' : 4,
      'text' : '2-4'
    }
  },
  'F-60' : {
    'amount' : 60,
    'adult' : {
      'dose' : 4,
      'text' : '3-4'
    },
    'young' : {
      'dose' : 4,
      'text' : '2-4'
    }
  },
  'N-60' : {
    'amount' : 60,
    'adult' : {
      'dose' : 8,
      'text' : '8'
    },
    'young' : {
      'dose' : 6,
      'text' : '6'
    }
  },
}

const showCalculatorResults= (input, result) => {
  input.classList.add("es-hide")
  result.classList.remove("es-hide")

  const data = {
    variant: esProductOption.value,
    age: esPersonOption.value,
    date: esDateOption.valueAsDate,
  }

  const diffTime = Math.abs(new Date() - data.date);
  const diffDays = Math.ceil(diffTime / 86400000);
  const totalAmountTaken = diffDays * doseMatrix[data.variant][data.age].dose
  const amountLeft = doseMatrix[data.variant].amount - totalAmountTaken
  const daysLeft = Math.floor(amountLeft / doseMatrix[data.variant][data.age].dose)
  const endDate = new Date((new Date()).getTime() + 86400000 * daysLeft)
  const endDateFormatted = new Intl.DateTimeFormat('pl', {year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(endDate)

  document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-calculator__result--tabs').innerHTML = doseMatrix[data.variant][data.age].text
  document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-calculator__result--data-container').innerHTML = ''
  for (let i in endDateFormatted) {
    document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-calculator__result--data-container').innerHTML += endDateFormatted[i].value
  }
}

const returnToCalculator= (input, result) => {
  input.classList.remove("es-hide")
  result.classList.add("es-hide")
}

calculatorSubmitBtn.addEventListener('click', () => showCalculatorResults(calculatorInputsCtn, calculatorResultsCtn));
calculatorReturnBtn.addEventListener('click', () => returnToCalculator(calculatorInputsCtn, calculatorResultsCtn));

const esProductOption = document.getElementById('es-calculator-product')
const esPersonOption = document.getElementById('es-calculator-who')
const esDateOption = document.getElementById('es-calculator-date')
esDateOption.valueAsDate = new Date()



//magnifier glass

const zoomGlassPositions = [
    [50, 12],
    [50, 14],
    [50, 16],
    [50, 23],
    [61, 26],
    [50, 33],
    [50, 40],
    [60, 79],
]
let currentMagnifiedItem = -1;
const magnifierGlass = document.querySelector('#es-sanofi.es-sanofi #es-magne.es-magne .es-symptoms__magnifierGlass')

function esMagnifyNextItem() {
  currentMagnifiedItem++

  const allItems = document.querySelectorAll('#es-sanofi.es-sanofi #es-magne.es-magne .es-symptoms__contentCtn .es-symptoms__singleItem')
  const allZoomImages = document.querySelectorAll('#es-sanofi.es-sanofi #es-magne.es-magne .es-symptoms__magnifierGlass img')

  if (currentMagnifiedItem >= allItems.length) {
    currentMagnifiedItem = 0
  }
  allItems.forEach((el) => {
    el.classList.remove('es-currentlySelected')
  })
  allZoomImages.forEach((el) => {
    el.style.opacity = 0
  })

  allItems.item(currentMagnifiedItem).classList.add('es-currentlySelected')
  allZoomImages.item(currentMagnifiedItem).style.opacity = 1
  magnifierGlass.style.left = `${zoomGlassPositions[currentMagnifiedItem][0]}%`
  magnifierGlass.style.top = `${zoomGlassPositions[currentMagnifiedItem][1]}%`

  setTimeout(esMagnifyNextItem, 2000)
}
esMagnifyNextItem()


//faq

const faqQuestions = document.querySelectorAll("[data-esquestion-id]");

faqQuestions.forEach(faqQuestion=> {
  faqQuestion.addEventListener("click", () => {
    const esquestionId = faqQuestion.dataset.esquestionId
    const esfaqArrow= document.getElementById(esquestionId )
    esfaqArrow.classList.toggle('es-faq__rotate')
  })
})

})(document)
