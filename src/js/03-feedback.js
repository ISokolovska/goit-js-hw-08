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

function onFormSubmit() {
  e.preventDefault();

  const valueForm = {
    email: feedbackForm.elements.email.value,
    message: feedbackForm.elements.message.value,
  };

  console.log(valueForm);
  document.feedbackForm.reset();
  localStorage.removeItem(DATA_KEY);
}

//  if (
//    feedbackForm.elements.email.value === '' &&
//    feedbackForm.elements.message.value === ''
//  ) {
//    alert('Заповніть поля: email та message');
//    return;
//  }

// function createObjData(value = '') {
//   return {
//     id: Date.now(),
//     value,
//     checked: false,
//   };
// }
// const getData = data => {
//   try {
//     localStorage.setItem(DATA_KEY, JSON.stringify(data));
//   } catch (error) {
//     console.log('Error!');
//   }
// };

// const addData = data => {
//   try {
//     let result = [];
//     const dataJSON = getData();
//     if (dataJSON) {
//       result = JSON.parse(dataJSON);
//     }
//     result.push(data);
//     localStorage.setItem(DATA_KEY, JSON.stringify(result));
//   } catch (error) {
//     console.log('Error!');
//   }
// };

//   const keys = [];
//   for (let i = 0; i < localStorage.length; i++) {
//     keys.push(localStorage.getItem(localStorage.key(i)));
//   }

//
