// Because javascript is weird, the "==" and "!=" will check if values are equal or not equal indepedent of type
let isStringEqualNumber = '5' == 5 // true
let isStringDifferentNumber = '5' != 5 // false

// To do a type check as well, we need to use "===" and "!=="
isStringDifferentNumber = '5' === 5 // false
isStringDifferentNumber = '5' !== 5 // true

// Is always good practice to use the typecheck operations ("===", "!==")