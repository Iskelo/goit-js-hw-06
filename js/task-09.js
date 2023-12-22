const widget = document.querySelector('.widget'),
color = document.querySelector('.color'),
changeColor = document.querySelector('.change-color');


changeColor.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();

  widget.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor()
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
