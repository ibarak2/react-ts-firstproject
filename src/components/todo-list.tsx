import { useState } from "react"
import { Todo } from "../ts-models/todo.model"

interface TodoListProps {
    todos: Todo[]
    onDelete: (id: string) => void
}

export const TodoList = ({todos, onDelete}: TodoListProps) => {

    return (
        <div>
            <ul>
                {todos.map((todo: {id: string, text:string}) => <li key={todo.id}>{todo.text}<button onClick={() => {onDelete(todo.id)}}>DELETE</button></li>)}
            </ul>
        </div>
    )
}