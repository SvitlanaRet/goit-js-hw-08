
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

let formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form  input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateForm() 

function onFormSubmit(event) {
    event.preventDefault();

    const { email, message } = event.currentTarget.elements;
      console.log({ email: email.value.trim(), message: message.value.trim() });
    
      if (localStorage.getItem(LOCALSTORAGE_KEY)) {
        localStorage.removeItem(LOCALSTORAGE_KEY);
      }

    event.currentTarget.reset();
}

function onFormInput(event) {
    formData = {
            email: refs.input.value.trim(),
            message: refs.textarea.value.trim(),
          };
         
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
    let data = localStorage.getItem(LOCALSTORAGE_KEY);
   
    if (data) {
  formData = JSON.parse(data);
  refs.input.value = formData.email ?? '';
  refs.textarea.value = formData.message ?? '';
 }
}
