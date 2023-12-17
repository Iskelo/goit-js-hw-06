const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');


[...ingredients].forEach(element => {
  const el = document.createElement('li');
  el.textContent = element;
  el.classList.add('item')
  list.append(el);  
});
