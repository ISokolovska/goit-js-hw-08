const throttle = require('lodash.throttle');
const feedbackForm = document.querySelector('.feedback-form');
const DATA_KEY = 'feedback-form-state';

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', throttle(textInput, 500));

function textInput() {
  const valueForm = {
    email: feedbackForm.elements.email.value,
    message: feedbackForm.elements.message.value,
  };
  localStorage.setItem(DATA_KEY, JSON.stringify(valueForm));
}

function onFormSubmit(e) {
  e.preventDefault();
  const valueForm = {
    email: feedbackForm.elements.email.value,
    message: feedbackForm.elements.message.value,
  };
  console.log(valueForm);
  localStorage.removeItem(DATA_KEY);
  feedbackForm.reset();
}

function updateOutput() {
  if (localStorage.getItem(DATA_KEY)) {
    const valueForm = JSON.parse(localStorage.getItem(DATA_KEY));
    feedbackForm.elements.email.value = valueForm.email;
    feedbackForm.elements.message.value = valueForm.message;
  }
}
updateOutput();
