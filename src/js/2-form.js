const feedbackFormEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
const localStorageKey = 'feedback-form-state';

feedbackFormEl.addEventListener('input', handleInput);

function handleInput() {
  const storedObj = {
    email: feedbackFormEl.elements.email.value.trim(),
    textarea: feedbackFormEl.elements.message.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(storedObj));
}

window.addEventListener('DOMContentLoaded', () => {
  const storedData = localStorage.getItem(localStorageKey);
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    inputEl.value = parsedData.email;
    textareaEl.value = parsedData.textarea;
  } else {
    inputEl.value = '';
    textareaEl.value = '';
  }
});

feedbackFormEl.addEventListener('submit', handleSubmit);

function handleSubmit() {
  event.preventDefault();
  if (inputEl.value !== '' && textareaEl.value !== '') {
    console.log(JSON.parse(localStorage.getItem(localStorageKey)));
  }
  localStorage.removeItem(localStorageKey);
  feedbackFormEl.reset();
}
