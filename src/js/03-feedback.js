import throttle from 'lodash.throttle';

const loginForm = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const textareaInput = document.querySelector('textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';
let myForm = {};

const onSubmitForm = event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  if (!email.value.trim() || !message.value.trim()) {
    alert('Заповніть всі поля!');
    return;
  }
  myForm = {
    email: email.value,
    message: message.value,
  };
  // console.log(email.value, message.value);
  console.log(myForm);
  event.currentTarget.reset();
  removeStorItem();
};

loginForm.addEventListener('submit', onSubmitForm);
loginForm.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
  myForm[event.target.name] = event.target.value;
  const messageForm = JSON.stringify(myForm);
  localStorage.setItem(LOCALSTORAGE_KEY, messageForm);
  //   console.log(`Input Name = `, event.target.name);
  //   console.log(`Input message =`, messageForm);
  //   console.log(`MyForm =`, myForm);
  //   console.log(`My JSON =`, messageForm);
}
recoveryData();
function recoveryData() {
  if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    myForm = {
      email: data.email,
      message: data.message,
    };
    inputEmail.value = data.email || '';
    textareaInput.value = data.message || '';
    // console.log(`MyRecoveryForm =`, myForm);
    // console.log(`Recovered JSON.parse = `, data);
  }
}
function removeStorItem() {
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
