const inputElement = document.querySelector('input[type="number"]');
const destroy = document.querySelector('button[data-destroy]')
const create = document.querySelector('button[data-create]')
const box = document.querySelector('#boxes');

create.addEventListener('click', onCreate);
destroy.addEventListener('click', onDestroy)

let size = 30;
let marcup ='';
let carrentColor = '';

function onCreate() {
  createBoxes(inputElement.value)
}

function onDestroy() {
  marcup ='';  
  box.innerHTML = marcup;
  size = 30;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i+=1) {
    carrentColor = getRandomHexColor();
    marcup += `<div style="width: ${size}px; height: ${size}px; background-color:${carrentColor};"></div>`;
    box.innerHTML = marcup;
    size += 10;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}