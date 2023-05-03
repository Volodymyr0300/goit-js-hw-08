import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';
const localStorageDataOfForm = {};

formEl.addEventListener('input', throttle(writingForLocalStorage, 500));
formEl.addEventListener('submit', btnSubmitClick);

reloadPageClicking();

function writingForLocalStorage(e) {
  const currentData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
  currentData[e.target.name] = e.target.value;
  localStorageDataOfForm[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentData));
}

function btnSubmitClick(e) {
  if (formEl.email.value === '' || formEl.message.value === '') {
    return alert('All form fields must be filled out!');
  }
  e.preventDefault();
  console.log(localStorageDataOfForm);
  formEl.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

function reloadPageClicking() {
  const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (savedData) {
    formEl.email.value = savedData.email || '';
    formEl.message.value = savedData.message || '';
    localStorageDataOfForm.email = savedData.email || '';
    localStorageDataOfForm.message = savedData.message || '';
  } else {
    formEl.email.value = '';
    formEl.message.value = '';
  }
}
