import { trapFocus } from './trapFocus';

const burgerOpen = document.querySelector('.burger--open');
const burgerClose = document.querySelector('.burger--close');
const sideNav = document.querySelector('.sidenav');
const overlay = document.querySelector('.overlay');
const modalFeedback = document.querySelector('.modal--feedback');
const modalCallback = document.querySelector('.modal--callback');
const wrapper = document.querySelector('.wrapper');
const buttonsContactIntoHeader = document.querySelector(
  '.header .icon-bar__list'
);
const buttonsCloseModal = document.querySelectorAll('.modal .burger--close');
const buttonsContact = document.querySelector('.contact .icon-bar__list');

let lastFocusedElement;

const openSideNav = () => {
  lastFocusedElement = document.activeElement;
  sideNav.classList.add('sidenav--open');
  overlay.classList.remove('overlay--hidden');
  wrapper.classList.add('wrapper--hidden');
  trapFocus(sideNav);
};

const closeSideNav = () => {
  if (sideNav.classList.contains('sidenav--open')) {
    sideNav.classList.remove('sidenav--open');
  } else if (modalFeedback.classList.contains('modal--open')) {
    modalFeedback.classList.remove('modal--open');
  } else if (modalCallback.classList.contains('modal--open')) {
    modalCallback.classList.remove('modal--open');
  }
  overlay.classList.add('overlay--hidden');
  wrapper.classList.remove('wrapper--hidden');
  lastFocusedElement.focus();
};

const closeModal = (e) => {
  if (e.target.closest('.modal--feedback')) {
    modalFeedback.classList.remove('modal--open');
    overlay.classList.add('overlay--hidden');
  }
  if (e.target.closest('.modal--callback')) {
    modalCallback.classList.remove('modal--open');
    overlay.classList.add('overlay--hidden');
  }
  wrapper.classList.remove('wrapper--hidden');
  lastFocusedElement.focus();
};

const openModal = (e) => {
  if (!document.activeElement.closest('.sidenav')) {
    lastFocusedElement = document.activeElement;
  }
  if (e.target.closest('.icon-button--call')) {
    modalCallback.classList.add('modal--open');
    overlay.classList.remove('overlay--hidden');
    trapFocus(modalCallback);
    if (sideNav.classList.contains('sidenav--open')) {
      sideNav.classList.remove('sidenav--open');
    }
  } else if (e.target.closest('.icon-button--chat')) {
    modalFeedback.classList.add('modal--open');
    overlay.classList.remove('overlay--hidden');
    trapFocus(modalFeedback);
    if (sideNav.classList.contains('sidenav--open')) {
      sideNav.classList.remove('sidenav--open');
    }
  }
  wrapper.classList.add('wrapper--hidden');
};

buttonsContactIntoHeader.addEventListener('click', openModal);
burgerOpen.addEventListener('click', openSideNav);
burgerClose.addEventListener('click', closeSideNav);
overlay.addEventListener('click', closeSideNav);
buttonsContact.addEventListener('click', openModal);
buttonsCloseModal.forEach((btn) => btn.addEventListener('click', closeModal));

const breakpointLaptopCheck = () => {
  if (sideNav.classList.contains('sidenav--open')) {
    sideNav.classList.remove('sidenav--open');
    overlay.classList.add('overlay--hidden');
    wrapper.classList.remove('wrapper--hidden');
  }
};

const laptop = window.matchMedia('(min-width: 1440px)');
laptop.addEventListener('change', breakpointLaptopCheck);
