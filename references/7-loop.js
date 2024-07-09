// It's really important in programming that we can run the same code repeatedly, based on a condition, or in N numbers of time
// This is call Loop, and can be achived a lot of ways

// Let's start with the "for" keyword. This will execute a code a specific numbers of time
for (let i = 0; i < 5; i++) {
	console.log('I showed ' + (i + 1) + ' times!')
}

// It's syntax is kinda weird, so let's break down.
// We divide inside the parentheses in three groups by a ";"
// The first one, "let i = 0", declares a variable and a initial value;
// The second one, defines a condition that should be for the code to execute;
// The third one, defines the changes that will be made to the variable at the end of every loop.
// So thins function will run 5 times

// We also have while statement, that will repeat the code while to condition is true

let index = 0
while (index < 5) {
	console.log('I showed ' + (index + 1) + ' times!')
	index++
}
// Notice that is the same output of the for statement

// There's a variant of while statement, called do while, that will execute the code even if the condition is not met
// in begning
index = 6
do {
	console.log('I will only show one time!')
	index++
} while (index < 5)

// We can also stop a loop, even if the conditional is still met using the "break" statement
for(let i = 0; i < 100; i++) {
	console.log('I showed ' + (i + 1) + ' times!')
	if(i + 1 === 5) {
		break
	}
}

// And if we want to skip a loop, we can skip using "continue" statement
for(let i = 0; i < 5; i++) {
	if(i + 1 === 3) {
		continue
	}
	console.log('I showed ' + (i + 1) + ' times!')
}
// In this case, "I showed 3 times!" will not be showed