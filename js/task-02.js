const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');



// ingredients.forEach(element => {
//   const el = document.createElement('li');
//   el.textContent = element;
//   el.classList.add('item')
//   list.append(el);
// });

const el = document.createElement('li');
  
// const items = list.map(element =>{  
//   el.textContent = element;
//   el.classList.add('item')
//   list.append(el);
// });

el.classList.add('item')
list.append(el);
console.log(list)