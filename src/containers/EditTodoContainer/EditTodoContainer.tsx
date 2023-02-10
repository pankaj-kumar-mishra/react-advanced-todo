import { FC, useCallback, useEffect, useState } from 'react'
import { Input } from '../../components/Input/Input'
import { CheckBox } from '../../components/CheckBox/CheckBox'
import { Button } from '../../components/Button/Button'
import classes from './EditTodoContainer.module.scss'
import { TextArea } from '../../components/TextArea/TextArea'
import { Canvas } from '../../components/Canvas/Canvas'
import { TodoService } from '../../services/TodoService'

type TodoType = {
  task: string
  description: string
  handNotes: string
  isDone: boolean
}

type EditTodoContainerProps = {
  todoId: number
  onSaveClicked: () => void
  onCloseClicked: () => void
  todoService: TodoService
}

export const EditTodoContainer: FC<EditTodoContainerProps> = ({
  todoId,
  onSaveClicked,
  onCloseClicked,
  todoService,
}) => {
  const [todo, setTodo] = useState<TodoType>({
    task: '',
    description: '',
    handNotes: '',
    isDone: false,
  })

  const fetchTodo = useCallback(async () => {
    try {
      const data = await todoService.getTodo(todoId)
      setTodo(data)
    } catch (error) {
      console.log(error)
    }
  }, [todoId, todoService])

  useEffect(() => {
    fetchTodo()
  }, [fetchTodo])

  const handleSaveClicked = async () => {
    try {
      await todoService.updateTodo(todoId, todo)
      onSaveClicked()
    } catch (error) {
      console.log(error)
    }
  }

  const handleCloseClicked = () => {
    onCloseClicked()
  }

  const updateFormData = (updatedState: Partial<TodoType>) => {
    setTodo((state) => ({
      ...state,
      ...updatedState,
    }))
  }

  const updateTaskName = useCallback((value: string) => {
    updateFormData({ task: value })
  }, [])

  const updateDone = useCallback((value: boolean) => {
    updateFormData({ isDone: value })
  }, [])

  const updateDescription = useCallback((value: string) => {
    updateFormData({ description: value })
  }, [])

  const updateHandNotes = useCallback((value: string) => {
    updateFormData({ handNotes: value })
  }, [])

  return (
    <div className={classes.EditTodoContainer}>
      <h2>Edit Todo</h2>
      <div>
        <Input
          label="Task"
          name="task"
          className="mt-1"
          onInput={updateTaskName}
          value={todo.task}
        />
        <CheckBox
          onInput={updateDone}
          label="Done"
          name="isDone"
          className="mt-1"
          value={todo.isDone}
        />
        <TextArea
          label="Description"
          name="description"
          className="mt-1"
          onInput={updateDescription}
          value={todo.description}
        />
        <Canvas
          label="Hand Notes"
          className="mt-1"
          onInput={updateHandNotes}
          value={todo.handNotes}
        />
      </div>
      <div className="flex mt-2">
        <Button
          className="flex-grow-1 mr-2"
          primary
          onClick={handleSaveClicked}
        >
          Save
        </Button>
        <Button className="flex-grow-1" secondary onClick={handleCloseClicked}>
          Close
        </Button>
      </div>
    </div>
  )
}
