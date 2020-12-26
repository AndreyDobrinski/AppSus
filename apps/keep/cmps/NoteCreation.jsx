
export class NoteCreation extends React.Component {
    state = {
        note: {
            type: "NoteText",
            // isPinned: true,
            info: {}
        }

    }

    componentDidMount() {

    }

    handleChange = (ev) => {

        var value = ev.target.value
        const noteCopy = { ...this.state.note };
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
        console.log('in noteCre to parent', this.state.note)
        this.props.onAddNote(copy);
        this.setState({ note: { type: "NoteText", info: { txt: '', url: '', todos: [''] } } })
        // this.props.onAddNote(this.state);
    }

    onChangeNoteType = (ev) => {
        var noteCopy = { ...this.state.note }
        if (ev.target.name === "NoteText") {
            noteCopy.type = "NoteText"
            this.setState({ note: noteCopy }, () => { console.log('Set to TEXT', this.state.note) })
            // console.log('Set to TEXT')
        }
        if (ev.target.name === "NoteImg") {
            noteCopy.type = "NoteImg"
            this.setState({ note: noteCopy }, () => { console.log('Set to IMG', this.state.note) })
            console.log('Set to IMG')
        }
        if (ev.target.name === "NoteTodos") {
            noteCopy.type = "NoteTodos"
            this.setState({ note: noteCopy })
        }
    }

    setValue = () => {
        if (this.state.note.type === "NoteText") {
            return this.state.note.info.txt
        }
        if (this.state.note.type === "NoteImg") {
            return this.state.note.info.url
        }
        if (this.state.note.type === "NoteTodos") {
            if (!this.state.note.info.todos) return ''
            var txts = this.state.note.info.todos.map(el => el.txt)
            var res = txts.join(',')
            return res
        }
    }
    setPlaceHolder = () => {
        if (this.state.note.type === "NoteText") {
            return "What's on your mind..."
        }
        if (this.state.note.type === "NoteImg") {
            return "Enter image URL..."
        }
        if (this.state.note.type === "NoteTodos") {
            return "Enter comma separated list..."
        }
    }

    render() {

        return (
            <section className="note-creator">
                <form onSubmit={this.onAddNote}>
                    <input type="text" name="txt" className="note-creator-inp"
                        value={this.setValue()}
                        placeholder={this.setPlaceHolder()}
                        onChange={this.handleChange} />
                    <button type="submit" hidden></button>
                    {/* <button name="Save" className="fas create" onClick={this.onAddNote}></button> */}
                </form>
                <div className="creator-settings">
                    <button name="NoteText" className="fas text" onClick={this.onChangeNoteType}></button>
                    <button name="NoteImg" className="far img" onClick={this.onChangeNoteType}></button>
                    <button name="NoteTodos" className="fas todo" onClick={this.onChangeNoteType}></button>
                </div>
            </section>
        )
    }
}