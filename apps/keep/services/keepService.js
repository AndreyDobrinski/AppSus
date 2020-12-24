import { util } from '../../../services/util.js'

export const keepService = {
    query,
    addNote,
    updNote,
    delNote,
    getNoteById
};


var notes = [
    {
        type: "NoteText",
        // isPinned: true,
        info: {
            txt: "Fullstack Me Baby!" //
        }
    },
    {
        type: "NoteImg",
        info: {
            // url: "http://some-img/me",//
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Felis_silvestris_silvestris.jpg/1200px-Felis_silvestris_silvestris.jpg",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#6494ed"
        }
    },
    {
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", isDone: false, id: util.makeid() },//
                { txt: "Do this", isDone: false, id: util.makeid() }//
            ]
        }
    }
];




function query() {
    return Promise.resolve(notes);
}

function addNote(note) {
    console.log('note in service', note)
    var noteToAdd
    if (note.type === 'NoteText') {
        noteToAdd = { ...note }
        // noteToAdd.info.txt = note.info.txt
        console.log('note in service2', note)
    }
    if (note.type === 'NoteImg') {
        noteToAdd = { ...note }
        noteToAdd.style = {
            backgroundColor: "#6494ed"
        }
        noteToAdd.info.title = 'Enter your title'
    }
    if (note.type === 'NoteTodos') {
        noteToAdd = { ...note }
        noteToAdd.info.label = "How was it:"
        noteToAdd.info.todos.forEach(todo => {
            todo.id = util.makeid()
        })
        console.log('noteToAdd', noteToAdd)
    }
    notes = [noteToAdd, ...notes];
    window.notes = notes//debug
    return Promise.resolve(notes);
}

function delNote(idx) {
    notes.splice(idx, 1)
    window.notes = notes//debug
    return Promise.resolve();
}
function updNote(idx, note) {
    getNoteById(idx)
        .then(res => {
            res = note
        })
    window.notes = notes//debug
    return Promise.resolve(notes[idx]);
}
function getNoteById(id) {
    return Promise.resolve(notes[id]);
}
