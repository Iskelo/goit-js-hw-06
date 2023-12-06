// 1

const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);


// 2

items.forEach(elem=>{
	console.log(`Category: ${elem.children[0].textContent}`);
	console.log(`Elements: ${elem.children[1].children.length}`)
})
