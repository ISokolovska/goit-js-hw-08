const throttle = require('lodash.throttle');
const feedbackForm = document.querySelector('.feedback-form');
const DATA_KEY = 'feedback-form-state';

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', throttle(textInput, 500));

const valueForm = {
  email: '',
  message: '',
};

function textInput(e) {
  valueForm[e.target.name] = e.target.value;
  localStorage.setItem(DATA_KEY, JSON.stringify(valueForm));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(valueForm);
  localStorage.removeItem(DATA_KEY);
  e.currentTarget.reset();
}

function updateOutput() {
  if (localStorage.getItem(DATA_KEY)) {
    const valueForm = JSON.parse(localStorage.getItem(DATA_KEY));
    for (let key in valueForm) {
      feedbackForm.elements[key].value = valueForm[key];
    }
  }
}
updateOutput();
