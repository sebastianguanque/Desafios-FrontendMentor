import {
  checkDay,
  checkMonth,
  checkYear,
  isValidDate,
  getTimeDifference,
  capitalizeFirsCharacter,
} from './utils.js';

import { validateBirthday } from './classes.js';

// DOM
const formButton = document.querySelector('.separator__button');
const resultsValid = document.querySelector('.results__valid')
const resultsInvalid = document.querySelector('.results__invalid')
const dateDOMelements = {
  day: {
    root: document.getElementById('input-day'),
    get input() {
      return this.root.querySelector('input');
    },
    get message() {
      return this.root.querySelector('.input-form__box__error-message');
    },
    get result() {
      return document.getElementById('result-days');
    },
  },
  month: {
    root: document.getElementById('input-month'),
    get input() {
      return this.root.querySelector('input');
    },
    get message() {
      return this.root.querySelector('.input-form__box__error-message');
    },
    get result() {
      return document.getElementById('result-months');
    },
  },
  year: {
    root: document.getElementById('input-year'),
    get input() {
      return this.root.querySelector('input');
    },
    get message() {
      return this.root.querySelector('.input-form__box__error-message');
    },
    get result() {
      return document.getElementById('result-years');
    },
  },
};

// Instantiate the class
const validate = new validateBirthday(
  checkDay,
  checkMonth,
  checkYear,
  isValidDate,
  getTimeDifference
);

// Listen to user entries
Object.entries(dateDOMelements).forEach(([datePart, elements]) => {
  elements.input.addEventListener('blur', () => {
    validate.setDatePart(datePart, elements.input.value);

    const isValid = validate.isValidPart(datePart);

    if (!isValid) {
      elements.root.classList.add('input-form__box--error');
      elements.message.textContent = `${capitalizeFirsCharacter(
        datePart
      )} is invalid`;
    } else {
      elements.root.classList.remove('input-form__box--error');
    }

    
  });
});

// Listen to form submission
formButton.addEventListener('click', () => {
  const { day, month, year } = dateDOMelements;
  if (validate.isValidDate) {
    const { daysPassed, monthsPassed, yearsPassed } = validate.timeDifference;
    day.result.textContent = daysPassed;
    month.result.textContent = monthsPassed;
    year.result.textContent = yearsPassed;
    resultsInvalid.style.display = 'none'
    resultsValid.style.display = 'block'
  } else {
    resultsValid.style.display = 'none'
    resultsInvalid.style.display = 'block'
  }
});