const buttonEl = document.querySelector('button');
const listEl = document.querySelector('ul');
const inputEl = document.querySelector('input');

buttonEl.addEventListener('click', () => {
    const enteredVal = inputEl.value;
    inputEl.value = '';
    const listItemEl = document.createElement('li');
    listItemEl.textContent = enteredVal;
    listEl.appendChild(listItemEl);
});