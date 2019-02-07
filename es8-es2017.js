/**
 * ES8 (ES2017)
 */

/** String Padding */
const word = 'Another'
word.padStart(11, 'just')

const anotherWord = 'just'
anotherWord.padEnd(11, 'Another')

/** Object Values */
const person = {
	name: 'Person',
	age: 50
}
Object.values(person)

const people = ['another', 'person']
Object.values(people)

/** Object Entries */
Object.entries(person)
Object.entries(people)

/** Object Get Own Property Descriptors */
Object.getOwnPropertyDescriptors(person)

/** Trailing Commas */
const anotherFunction = (parameter, anotherParameter,) => {}
anotherFunction(true, false,)

/** Async */
const doSomething() {
	return new Promise((resolve) => {
		setTimeout(() => resolve(), 1000)
	})
}

async function doAnother() {
	await doSomethingAsync()
}