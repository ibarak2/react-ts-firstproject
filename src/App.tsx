import { useEffect, useState } from 'react'
import './App.css'
import { NewTodo } from './components/new-todo'
import { TodoList } from './components/todo-list'
import { Todo } from './ts-models/todo.model'



function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const onAddTodo = (text: string) => {
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text}])
    
  }

  const onDelete = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className="App">
      <NewTodo 
        onAddTodo={onAddTodo}
      />
      <TodoList 
        todos={todos}
        onDelete={onDelete}
      />
    </div>
  )
}

export default App
