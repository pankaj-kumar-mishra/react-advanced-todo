import { useCallback, useState, useEffect } from 'react'
import { Todo } from '../../models/Todo'
import { TodoService } from '../../services/TodoService'
import { AddTodoItem } from './AddTodoItem/AddTodoItem'
import { TodoItem } from './TodoItem/TodoItem'

const todoService = new TodoService()

export const TodosContainer = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const fetchTodos = useCallback(async () => {
    try {
      const data = await todoService.getAllTodo()
      // console.log('>>>fetchTodos', data)
      setTodos(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  const onAddClicked = useCallback(
    async (todo: string) => {
      if (!todo) return
      try {
        const res = await todoService.addTodo(todo)
        if (res.status === 200) {
          fetchTodos()
        }
      } catch (error) {
        console.log(error)
      }
    },
    [fetchTodos],
  )

  const onDeleteClicked = useCallback(
    async (id: number) => {
      if (!id) return
      try {
        const res = await todoService.deleteTodo(id)
        if (res.status === 200) {
          fetchTodos()
        }
      } catch (error) {
        console.log(error)
      }
    },
    [fetchTodos],
  )

  return (
    <div>
      <AddTodoItem onAddClicked={onAddClicked} />
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} onDeleteClicked={onDeleteClicked} />
      ))}
    </div>
  )
}
