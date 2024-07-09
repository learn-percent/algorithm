// So, sadly, Node does not provide a good way to get user inputs from terminal.
// There's the readline module, but it envolves some concepts that I don't think will help this guide
// So we are using a module called prompt-sync.

// As said on document 3 "nodejs and npm", we can use NPM to find easy solutions to problems
// that other programmers already had
// to use them, we need to install using npm i <module> and import them to our project
import promptSync from 'prompt-sync'

// There's more to say about that, but that a later topic!
// Now that we have prompt imported we can use to ask stuff to our user!

// prompt-sync module need to me "Initiated" for use to use it
const prompt = promptSync()

// Now, we can ask our user stuff!

const name = prompt('What is your name? ')
console.log(`You're name is: ${name}`)