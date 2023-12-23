const symbols = document.querySelector('#validation-input');
const symbolLength = symbols.dataset.length;

symbols.addEventListener("blur", (event) => {
	const inputLength = event.currentTarget.value.length;
	if(inputLength >= Number(symbolLength)){		
		symbols.classList.add('invalid');
		symbols.classList.remove('valid');
	}else{		
		symbols.classList.add('valid');
		symbols.classList.remove('invalid');
	}
 });
