// @ts-nocheck
//const fs = require('fs');
//const validator  = require('validator');
//import  chalk  from 'chalk';
//const chalk = require('chalk')
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
//const { getNotes } = require('./notes')
//fs.writeFileSync('jassi.txt', 'lal la al lala laa');
//fs.appendFileSync('note.pdf', 'I am starting backend development!')

// @ts-ignore
//console.log(getNotes());

// @ts-ignore
//console.log(validator.isEmail('jasbir212singh@gmail.com')) // true
//console.log(validator.isEmail('jir212singh.com')) // false


//console.log(chalk.red('Error!'))

//console.log(yargs(hideBin(process.argv)).argv)

// Working Example  =>

//add
yargs(hideBin(process.argv)).command({
    command:'add',
    describe:'Adding command',
    handler:function(){
        console.log('Adding notes')
    }
}).parse()


//remove
yargs(hideBin(process.argv)).command({
    command:'remove',
    describe:'remove command',
    handler:function(){
        console.log('removing notes')
    }
}).parse()


// read
yargs(hideBin(process.argv)).command({
    command:'read',
    describe:'Read command',
    handler:function(){
        console.log('Reading notes')
    }
}).parse()


//list

yargs(hideBin(process.argv)).command({
    command:'list',
    describe:'Listing command',
    handler:function(){
        console.log('Listing notes')
    }
}).parse()