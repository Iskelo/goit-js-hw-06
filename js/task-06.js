/* const symbols = document.querySelector('#validation-input');
const symbolLength = symbols.dataset.length;


symbols.addEventListener("blur", (event) => {
	
	if(event.currentTarget.value.length +1 > symbolLength){		
		symbols.classList.add('invalid');
		symbols.classList.remove('valid');
	}else{		
		symbols.classList.add('valid');
		symbols.classList.remove('invalid');
	}
 }); */

 const symbols = document.querySelector('#validation-input');
const symbolLength = symbols.dataset.length;

symbols.addEventListener("blur", (event) => {
  const inputLength = event.currentTarget.value.length;

  if (inputLength === parseInt(symbolLength)) {
    symbols.classList.add('valid');
    symbols.classList.remove('invalid');
  } else {
    symbols.classList.add('invalid');
    symbols.classList.remove('valid');
  }
});
