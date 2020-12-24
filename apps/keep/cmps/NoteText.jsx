export class NoteText extends React.Component {
    state = {
        note: null
    }

    componentDidMount() {
        this.setState({ note: this.props.note })
    }

    handleChange = (ev) => {
        var value = ev.target.value
        const noteCopy = { ...this.state };
        noteCopy.note.info.txt = value
        this.setState(noteCopy)

    };
    

    render() {
        if(!this.state.note) return <div></div>
        return <div className="note">
            <textarea className="text-text" id="" rows="10" value={this.state.note.info.txt} onChange={this.handleChange}></textarea>
            <button className="far fa-edit" onClick={()=>{this.props.onUpdateNote(this.state.note)}}>save</button>
            <button className="fas delete" onClick={this.props.onDeleteNote}></button>
        </div>
        {/* className="add-note-text" */}
    }
}
