import { NoteText } from './NoteText.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'


export function DynamicKeepCmp({ note, onUpdateNote }) {
    switch (note.type) {
        case 'NoteText':
            return <NoteText note={note} onUpdateNote = {onUpdateNote}/>
        case 'NoteImg':
            return <NoteImg note={note} onUpdateNote = {onUpdateNote}/>
        case 'NoteTodos':
            return <NoteTodos note={note} onUpdateNote = {onUpdateNote}/>
    }
    return <p>UNKNWON</p>
}