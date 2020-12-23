export function NoteTodos ({ info}) {
    return <div className="note">
        {info.label}
        {info.todos.map(todo => {
            return <li key={todo.id}>{todo.txt}</li>
        })}
    </div>
}