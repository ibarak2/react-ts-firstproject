import React, { useRef } from "react"

export const NewTodo = ({onAddTodo}: any) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const onSubmitTodo = (event: React.FormEvent) => {
        event.preventDefault()
        const enteredText = inputRef.current!.value
        onAddTodo(enteredText);
        
    }

    return(
        <div>
            <form onSubmit={onSubmitTodo}>
                <div className="form-control">
                    <label htmlFor="todo-text">Todo Text</label>
                    <input type="text" id="todo-text" ref={inputRef}/>
                </div>
                <button type="submit">ADD TODO</button>
            </form>
        </div>
    )
}