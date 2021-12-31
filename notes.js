const getNotes = () => 'your notes';

const addNote = ( title, body ) => {

    console.log(title, body)

}

const readNote = ( title) => {
    console.log(title)
}

const removeNote = ( title ) => {
    console.log(title)

}

const listNotes = () => {
console.log('listing notes')

}

module.exports={
    getNotes,
    addNote,
    readNote,
    removeNote,
    listNotes,
}

