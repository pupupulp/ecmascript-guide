/**
 * ES9 (ES2018)
 */

/** Rest or Spread Properties */
const { first, second, ...others } = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }
const items = { first, second, ...others }

/** Asynchronous Iteration */
for await (const line of readLines(filePath)) {}

/** Promise Prototype Finally */
fetch('file.json')
	.then(data => data.json())
	.catch(error => console.error(error))
	.finally(() => console.log('finished'))

/** Regular Expression Improvements */
/Roger(?= Waters)/.test('Roger is my dog') // false
/Roger(?= Waters)/.test('Roger is my dog and Roger Waters is a famous musician') // true
/Roger(?! Waters)/.test('Roger is my dog') // true
/Roger(?! Waters)/.test('Roger Waters is a famous musician') // false

/(?<=Roger) Waters/.test('Pink Waters is my dog') // false
/(?<=Roger) Waters/.test('Roger is my dog and Roger Waters is a famous musician') // true
/(?<!Roger) Waters/.test('Pink Waters is my dog') // true
/(?<!Roger) Waters/.test('Roger is my dog and Roger Waters is a famous musician') // false

/** Unicode Property Escapes \p{...} and \P{...} */
/^\p{ASCII}+$/u.test('abc') // true
/^\p{ASCII}+$/u.test('ABC@') // true
/^\p{ASCII}+$/u.test('ABC🙃') // false

/^\p{ASCII_Hex_Digit}+$/u.test('0123456789ABCDEF') // true
/^\p{ASCII_Hex_Digit}+$/u.test('h') // false

/^\p{Lowercase}$/u.test('h') // true
/^\p{Uppercase}$/u.test('H') // true

/^\p{Emoji}+$/u.test('H') // false
/^\p{Emoji}+$/u.test('🙃🙃') // true

/^\p{Script=Greek}+$/u.test('ελληνικά') // true
/^\p{Script=Latin}+$/u.test('hey') // true

/** Named Capturing Groups */
const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
const result = re.exec('2015-01-02')

/** s Flag for Regular Expressions */
/hi.welcome/.test('hi\nwelcome') // false
/hi.welcome/s.test('hi\nwelcome') // true

