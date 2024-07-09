// A variable is way to link a specific value with a name, that will be read by the program

// In JavaScript, we can use keyword "let" to declare a variable
let letVariable = "Hello"

// We can also use keyword "const"
const constVariable = "World"

// The difference is, when we declare a variable using let, we can change it when we need
console.log('Old letVariable Value: ' + letVariable)
letVariable = "Hey"
console.log('New letVariable Value: ' + letVariable)
// Notice that we don't use the "let" keyword to change it, we just use the <variableName> equals <value>


// But when we use const, we cannot change it after declaration
constVariable = "People!" // This will crash the program

/* In general programing, variables also have types.
Types can be if it's a number, if this number is real, if it's a text, if it's a boolean.
*/

// Numbers, which can be a intenger or real
let integerValue = 1
let realValue = 2.5

// In javascript, we have String, which is a lot of chacarters together (texts)
let stringVariable = "Hello World!"

// Booleans, which is a binary value of "true" or "false"
let booleanValue = true

// We also have undefied and null values, but we don't need to focus on that right now
let nullValue = null
let undefiendValue = undefined

// Last thing, we can see the type of a variable using the keywork "typeof"

console.log("typeof integerValue: " + typeof integerValue)
console.log("typeof realValue: " + typeof realValue)