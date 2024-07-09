// Functions are the most important thing on programing.
// They are blocks of code that will execute a simple task, and return a value.
// Functions can recieve arguments, that are variables that will exists inside a function scope.

// There are two types of funciton in JavaScript. We have the Regular Function
function sayHiRegular() {
	console.log('Hi Regular!')
}

// And there is Arrow Function
const sayHiArrow = () => {
	console.log('Hi Arrow =>!')
}

// The difference between them are really complicated, but as a modern standard, we will use Arrow Functions

// To execute a function, or as we say, call a function, we just need to write it's, and next a "()". It will work the same
// for Regular and Arrow Functions

sayHiRegular()
sayHiArrow()

// As said, functions are capable of receiving arguments, to be used inside of it
const printSum = (value1, value2) => {
	const sum = value1 + value2
	console.log(`${value1} + ${value2} = ${sum}`)
}
// To pass the values of the arguments, just add them inside the "()"
printSum(1, 2)

// Rembember, you can also pass variables!
const someValue = 3
printSum(someValue, 4)

// Last, and the most important, function can also return a value that can be stored in a variable.
// To do that, just use the "return" keyword
const sum = (value1, value2) => {
	const sum = value1 + value2
	return sum
}
const result = sum(1, 2)
console.log(`Result value of sum giving 1 and 2: ${result}`)

// Notice that arrow functions are declared as variables, so we can change them if we declare using the "let" keyword
let saySomething = () => {
	console.log('Something')
}

saySomething()

saySomething = () => {
	console.log('Something Else!')
}

saySomething()