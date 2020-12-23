
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

        if (this.state.type === "NoteText") {
            noteCopy.txt = value;
        }
        if (this.state.type === "NoteImg") {
            noteCopy.url = value;
        }
        if (this.state.type === "NoteTodos") {
            var todos = value.split(',')
            var res = todos.map(todo => {
                return { txt: todo, doneAt: null }
            })
            noteCopy.todos = res;
        }
        this.setState({ info: noteCopy })

    };

    onAddNote = () => {
        this.props.onAddNote(this.state);
        this.setState({ info: {} })
    }

    onChangeNoteType = (ev) => {
        if (ev.target.name === "NoteText") {
            this.setState({ type: "NoteText" })
        }
        if (ev.target.name === "NoteImg") {
            this.setState({ type: "NoteImg" })
        }
        if (ev.target.name === "NoteTodos") {
            this.setState({ type: "NoteTodos" })
        }
    }

    render() {

        return (
            <section>
                <input type="text" name="txt"
                    placeholder="Whats on your mind..."
                    onChange={this.handleChange} />
                <button name="NoteText" onClick={this.onChangeNoteType}>text</button>
                <button name="NoteImg" onClick={this.onChangeNoteType}>img</button>
                <button name="NoteTodos" onClick={this.onChangeNoteType}>todo</button>
                <button name="Save" onClick={this.onAddNote}>save</button>
            </section>
        )
    }
}