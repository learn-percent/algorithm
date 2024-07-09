import PromptSync from "prompt-sync"
const prompt = PromptSync()

const sum = (value1, value2) => {
	return value1 + value2
}
const subtract = (value1, value2) => {
	return value1 - value2
}
const multiplication = (value1, value2) => {
	return value1 * value2
}
const division = (value1, value2) => {
	return value1 / value2
}

let isLeaving = false
const leave = (input) => {
	if (input === 'q') {
		isLeaving = true
		return true
	}
	return false
}

while(!isLeaving) {
	let input = prompt('First Number: ')
	if(leave(input)) {
		continue
	}
	if(isNaN(input)) {
		console.log('invalid type, try again')
		continue
	}
	let value1 = Number(input)
	
	input = prompt('Second Number: ')
	if(leave(input)) {
		continue
	}
	if(isNaN(input)) {
		console.log('invalid type, try again')
		continue
	}
	let value2 = Number(input)

	let result
	input = prompt('Operation: ')
	if(leave(input)) {
		continue
	}
	if(input === '+')  {
		result = sum(value1, value2)
	} else if (input === '-') {
		result = subtract(value1, value2)
	} else if (input === '*') {
		result = multiplication(value1, value2)
	} else if (input === '/') {
		result = division(value1, value2)
	} else {
		console.log('invalid type, try again')
		continue
	}
	console.log(`${value1} ${operation} ${value2} = ${result}`)
}