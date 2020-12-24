export class NoteImg extends React.Component {
    state = {
        note: null
    }

    componentDidMount() {
        this.setState({ note: this.props.note })
    }

    handleChange = (ev) => {
        var value = ev.target.value
        console.log(value)
        const noteCopy = { ...this.state };
        if(ev.target.name !== "backgroundColor") {
            noteCopy.note.info[ev.target.name] = value
        }else {
            noteCopy.note.style[ev.target.name] = value
        }
        this.setState(noteCopy)
    };


    render() {
        if (!this.state.note) return <div></div>
        var {backgroundColor} = this.state.note.style;
        return <div className="note" style={{backgroundColor:backgroundColor}}>
            <input type="text" name="title" value={this.state.note.info.title} onChange={this.handleChange} />
            <img src={`${this.state.note.info.url}`} alt="" />
            <input type="text" name="url" value={this.state.note.info.url} placeholder="Enter new url" onChange={this.handleChange} />
            <input type="color" name="backgroundColor" value={this.state.note.style.backgroundColor} onChange={this.handleChange}/>
            <button className="add-note-img" onClick={() => { this.props.onUpdateNote(this.state.note) }}>save</button>
            <button className="fas delete" onClick={this.props.onDeleteNote}></button>
        </div>
    }
}
