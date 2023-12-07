/*
 Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.

 Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.

 Оновлюй інтерфейс новим значенням змінної counterValue. */

const desccrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value')

let counterValue = 0;

desccrement.addEventListener('click',()=>{
	counterValue -= 1;
	value.innerHTML = counterValue;
	console.log(counterValue)
})

increment.addEventListener('click',()=>{
	counterValue += 1;
	value.innerHTML = counterValue;
	console.log(counterValue)
})

