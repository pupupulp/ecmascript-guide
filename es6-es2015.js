/**
 * ES6 (ES2015)
 */

/** Arrow Functions */
const foo = function foo() {}
const foo = () => {}
const foo = () => bar()

/** Promises */
setTimeout(function() {
	setTimeout(function() {}, 100)
}, 1000)

const wait = () => new Promise((resolve, reject) => {
	setTimeout(resolve, 1000)
})

wait()
	.then(() => {
		return wait()
	})
	.then(() => {

	})

/** let and const Variables */
let sampleVariable
const anotherVariable

/** Classes */
class SampleClass {
	constructor() {}
}

class AnotherClass extends SampleClass{
	constructor() {
		super()
	}
}

/** Getter and Setter */
class Sample {
	get sample() { return this.sample }
	set sample(test) { this.sample = test }
}

/** Modules */
import SampleClass from 'modulename'
import AnotherClass as AnotherAlias from 'anothermodule'

export class JustAnotherClass {}
export function justAnotherFunction()

/** Template Literals */
const word = 'wrong'
const stringLiteral = `something ${word}`
const multiLine = `
	hey
	there
`
/** Default Parameters */
const foo = function(isDefault = true) {}

/** Spread Operator */
const arrayForSpread = [0, 1, 2, 3]
const anArray = [...arrayForSpread, 4, 5, 6]

const anObject = { ...objectForSpread }

const word = 'hehe'
const wordArray = [...word] // ['h', 'e', 'h', 'e']

const parameterValues = [true, false]
const anotherFunction = (isDefault, notDefault) => {}
anotherFunction(...parameterValues)

/** Destructuring Assignments */
const person = {
	name: 'Person',
	age: 50
}

const { name, age } = person

/** Object Literals */
const property = 'name'
const person = {
	property: property
}

const anotherPerson = {
	property
}

/** Object Prototype */
const person = { name: 'Person' }
const listOfPerson = {
	__proto__: person
}

/** Object Super */
const person { person: () => {} }
const listOfPerson = {
	__proto__: person,
	person() { super.person() }
}

/** Object Dynamic Properties */
const anotherObject = {
	['just' + 'Another' + 'Property']: true
}
anotherObject.justAnotherProperty

/** For-of Loop */
for (const value of [0, 1, 2, 3]) {}
for (const [index, value] of [0, 1, 2, 3].entries()) {}

/** Map */
const anotherMap = new Map()
anotherMap.set('color', 'blue')
anotherMap.get('color')
anotherMap.delete('color')
anotherMap.clear()
anotherMap.has('color')
anotherMap.size

const justAnotherMap = new Map([
		['color', 'blue']
	])

for (const key of justAnotherMap.keys()) {}
for (const value of justAnotherMap.values()) {}
for (const [key, value] of justAnotherMap.entries()) {}
for (const [key, value] of justAnotherMap) {}

const arrayOfMapKeys = [...justAnotherMap.keys()]
const arrayOfMapValues = [...justAnotherMap.values()]

/** Set */
const anotherSet = new Set()
anotherSet.add('another')
anotherSet.add('set')
anotherSet.has('another')
anotherSet.delete('set')
anotherSet.clear()
anotherSet.size

for (const key of anotherSet.keys()) {}
for (const key of anotherSet.values()) {}
for (const key of anotherSet) {}

const cursor = anotherSet.entries()
cursor.next()

anotherSet.forEach(value => {})

const justAnotherSet = new Set(['just', 'another', 'set'])

const arrayOfSetKeys = [...justAnotherSet.keys()]
const arrayOfSetKeys = [...justAnotherSet.values()]

/** String Methods */
const word = 'HA'
word.repeat(10)
word.codePointAt(0)

/** Object Methods */
const justAnotherObject = {}
justAnotherObject.is()
justAnotherObject.assign() 
justAnotherObject.setPrototypeOf()