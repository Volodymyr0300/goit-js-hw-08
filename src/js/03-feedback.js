import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';
const localStorageDataOfForm = {};

formEl.addEventListener('input', throttle(writingForLocalStorage, 500));
formEl.addEventListener('submit', btnSubmitClick);

reloadPageClicking();

function writingForLocalStorage(e) {
  localStorageDataOfForm[e.target.name] = e.target.value;
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify(localStorageDataOfForm)
  );
}

function btnSubmitClick(e) {
  if (formEl.email.value === '' || formEl.message.value === '') {
    return alert('All form fields must be filled out!');
  }
  e.preventDefault();
  formEl.reset();
  console.log(localStorageDataOfForm);
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

function reloadPageClicking() {
  const savingParametrsOfForm = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEY)
  );
  if (savingParametrsOfForm) {
    formEl.email.value = savingParametrsOfForm.email || '';
    formEl.message.value = savingParametrsOfForm.message || '';
  }
}
