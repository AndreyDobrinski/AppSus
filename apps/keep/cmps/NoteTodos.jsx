export class NoteTodos extends React.Component {
    state = {
        note: null
    }

    componentDidMount() {
        console.log('from props todos', this.props.note)
        this.setState({ note: this.props.note })
    }

    handleChange = (ev) => {
        var value = ev.target.value
        console.log('ev.target', ev.target.id)
        const noteCopy = { ...this.state };
        if (ev.target.name !== "todo") {
            noteCopy.note.info[ev.target.name] = value
        } else {
            noteCopy.note.info.todos[ev.target.id].txt = value
        }
        this.setState(noteCopy)
    };
    onUpdStatus = (idx) => {
        const noteCopy = { ...this.state };
        noteCopy.note.info.todos[idx].isDone = !noteCopy.note.info.todos[idx].isDone
        this.setState(noteCopy, () => { console.log(this.state) })
    }
    onDeleteTodo = (idx) => {
        const noteCopy = { ...this.state };
        noteCopy.note.info.todos.splice(idx, 1)
        this.setState(noteCopy, () => { console.log(this.state) })
    }
    onAddTodo = (idx) => {
        const noteCopy = { ...this.state };
        noteCopy.note.info.todos.splice(++idx, 0, { txt: '', isDone: false })
        this.setState(noteCopy, () => { console.log(this.state) })
    }

    render() {
        if (!this.state.note) return <div></div>
        return <div className="note">
            <input type="text" name="label" value={this.state.note.info.label} 
            onChange={this.handleChange} className="text-todos"/>
            <div className="todos">
                {this.state.note.info.todos.map((todo, idx) => {
                    return (
                        <div className="todo-item">
                            <button className="fas check" onClick={() => { this.onUpdStatus(idx) }}></button>
                            <input type="text" name="todo" id={todo.id} value={todo.txt}
                                onChange={this.handleChange} key={todo.id} className="text-todo"
                                style={todo.isDone ? { textDecoration: 'line-through' } : { textDecoration: 'none' }} />
                            <button className="fas delete-item" onClick={() => { this.onDeleteTodo(idx) }}></button>
                            <button className="fas add-item" onClick={() => { this.onAddTodo(idx) }}></button>
                        </div>
                    )
                })}
            </div>
            <div className="todo-settings">
                <button className="fas done" onClick={() => { this.props.onUpdateNote(this.state.note) }}></button>
                <button className="fas delete" onClick={this.props.onDeleteNote}></button>
            </div>
        </div>
    }
}