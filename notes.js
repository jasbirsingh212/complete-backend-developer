const fs = require('fs');
const chalk = require('chalk')

const getAllNotes = () => {
    try {

        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
        
    } catch (error) {
        return {}
    }
}


const existsOrNot =( notes, title ) => {

    return notes && notes[title] ? true: false

}

const successMsg = ( msg ) => console.log(chalk.white.bgGreen(msg))

const errorMsg = ( msg ) => console.log(chalk.white.bgRed(msg));


const saveNotes = (notes) => {

    const dataToStore = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataToStore)
    
} 

const addNote = ( title, body ) => {

    const notes = getAllNotes();
    const exists = existsOrNot(notes, title);

    if(exists){
        errorMsg(`Note aleary exists with title: ${title}`);
        return 
    }

    notes[title] = {
        title, 
        body
    }

    saveNotes(notes);

    successMsg('Note added Successfully')
    successMsg('Notes saved SuccessFully')

}

const readNote = ( title) => {
    const notes = getAllNotes();
    const exists = existsOrNot(notes, title);

    if(!exists) {
        errorMsg('Note you want to read does not exits');
        return 
    }

    successMsg('Your Note')

    const note = notes[title]
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)


}

const removeNote = ( title ) => {
    const notes = getAllNotes();
    const exists = existsOrNot(notes, title);

    if(!exists){
        errorMsg('Note you want to remove does not exits')
        return 
    }

    delete notes[title];
    saveNotes(notes);
    successMsg('Note removed SuccessFully')
    successMsg('Notes saved SuccessFully')
}

const listNotes = () => {

    const notes = getAllNotes();

    successMsg('Your Notes list');
    for(const title in notes){
        
        if(notes.hasOwnProperty(title)){
            console.log(title)
        }

    }

}

module.exports={
    addNote,
    readNote,
    removeNote,
    listNotes,
}

