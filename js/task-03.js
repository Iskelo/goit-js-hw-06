const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('.gallery');

list.style.display = 'flex';
list.style.gap = '10px';
list.style.flexWrap = 'wrap';
list.style.margin = '0';
list.style.padding = '0';
list.style.maxWidth = '100vw';

let items, imgs;


images.forEach(img =>{
  items = document.createElement('li');  
  imgs = document.createElement('img');
  imgs.src = img.url;
  imgs.alt = img.alt;
  items.style.maxWidth = '30%';  
  imgs.style.width = '100%';

  items.insertAdjacentHTML("beforeend",imgs.outerHTML);
  list.insertAdjacentHTML("beforeend",items.outerHTML);
})

console.log(items)
