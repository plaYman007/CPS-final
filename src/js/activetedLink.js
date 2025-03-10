const slideMenu = document.querySelector('.slide-menu__list');
const slideMenuItems = document.querySelectorAll('.slide-menu__item');
const menu = document.querySelector('.menu__list');
const menuItems = document.querySelectorAll('.menu__item');

const addActiveClassToItemOfList = (
  event,
  classActive,
  classItem,
  classLink,
  items
) => {
  if (event.classList.contains(classLink)) {
    items.forEach((item) => {
      item.classList.remove(classActive);
    });
    if (event.closest(classItem)) {
      event.closest(classItem).classList.add(classActive);
    }
  }
};

const addActiveClassToItemOfSlideMenu = (e) => {
  addActiveClassToItemOfList(
    e.target,
    'slide-menu__item--active',
    '.slide-menu__item',
    'slide-menu__link',
    slideMenuItems
  );
};

const addActiveClassToItemOfMenu = (e) => {
  addActiveClassToItemOfList(
    e.target,
    'menu__item--active',
    '.menu__item',
    'menu__link',
    menuItems
  );
};

slideMenu.addEventListener('click', addActiveClassToItemOfSlideMenu);
menu.addEventListener('click', addActiveClassToItemOfMenu);
