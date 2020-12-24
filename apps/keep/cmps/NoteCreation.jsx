
export class NoteCreation extends React.Component {
    state = {
        type: "NoteText",
        // isPinned: true,
        info: {}
    }

    componentDidMount() {

    }

    handleChange = (ev) => {
        
        var value = ev.target.value
        const noteCopy = { ...this.state.info };
        console.log('this.state.type', this.state.type)

        if (this.state.type === "NoteText") {
            noteCopy.txt = value;
            console.log('noteCopy.txt', noteCopy.txt)
        }
        if (this.state.type === "NoteImg") {
            noteCopy.url = value;
        }
        if (this.state.type === "NoteTodos") {
            var todos = value.split(',')
            var res = todos.map(todo => {
                return { txt: todo, isDone: false }
            })
            noteCopy.todos = res;
        }
        this.setState({ info: noteCopy }, () => { console.log('after handle', this.state) })

    };

    onAddNote = (ev) => {
        // ev.preventDefault();
        var copy = {...this.state}
        console.log('in noteCre to parent', this.state)
        this.props.onAddNote(copy);
        // this.props.onAddNote(this.state);
        // this.setState({ info: {} })
    }

    onChangeNoteType = (ev) => {
        if (ev.target.name === "NoteText") {
            this.setState({ type: "NoteText", info: {txt: 'looo'} })
            console.log('update type', this.state.type)
        }
        if (ev.target.name === "NoteImg") {
            this.setState({ type: "NoteImg", info: {url: null} })
        }
        if (ev.target.name === "NoteTodos") {
            this.setState({ type: "NoteTodos", info: {todos: []} })
        }
    }

    render() {

        return (
            <section className="note-creator">
                {/* <form onSubmit={this.onAddNote}> */}
                <input type="text" name="txt" className="note-creator-inp"
                    placeholder="Whats on your mind..."
                    onChange={this.handleChange} />
                <button name="Save" className="fas create" onClick={this.onAddNote}></button>
                <button name="NoteText" className="fas text" onClick={this.onChangeNoteType}></button>
                <button name="NoteImg" className="far img" onClick={this.onChangeNoteType}></button>
                <button name="NoteTodos" className="fas todo" onClick={this.onChangeNoteType}></button>
                {/* </form> */}
            </section>
        )
    }
}