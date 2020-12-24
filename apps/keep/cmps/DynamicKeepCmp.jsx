import { NoteText } from './NoteText.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'


export function DynamicKeepCmp({ note, onUpdateNote, onDeleteNote }) {
    switch (note.type) {
        case 'NoteText':
            return <NoteText note={note} onUpdateNote={onUpdateNote} onDeleteNote={onDeleteNote} />
        case 'NoteImg':
            return <NoteImg note={note} onUpdateNote={onUpdateNote} onDeleteNote={onDeleteNote} />
        case 'NoteTodos':
            return <NoteTodos note={note} onUpdateNote={onUpdateNote} onDeleteNote={onDeleteNote} />
    }
    return <p>UNKNWON</p>
}