'use strict';

(function () {
  let DESK_SIZE = 1900;

  let header = document.querySelector('.header');
  let headerWrapper = header.querySelector('.header__wrapper');
  let headerLanguagesActive = header.querySelector('.header__languages-button--active');
  let headerLanguages = header.querySelectorAll('.header__languages-button');
  let headerNavLinks = header.querySelectorAll('.header__nav-link');
  let headerUserBtns = header.querySelectorAll('.header__user-button');

  let nav = document.querySelector('.nav');
  let navLogo = nav.querySelector('.nav__logo');
  let navLinks = nav.querySelectorAll('.nav__link');
  let navItemsActive = nav.querySelectorAll('.nav__item--active');


  let addStyle = function (array, style) {
    array.forEach(element => {
      element.classList.add(style)
    });
  }

  let removeStyle = function (array, style) {
    array.forEach(element => {
      element.classList.remove(style)
    });
  }

  let addHeaderStyles = function () {
    header.classList.add('header--scroll');
    headerWrapper.classList.add('header__wrapper--scroll');
    headerLanguagesActive.classList.add('header__languages--active--scroll');

    addStyle(headerLanguages, 'header__languages-button--scroll');
    addStyle(headerNavLinks, 'header__nav-link--scroll');
    addStyle(headerUserBtns, 'header__user-button--scroll');
  }

  let removeHeaderStyles = function () {
    header.classList.remove('header--scroll');
    headerWrapper.classList.remove('header__wrapper--scroll');
    headerLanguagesActive.classList.remove('header__languages--active--scroll');

    removeStyle(headerLanguages, 'header__languages-button--scroll');
    removeStyle(headerNavLinks, 'header__nav-link--scroll');
    removeStyle(headerUserBtns, 'header__user-button--scroll');
  }

  let addNavStyles = function () {
    nav.classList.add('nav--scroll');
    navLogo.src = 'img/logo_color.svg';
    addStyle(navLinks, 'nav__link--scroll');

    removeStyle(navItemsActive, 'nav__item--active');
    addStyle(navItemsActive, 'nav__item--active--scroll')
  }

  let removeNavStyles = function () {
    nav.classList.remove('nav--scroll');
    navLogo.src = 'img/logo.svg';
    removeStyle(navLinks, 'nav__link--scroll');

    removeStyle(navItemsActive, 'nav__item--active--scroll');
    addStyle(navItemsActive, 'nav__item--active')
  }

  let scroll = function () {
    if (document.body.clientWidth >= DESK_SIZE){
      let currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 0) {
        addHeaderStyles();
        addNavStyles();
      }

      if (currentScrollPos === 0) {
        removeHeaderStyles();
        removeNavStyles();
      }
    }
  }

  window.addEventListener('scroll', scroll);
})();
