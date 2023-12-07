const symbols = document.querySelector('#validation-input');
const symbolLength = symbols.dataset.length;

console.log(symbolLength)

symbols.addEventListener("blur", (event) => {
	if(event.currentTarget.value.length +1 > symbolLength){		
		symbols.classList.toggle('invalid');
		symbols.classList.remove('valid');
	}else{		
		symbols.classList.remove('invalid');
		symbols.classList.toggle('valid');
	}
	console.log(symbols);
 });

 