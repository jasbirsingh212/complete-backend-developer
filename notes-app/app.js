// const fs = require('fs');
// fs.writeFileSync("notes.txt", "I love Javascript.");
// fs.appendFileSync("notes.txt", " Learning Node for backend development.");

// const { getNotes } = require('./notes');
// getNotes()

// const validator = require("validator");
// console.log(validator.isEmail("jasbir212singh@gmail.com"));
// console.log(validator.isEmail("jasbir212.com"));
// console.log(validator.isURL("jasbir.com"));
// console.log(validator.isURL("jasbir212singh@gmail"));


// const chalk = require("chalk");
// console.log(chalk.bold.inverse.green('Success'));

const { addNotes, getNote, removeNotes, getNotes } = require('./notes')
const yargs = require('yargs');

yargs
  .command({
    command: "add",
    description: "add a new note",
    builder: {
      title: {
        description: "Note title",
        demandOption: true,
        type: "string",
      },

      body: {
        description: "Note Body",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      addNotes(argv.title, argv.body)
    },
  })
  .parse();

yargs
  .command({
    command: "remove",
    description: "Remove a note",
    builder: {
      title: {
        description: "Note title",
        demandOption: true,
        type: "string",
      }
    },
    handler: (argv) => {
      removeNotes(argv.title)
    },
  })
    .parse();
yargs
  .command({
    command: "list",
    description: "list all notes",
    handler: (argv) => {
      getNotes()
    },
  })
    .parse();
  
yargs
  .command({
    command: "read",
    description: "read a note",
    builder: {
      title: {
        description: "Note title",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      getNote(argv.title)
    },
  })
  .parse();
