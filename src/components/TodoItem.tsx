"use client" // This is a client side rendered component

type TodoItemProps = {
    id: string,
    title: string,
    complete: boolean
    toggleTodo: (id: string, complete: boolean) => void
    deleteTodo: (id: string) => void
}

export function TodoItem({id, title, complete, toggleTodo, deleteTodo }: TodoItemProps) {

    async function deleteTodoItem(id: string) {
        deleteTodo(id)

        window.location.reload();
    }

    return (
        <li className="flex gap-1 items-center">
            {/* "peer" class allows label to be styled when input changes */}
            <input id={id} type="checkbox" className="cursor-pointer peer" defaultChecked={complete}
                onChange={e => toggleTodo(id, e.target.checked)}
            />
            <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">{title}</label>
            <button onClick={() => deleteTodoItem(id)}>Remove</button>
        </li>
    )
}