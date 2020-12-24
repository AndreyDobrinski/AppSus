
export class NoteText extends React.Component {
    state = {
        note: null
    }

    componentDidMount() {
        console.log('from props', this.props)
        this.setState({ note: this.props.note })
    }

    handleChange = (ev) => {
        var value = ev.target.value
        const noteCopy = { ...this.state };
        noteCopy.note.info.txt = value
        this.setState(noteCopy)

    };


    render() {
        if (!this.state.note) return <div></div>
        return <div className="note">
            <textarea className="text-text" id="" rows="10" value={this.state.note.info.txt} onChange={this.handleChange}></textarea>
            <div className="text-settings">
                <button className="fas done" onClick={() => { this.props.onUpdateNote(this.state.note) }}></button>
                {/* <button className="fas delete" onClick={this.props.onDeleteNote}></button> */}
            </div>
        </div>
        {/* className="add-note-text" */ }
    }
}
