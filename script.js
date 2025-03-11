const resultElement = document.querySelector('.results');
const buttons = document.querySelectorAll('.js-button');
const buttonArray = Array.from(buttons);
const enter = document.querySelector('.enter')
const deleteElement = document.querySelector('.deleteElement')


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

