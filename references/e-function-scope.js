// Juuust to be sure, we need to explain a little of scope
// In simple terms, scopes says what exists or doesn't exists in a program
// Let's see a exemple

const declareLocalExemple = () => {
	let localValue = 1
	console.log('LocalValue inside Scope: ' + localValue)
}

declareLocalExemple()
console.log('LocalValue outside Scope: ' + localValue) // spoiler! This will crash because localValue is not defined

// in this exemple, we declare a "localValue" variable inside "declareLocalExemple" scope.
// Because this variable only exists inside "declareLocalExemple", it will not exists outside of it.
// Let's see a different case

let globalValue = 1

const updateGlobalValue = () => {
	console.log('global value before update (inside scope): ' + globalValue) // 1
	globalValue = 2
	console.log('global value after update (inside scope): ' + globalValue) // 2
}

console.log('global value before update (ouside scope): ' + globalValue) // 1
updateGlobalValue()
console.log('global value after update (outside scope): ' + globalValue) // 2

// As we can see, our output is the same before and after we update the value, independent if we printed the value inside
// or outside the scope. That's because our value is declared on the "global" scope, toghether with our function 