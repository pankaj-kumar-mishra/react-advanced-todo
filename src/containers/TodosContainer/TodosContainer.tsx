import { useCallback } from 'react'
import { AddTodoItem } from './AddTodoItem/AddTodoItem'
import { TodoItem } from './TodoItem/TodoItem'

export const TodosContainer = () => {
  const onAddClicked = useCallback((value: string) => {
    console.log(value)
  }, [])

  return (
    <div>
      <AddTodoItem onAddClicked={onAddClicked} />
      <TodoItem todo="Task One" />
      <TodoItem todo="Task Two" />
    </div>
  )
}
