import { AppHeader } from '../../cmps/App-header.jsx'
import { keepService } from './services/keepService.js'
import { DynamicKeepCmp } from './cmps/DynamicKeepCmp.jsx'
import { NoteCreation } from './cmps/NoteCreation.jsx'


export class KeepApp extends React.Component {
    state = {
        notes: null
    }

    componentDidMount() {
        this.loadNotes()
        // .then((res)=> this.setState({ answers: new Array(this.state.notes.length) }))      
        // this.setState({ answers: new Array(this.state.notes.length) }) 
    }


    loadNotes() {
        keepService.query()
            .then(notes => {console.log('loadNotes', notes);this.setState({ notes })})
    }

    onAddNote = (note) => {
        console.log('AddingNote', note)
        keepService.addNote(note)
            .then(() => this.loadNotes())
    }
    onUpdateNote = (idx, note) => {
        console.log('UpdatingNote', note)
        keepService.updNote(idx, note)
            .then(() => this.loadNotes())
    }
    onDeleteNote = (idx) => {
        console.log('DeletingNote', idx)
        keepService.delNote(idx)
            .then(() => this.loadNotes())
    }

    render() {
        const { notes } = this.state
        if (!notes) return <section></section>
        return (
            <section>
                <AppHeader />
                {/* <NoteCreation onAddNote={(note) => { this.onAddNote(note) }} /> */}
                <NoteCreation onAddNote={this.onAddNote} />
                <div className="notes">
                    {notes.map((note, idx) => {
                        // return <DynamicKeepCmp key={idx} currNote={note.type} info={note.info} />
                        return <DynamicKeepCmp key={idx} note={note}
                            onUpdateNote={(res) => this.onUpdateNote(idx, res)}
                            onDeleteNote={() => { this.onDeleteNote(idx) }} />
                    })
                    }
                </div>
            </section>
        )
    }
}