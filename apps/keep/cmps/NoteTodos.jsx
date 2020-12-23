export function NoteTodos ({ note}) {
    return <div className="note">
        {note.info.label}
        {note.info.todos.map(todo => {
            return <li key={todo.id}>{todo.txt}</li>
        })}
    </div>
}