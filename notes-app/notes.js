const fs = require("fs");

const addNotes = (title, body) => {
    const notes = getNotesArray();
    console.log(notes)
  const noteExists = notes.find((note) => note.title === title);
  if (noteExists) {
    console.log(`Note with TItle: ${title} already exits.`);
    return;
  }
  const note = {
    title,
    body,
  };

  notes.push(note);
  saveNotes(notes);
};

const removeNotes = (title) => {
  const notes = getNotesArray();
  const newNotes = notes.filter((note) => note.title != title);
  saveNotes(newNotes);
};

const getNotes = () => {
  const notes = getNotesArray();
  if (notes.length === 0) {
    console.log("You do not have any note in your list");
    return;
  }
  notes.map((note) => console.log(note.title));
};

const getNote = (title) => {
  const notes = getNotesArray();
  const note = notes.find((note) => note.title === title);
  if (!note) {
    console.log(`No note found with title: ${title}`);
  }
  console.log(note.title);
  console.log(note.body);
};

const getNotesArray = () => {
  try {
    const notesBuffer = fs.readFileSync('notes.json') 
    const noteJson = notesBuffer.toString();
    return JSON.parse(noteJson);
  } catch (error) {
    return [];
  }
};

const saveNotes = (notes) => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
};

module.exports = {
  getNotes,
  addNotes,
  removeNotes,
  getNote
};
