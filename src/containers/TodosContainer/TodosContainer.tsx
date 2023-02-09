import { useCallback, useState, useEffect } from 'react'
import { Todo } from '../../models/Todo'
import { AddTodoItem } from './AddTodoItem/AddTodoItem'
import { TodoItem } from './TodoItem/TodoItem'

const todosUrl = 'http://localhost:3001/todos'

export const TodosContainer = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const fetchTodos = () => {
    fetch(todosUrl)
      .then((res) => res.json())
      .then((data) => setTodos(data))
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const onAddClicked = useCallback((todo: string) => {
    if (!todo) return
    // setTodos((prev) => [...prev, todo])
    fetch(todosUrl, {
      method: 'POST',
      body: JSON.stringify({ todo }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.status === 200) {
        fetchTodos()
      }
    })
  }, [])

  const onDeleteClicked = useCallback((id: number) => {
    if (!id) return
    fetch(todosUrl, {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.status === 200) {
        fetchTodos()
      }
    })
  }, [])

  return (
    <div>
      <AddTodoItem onAddClicked={onAddClicked} />
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} onDeleteClicked={onDeleteClicked} />
      ))}
    </div>
  )
}
