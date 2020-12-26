import { NoteText } from './NoteText.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteVideo } from './NoteVideo.jsx'
import { NoteTodos } from './NoteTodos.jsx'


export function DynamicKeepCmp({ note, onUpdateNote, onDeleteNote, onPinNote }) {
    console.log('in DynamicKeepCmp', note)
    switch (note.type) {
        case 'NoteText':
            console.log('inside NoteText')
            return <NoteText note={note} onUpdateNote={onUpdateNote} onDeleteNote={onDeleteNote} onPinNote={onPinNote} />
        case 'NoteImg':
            return <NoteImg note={note} onUpdateNote={onUpdateNote} onDeleteNote={onDeleteNote} onPinNote={onPinNote}/>
        case 'NoteVideo':
            return <NoteVideo note={note} onUpdateNote={onUpdateNote} onDeleteNote={onDeleteNote} onPinNote={onPinNote}/>
        case 'NoteTodos':
            console.log('inside NoteText2')
            return <NoteTodos note={note} onUpdateNote={onUpdateNote} onDeleteNote={onDeleteNote} onPinNote={onPinNote}/>
    }
    return <p>UNKNWON</p>
}