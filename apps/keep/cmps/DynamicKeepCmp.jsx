import { NoteText } from './NoteText.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'


export function DynamicKeepCmp({ currNote, info }) {
    switch (currNote) {
        case 'NoteText':
            return <NoteText info={info} />
        case 'NoteImg':
            return <NoteImg info={info} />
        case 'NoteTodos':
            return <NoteTodos info={info} />
    }
    return <p>UNKNWON</p>
}