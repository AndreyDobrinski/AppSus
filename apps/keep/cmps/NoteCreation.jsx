
export class NoteCreation extends React.Component {
    state = {
        note: {
            type: "NoteText",
            // isPinned: true,
            info: {}
        },
        stop:false
        
    }

    componentDidMount() {

    }

    handleChange = (ev) => {

        var value = ev.target.value
        const noteCopy = { ...this.state.note};
        console.log('this.state.type', this.state.note.type)

        if (this.state.note.type === "NoteText") {
            noteCopy.info.txt = value;
            console.log('noteCopy.txt', noteCopy.txt)
        }
        if (this.state.note.type === "NoteImg") {
            noteCopy.info.url = value;
        }
        if (this.state.note.type === "NoteTodos") {
            var todos = value.split(',')
            var res = todos.map(todo => {
                return { txt: todo, isDone: false }
            })
            noteCopy.info.todos = res;
        }
        this.setState({ note: noteCopy }, () => { console.log('after handle', this.state.note) })

    };

    onAddNote = (ev) => {
        ev.preventDefault();
        var copy = { ...this.state.note }
        console.log('in noteCre to parent', this.state)
        this.setState({note:{type:"NoteText", info: null }},  ()=>{this.props.onAddNote(copy); this.setState({stop: true})})
       
        // this.props.onAddNote(this.state);
    }

    onChangeNoteType = (ev) => {
        var noteCopy = {...this.state.note}
        if (ev.target.name === "NoteText") {
            noteCopy.type = "NoteText"
            this.setState({note:noteCopy}, ()=>{console.log('Set to TEXT', this.state.note)})
            // console.log('Set to TEXT')
        }
        if (ev.target.name === "NoteImg") {
            noteCopy.type = "NoteImg"
            this.setState({note:noteCopy}, ()=>{console.log('Set to IMG', this.state.note)})
            console.log('Set to IMG')
        }
        if (ev.target.name === "NoteTodos") {
            noteCopy.type = "NoteTodos"
            this.setState({note:noteCopy})
        }
    }

    render() {

        return (
            <section className="note-creator">
                <form onSubmit={this.onAddNote}>
                    <input type="text" name="txt" className="note-creator-inp"
                        // value={this.state.note.info.txt && this.state.note.info.url && this.state.noteinfo.todos.join(',')}
                        placeholder="Whats on your mind..."
                        onChange={this.state.stop?()=>{console.log('ppppp')}:this.handleChange} />
                    <button type="submit" hidden></button>
                    {/* <button name="Save" className="fas create" onClick={this.onAddNote}></button> */}
                </form>
                    <button name="NoteText" className="fas text" onClick={this.onChangeNoteType}></button>
                    <button name="NoteImg" className="far img" onClick={this.onChangeNoteType}></button>
                    <button name="NoteTodos" className="fas todo" onClick={this.onChangeNoteType}></button>
            </section>
        )
    }
}