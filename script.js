const inputEl = document.querySelector('.container input');
const formEl = document.querySelector('.container form');
const btnEl = document.querySelector('.btn');
const textEl = document.querySelector('.text-sumbit');
const validEl = document.querySelector('.valid');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  if (inputEl.value === '') {
    textEl.textContent = '';
    validEl.classList.remove('active');
    setTimeout(() => {
      validEl.classList.add('active');
      setTimeout(() => {
        textEl.textContent = 'do this project!';
      }, 0);
    }, 2000);
  } else {
    textEl.textContent = inputEl.value;
    inputEl.value = '';
  }
});
