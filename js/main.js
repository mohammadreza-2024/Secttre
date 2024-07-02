const menuBtn = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".menu-mobile");
const arrowDowns = document.querySelectorAll(".arrow-down");
const allBoxQuestion = document.querySelectorAll(
  ".question-content__box-question"
);
const placesSvg = document.querySelectorAll(".question-content__svg-place");

function removeClass() {
  allBoxQuestion.forEach((box) => {
    box.classList.remove("open");
  });
  arrowDowns.forEach((arrow) => {
    arrow.classList.remove("open");
  });
}

placesSvg.forEach((placeSvg) => {
  placeSvg.addEventListener("click", (event) => {
    let arrowIcon = event.target.lastElementChild;
    let box = event.target.parentNode.parentNode;

    if (
      box.classList.contains("open") &&
      arrowIcon.classList.contains("open")
    ) {
      box.classList.remove("open");
      arrowIcon.classList.remove("open");
    } else {
      removeClass();
      box.classList.add("open");
      arrowIcon.classList.add("open");
    }
  });
});

menuBtn.onclick = () => {
  menuBtn.classList.toggle("open");
  menuMobile.classList.toggle("open");
};

const scrollRevealOptions = {
  distance: "50px",
  duration: 1000,
  origin: "bottom",
};

ScrollReveal().reveal(".header-content__caption", {
  ...scrollRevealOptions,
});
ScrollReveal().reveal(".header-content__title", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".header-content__list", {
  ...scrollRevealOptions,
  delay: 1000,
});
ScrollReveal().reveal(".question-content__left", {
  ...scrollRevealOptions,
  origin: "left",
});
ScrollReveal().reveal(".article-content__item.item-1", {
  ...scrollRevealOptions,

});
ScrollReveal().reveal(".article-content__item.item-2", {
  ...scrollRevealOptions,
  delay: 500,

});
ScrollReveal().reveal(".article-content__item.item-3", {
  ...scrollRevealOptions,
  delay:1000,

});

const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,

 
  pagination: {
    el: '.swiper-pagination',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

