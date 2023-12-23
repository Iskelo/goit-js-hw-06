const widget = document.querySelector('.widget'),
body = document.querySelector('body'),
color = document.querySelector('.color'),
changeColor = document.querySelector('.change-color');


changeColor.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  const carrentColor = getRandomHexColor()
  body.style.backgroundColor = carrentColor;
  color.textContent = carrentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
