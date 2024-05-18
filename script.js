//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
  document.body.scrollTop > 20 ||
  document.documentElement.scrollTop > 20
) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}


const AnimateOnScroll = function ({ offset } = { offset: 10 }) {
// Define a dobra superior, inferior e laterais da tela
const windowTop = (offset * window.innerHeight) / 100;
const windowBottom = window.innerHeight - windowTop;
const windowLeft = 0;
const windowRight = window.innerWidth;

this.start = (element) => {
window.requestAnimationFrame(() => {
  // Seta os atributos customizados
  element.style.animationDelay = element.dataset.animationDelay;
  element.style.animationDuration = element.dataset.animationDuration;

  // Inicia a animacao setando a classe para animar
  element.classList.add(element.dataset.animation);

  // Seta o elemento como animado
  element.dataset.animated = "true";
});
};

this.inViewport = (element) => {
// Obtem o boundingbox do elemento
const elementRect = element.getBoundingClientRect();
const elementTop =
  elementRect.top + parseInt(element.dataset.animationOffset) ||
  elementRect.top;
const elementBottom =
  elementRect.bottom - parseInt(element.dataset.animationOffset) ||
  elementRect.bottom;
const elementLeft = elementRect.left;
const elementRight = elementRect.right;

// Verifica se o elemento esta na tela
return (
  elementTop <= windowBottom &&
  elementBottom >= windowTop &&
  elementLeft <= windowRight &&
  elementRight >= windowLeft
);
};

// Percorre o array de elementos, verifica se o elemento está na tela e inicia animação
this.verifyElementsInViewport = (els = elements) => {
for (let i = 0, len = els.length; i < len; i++) {
  // Passa para o proximo laço se o elemento ja estiver animado
  if (els[i].dataset.animated) continue;

  this.inViewport(els[i]) && this.start(els[i]);
}
};

// Obtem todos os elementos a serem animados
this.getElements = () =>
document.querySelectorAll("[data-animation]:not([data-animated])");

// Atualiza a lista de elementos a serem animados
this.update = () => {
elements = this.getElements();
elements && this.verifyElementsInViewport(elements);
};

// Inicia os eventos
window.addEventListener("load", this.update, false);
window.addEventListener(
"scroll",
() => this.verifyElementsInViewport(elements),
{ passive: true }
);
window.addEventListener(
"resize",
() => this.verifyElementsInViewport(elements),
{ passive: true }
);
};

// Initialize
const options = {
offset: 15 // percentage of the window
};

const animation = new AnimateOnScroll(options);

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop:true,
          centeredSlides:true,
          autoplay: {
              delay: 1500,
              disableOnInteraction: false,
          },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      0: {
      slidesPerView: 1,
      },
      540: {
      slidesPerView: 3,
      },
  
  },
  });

//Index-Gallery
var swiper = new Swiper(".gallery-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  autoplay: {
      delay: 1500,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 3,
      },
      991: {
          slidesPerView: 4,
      },
  },
});