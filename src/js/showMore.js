const brandsContent = document.querySelector('.brands__content');
const aboutUsDescription = document.querySelector('.about-us__description');
const repairContent = document.querySelector('.repair__content');
const buttonsReadMore = document.querySelectorAll('.button-details');
const brandsButtonText = document.querySelector(
  '.brands__button-details .button-details__text'
);
const aboutUsButtonText = document.querySelector(
  '.about-us__button-details .button-details__text'
);
const repairButtonText = document.querySelector(
  '.repair__button-details .button-details__text'
);

const checkedButtonReadMore = (container, classActive, text, buttonText) => {
  container.classList.toggle(classActive);
  if (container.classList.contains(classActive)) {
    buttonText.textContent = text[0];
  } else {
    buttonText.textContent = text[1];
  }
};

const showMore = (e) => {
  if (e.target.closest('.brands__button-details')) {
    checkedButtonReadMore(
      brandsContent,
      'brands__content--open',
      ['Скрыть', 'Показать еще'],
      brandsButtonText
    );
  } else if (e.target.closest('.about-us__button-details')) {
    checkedButtonReadMore(
      aboutUsDescription,
      'about-us__description--open',
      ['Скрыть', 'Читать далее'],
      aboutUsButtonText
    );
  } else if (e.target.closest('.repair__button-details')) {
    checkedButtonReadMore(
      repairContent,
      'repair__content--open',
      ['Скрыть', 'Показать еще'],
      repairButtonText
    );
  }
};

buttonsReadMore.forEach((button) => {
  button.addEventListener('click', showMore);
});
