// @ts-nocheck
const fs = require('fs');
const validator  = require('validator')
const { getNotes } = require('./notes')
//fs.writeFileSync('jassi.txt', 'lal la al lala laa');
//fs.appendFileSync('note.pdf', 'I am starting backend development!')

// @ts-ignore
console.log(getNotes());

// @ts-ignore
console.log(validator.isEmail('jasbir212singh@gmail.com')) // true
console.log(validator.isEmail('jir212singh.com')) // false
