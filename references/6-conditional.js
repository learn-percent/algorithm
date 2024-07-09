// One important thing about programming, is that we need to able to choose when a code will be executed
// depending on certain conditions. This is called Conditional. In most programming languages, the "if" keyword
// is used to execute group code that will be executed in certain conditions.

// To tell "if" if it should execute the code or not, we pass a boolean value to it

if (true) {
	console.log('I will be executed!')
}

if (false) {
	console.log('I will not be executed!')
}

// We can also define a block to be executed in case the condition is not met, using "else"
if (true) {
	console.log('I will be executed!')
} else {
	console.log('I will not be executed!')
}

if (false) {
	console.log('I will not be executed!')
} else {
	console.log('I will be executed!')
}

// Finally, we can add another if, in case the first condition is not met
if (7 < 6) {
	console.log('I will not be executed!')
} else if (5 < 6) { 
	console.log('I will be executed!')
} else {
	console.log('I will not be executed!')
}

// Besides the numbers operations introduced early, we have a bunch of operations that will help us define
// if a block should be executed or not. They are called Comparison Operators

const value = 5

// First of all, we have the "equals" operator, in javascript, "==", which will check if both sides of operatian are equal
if (value == 5) {
	console.log('I will be executed!')
}
if (value == 1) {
	console.log('I will not be executed!')
}

// Then we have the oposite, not equal, in javascript "!=", wich will check if both sides are different
if (value != 5) {
	console.log('I will be not executed!')
}
if (value != 10) {
	console.log('I will be executed!')
}

// Now, we have the greater than and less than operator, which will check, you guess, if a value is greater or less than another
if (value > 2) { // Greater than
	console.log('I will be executed!')
}
if (value > 6) {
	console.log('I will not be executed!')
}
if (value > 5) {
	console.log('I will not be executed!')
}

// And the less than
if (value < 6) { // Less than
	console.log('I will be executed!')
}
if (value < 2) {
	console.log('I will not be executed!')
}
if (value < 5) {
	console.log('I will not be executed!')
}

// Isn't weird that value < 5 will not be executed if value is 5? No worries, we also have the Greater than or equal
// and Less than or equal operators
if (value >= 2) { // Greater than or equal
	console.log('I will be executed!')
}
if (value >= 5) {
	console.log('I will be executed!')
}
if (value >= 6) {
	console.log('I will not be executed!')
}

// And the less than or equal
if (value <= 6) { // Less than or equal
	console.log('I will be executed!')
}
if (value <= 5) {
	console.log('I will be executed!')
}
if (value <= 2) {
	console.log('I will not be executed!')
}

// Besides that, we also have some Logical Operators, that will test two or more conditions
// First, we have the "and" operator, in JavaScript "&&", which will check if all the values are true
if (true && true) {
	console.log('I will be executed!')
}
if (true && false) {
	console.log('I will not be executed!')
}
if (false && true) {
	console.log('I will not be executed!')
}
if (false && false) {
	console.log('I will not be executed!')
}

// We also have the "or" operator, in javascript "||", which will check if any of the values are true
if (true || true) {
	console.log('I will be executed!')
}
if (true || false) {
	console.log('I will be executed!')
}
if (false || true) {
	console.log('I will be executed!')
}
if (false || false) {
	console.log('I will not be executed!')
}

// Finally, we have the "not" operator, in javascript "!", that will flip the value
if (!true) {
	console.log('I will not be executed!')
}
if (!false) {
	console.log('I will be executed!')
}

// Remember that all of this operations can be saved in variables
const isGreaterThan = 5 > 6 // false
console.log(`Is 5 Greater Than 6: ${isGreaterThan}`)

const isLessThan = 5 < 6 // true
console.log(`Is 5 Less Than 6: ${isLessThan}`)

const passCondition = (isGreaterThan) || (isLessThan) // true
console.log(`Is 5 Greater Than 6 OR Is 5 Less Than 6: ${isLessThan}`)