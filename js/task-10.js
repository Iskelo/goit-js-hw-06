const inputElement = document.querySelector('input[type="number"]');
const destroy = document.querySelector('button[data-destroy]')
const create = document.querySelector('button[data-create]')

const box = document.querySelector('#boxes');

console.dir(inputElement.value)


create.addEventListener('click', onCreate);

function onCreate(event) {
  console.dir(inputElement.value)
}

function createBoxes(amount) {
  
}




// destroy.addEventListener('click', onDestroy);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


/* const markup = images.map(({url, alt})=>
`<li>
  <img src="${url}" alt="${alt}" class="imgs">
</li>`
).join('');

list.insertAdjacentHTML("beforeend", markup); */