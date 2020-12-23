import { AppHeader } from '../../cmps/App-header.jsx'
import { keepService } from './services/keepService.js'
import { DynamicKeepCmp } from './cmps/DynamicKeepCmp.jsx'


export class KeepApp extends React.Component {
    state = {
        notes: null,
        answers: []
    }

    componentDidMount() {
        this.loadNotes()
        // .then((res)=> this.setState({ answers: new Array(this.state.notes.length) }))      
        // this.setState({ answers: new Array(this.state.notes.length) }) 
    }


    loadNotes() {
        keepService.query()
            .then(notes => this.setState({ notes, answers: new Array(notes.length) }))
    }


    render() {
        const { notes } = this.state
        console.log('notes', this.state.notes)
        if (!notes) return <section></section>
        return (
            <section>
                <AppHeader />
                <h1 className="keep-header">Keep</h1>
                {notes.map((note, idx) => {
                    return <div key={idx}>
                        <DynamicKeepCmp currNote={note.type} info={note.info} />
                    </div>
                })}
            </section>
        )
    }
}