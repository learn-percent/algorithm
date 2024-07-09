/*
But just declaring variables will not do much for us if we cannot change them the way we need it
To do that, we can use some basic operations. Let's test on numbers
*/
let myNumber = 3

// We can use the basic math operators to change our value
let sumResult = myNumber + 2
console.log(`${myNumber} + 2 = ${sumResult}`)

let subtractionResult = myNumber - 1
console.log(`${myNumber} - 1 = ${subtractionResult}`)

let multiplicationResult = myNumber * 4
console.log(`${myNumber} * 4 = ${multiplicationResult}`)

let divisionResult = myNumber / 2
console.log(`${myNumber} / 2 = ${divisionResult}`)

// Because we are used let to declare myNumber, we can also change it's original value
console.log(`Old myNumber: ${myNumber}`)
myNumber = myNumber - 1
console.log(`New myNumber: ${myNumber}`)

//Let's reset myNumber value
myNumber = 3

// We also have some "weird math operators"
// This will make a exponentiation
let exponentiationResult = myNumber ** 3
console.log(`${myNumber} ** 3 = ${exponentiationResult}`)

// And this will give you the remainder of the division
let remainderResult = myNumber % 2
console.log(`${myNumber} ** 2 = ${remainderResult}`)

// REMEMBER: Most of this operations are used only by number types

// But... As we already used, we can use the sum operations in strings as well. This is call concatenation
let string1 = "Hello"
let string2 = "World"
let sentence = string1 + ' ' + string2
console.log(sentence)

// Just to not leave anything behind, in this file, we print the strings in a different form, called Strings Templates in JavaScript
// The way it works, is that you create a string using "`" character to write the string, and you can use ${} to interpolate variable
// inside the string. But we don't need to do that! A simple concatenation will also do the job!