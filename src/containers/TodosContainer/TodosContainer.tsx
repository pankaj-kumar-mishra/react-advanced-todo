import { useCallback, useState, useEffect } from 'react'
import { ButtonSelect } from '../../components/ButtonSelect/ButtonSelect'
import { Todo } from '../../models/Todo'
import { TodoService } from '../../services/TodoService'
import EditTodoContainer from '../EditTodoContainer'
import { AddTodoItem } from './AddTodoItem/AddTodoItem'
import { TodoItem } from './TodoItem/TodoItem'

const buttonSelectOptions = [
  { label: 'All', value: 'all' },
  { label: 'Done', value: 'true' },
  { label: 'Not Done', value: 'false' },
]

type TodosContainerProps = {
  todoService: TodoService
}

export const TodosContainer = ({ todoService }: TodosContainerProps) => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [selectedTodoId, setSelectedTodoId] = useState<number>(-1)
  const [todoFilter, setTodoFilter] = useState<string>('all')

  const fetchTodos = useCallback(async () => {
    try {
      const data = await todoService.getAllTodo()
      // console.log('>>>fetchTodos', data)
      setTodos(data)
    } catch (error) {
      console.log(error)
    }
  }, [todoService])

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
    [fetchTodos, todoService],
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
    [fetchTodos, todoService],
  )

  const onDoneClicked = useCallback(
    async (todo: Partial<Todo>) => {
      if (!todo.id) return
      try {
        await todoService.updateTodo(todo.id, todo)
        fetchTodos()
      } catch (error) {
        console.log(error)
      }
    },
    [fetchTodos, todoService],
  )

  const onSelectTodoFilter = useCallback(
    async (value: string) => {
      setTodoFilter(value)
      try {
        const data = await todoService.getAllTodo({ params: { isDone: value } })
        // console.log(data)
        setTodos(data)
      } catch (error) {
        console.log(error)
      }
    },
    [todoService],
  )

  const onEditClicked = useCallback((id: number) => {
    setSelectedTodoId(id)
  }, [])

  const onSaveClicked = useCallback(() => {
    setSelectedTodoId(-1)
    fetchTodos()
  }, [fetchTodos])

  const onCloseClicked = useCallback(() => {
    setSelectedTodoId(-1)
  }, [])

  return (
    <div>
      <AddTodoItem onAddClicked={onAddClicked} />
      <ButtonSelect
        className="mt-3"
        options={buttonSelectOptions}
        value={todoFilter}
        onInput={onSelectTodoFilter}
      />
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          todo={item}
          onEditClicked={onEditClicked}
          onDeleteClicked={onDeleteClicked}
          onDoneClicked={onDoneClicked}
        />
      ))}
      {selectedTodoId !== -1 ? (
        <EditTodoContainer
          todoId={selectedTodoId}
          onSaveClicked={onSaveClicked}
          onCloseClicked={onCloseClicked}
        />
      ) : null}
    </div>
  )
}
