const input = document.querySelector('#font-size-control');
const output = document.querySelector('#text');


output.style.fontSize = `${input.value}px`;

input.addEventListener('input',()=>{
	output.style.fontSize = `${input.value}px`;
})
