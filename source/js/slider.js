'use strict';

(function () {

  let EvtKeys = {
    LEFT: 'ArrowLeft',
    RIGHT: 'ArrowRight'
  };

  let SLIDE_STEP = 100;
  let MIN_SLIDE_STYLE = 0;
  let MAX_SLIDE_STYLE = -200;

  let slider = document.querySelector('.slider');
  let sliderList = slider.querySelector('.slider__list');
  let prev = slider.querySelector('.slider__arrow--back')
  let forward = slider.querySelector('.slider__arrow--forward');

  let toggleButtonsList = slider.querySelector('.slider__toggle-list');
  let toggleButtons = toggleButtonsList.querySelectorAll('.slider__toggle-button');


  let findActiveSlide = function () {
    let currentStyle = sliderList.style.left;
    let currentStyleNum = +currentStyle.slice(0, currentStyle.length - 1);
    let activeItemNum = Math.abs(currentStyleNum / SLIDE_STEP);

    return activeItemNum
  }

  let removeActiveButtons = function () {
    toggleButtons.forEach(element => {
      if (element.classList.contains('slider__toggle-button--active')) {
        element.classList.remove('slider__toggle-button--active')
      }
    });
  }

  let toggleActiveButton = function () {
    let activeItemNum = findActiveSlide();
    removeActiveButtons();
    toggleButtons[activeItemNum].classList.add('slider__toggle-button--active');
  }

  let applyOpacityArrow = function () {
    let activeItemNum = findActiveSlide();
    let maxSlide = sliderList.querySelectorAll('.slider__item').length - 1;

    if (activeItemNum === 0) {
      prev.style.opacity = 0.3;
    } else {
      prev.style.opacity = 1;
    }

    if (activeItemNum === maxSlide) {
      forward.style.opacity = 0.3;
    } else {
      forward.style.opacity = 1;
    }
  }

  let slide = function (step, sign) {
    let leftValue = sliderList.style.left;
    let leftValueNum = +leftValue.slice(0, leftValue.length - 1)

    if (!sign) {
      sliderList.style.left = -step * SLIDE_STEP + "%";
    }

    if (sign === "+" && leftValueNum < MIN_SLIDE_STYLE) {
      sliderList.style.left = leftValueNum + step + "%";
    }

    if (sign === "-" && leftValueNum > MAX_SLIDE_STYLE) {
      sliderList.style.left = leftValueNum - step + "%";
    }

    applyOpacityArrow();
    toggleActiveButton();
  }

  let changeActiveButtons = function (evt) {
    if (evt.target.tagName === 'BUTTON') {
      removeActiveButtons();
      evt.target.classList.add('slider__toggle-button--active');
    }

    findActiveButton()
  }

  let findActiveButton = function () {
    let activeBtn = 0;

    for (let i = 0; i < toggleButtons.length; i++) {
      if (toggleButtons[i].classList.contains('slider__toggle-button--active')) {
        activeBtn = i
      }
    }

    slide(activeBtn);
  }

  let slidePrev = function () {
    slide(SLIDE_STEP, '+');
  }

  let slideForward = function () {
    slide(SLIDE_STEP, '-');
  }

  let onKeyCheckPage = function (evt) {
    if (evt.key === EvtKeys.LEFT) {
      slidePrev();
    }

    if (evt.key === EvtKeys.RIGHT) {
      slideForward();
    }
  };

  slider.addEventListener('keydown', onKeyCheckPage);
  prev.addEventListener('click', slidePrev);
  forward.addEventListener('click', slideForward);
  toggleButtonsList.addEventListener('click', changeActiveButtons)
})();
