import { AppHeader } from '../../cmps/App-header.jsx'
import { keepService } from './services/keepService.js'


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
            .then(notes => this.setState({ notes , answers: new Array(this.state.notes.length) }))
    }


    render() {
        return (
            <section>
                <AppHeader />
                <h1 className="keep-header">Keep</h1>
            </section>
        )
    }
}