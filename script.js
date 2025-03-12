const resultElement = document.querySelector('.results');
const buttons = document.querySelectorAll('.js-button');
const buttonArray = Array.from(buttons);
const enter = document.querySelector('.enter')
const deleteElement = document.querySelector('.deleteElement')
const eraser = document.querySelector('.eraser');
const multiply = document.querySelector('.js-multiply')
const divide = document.querySelector('.js-divide')

buttonArray.forEach((button) => {
	button.addEventListener('click', () => {
		console.log(`clicking Successful by ${button.innerHTML}`)
		resultElement.innerHTML += button.innerHTML
	})
})

enter.addEventListener('click', () => {
	resultElement.innerHTML = eval(resultElement.innerHTML).toFixed(3)
})

deleteElement.addEventListener('click', () => {
	resultElement.innerHTML = '';
})

eraser.addEventListener('click', () => {
	let length = resultElement.innerHTML.length;
	resultElement.innerHTML = resultElement.innerHTML.slice(0, -1);

})

multiply.addEventListener('click', () => {
	resultElement.innerHTML += '*'
})

divide.addEventListener('click', () => {
	resultElement.innerHTML += '/'
})


