import { memo } from 'react'
import { Button } from '../../../components/Button/Button'
import { CheckBox } from '../../../components/CheckBox/CheckBox'
import { Todo } from '../../../models/Todo'
import classes from './TodoItem.module.scss'

type TodoItemProps = {
  todo: Todo
  onEditClicked?: (id: number) => void
  onDeleteClicked?: (id: number) => void
  onDoneChecked?: ({ id, isDone }: { id: number; isDone: boolean }) => void
}

export const TodoItem = memo(({ todo, onDeleteClicked }: TodoItemProps) => {
  const onClickDelete = () => {
    onDeleteClicked && onDeleteClicked(todo.id)
  }

  return (
    <div className={`${classes.TodoItem} flex`}>
      <div className="mt-2 mr-1">
        <CheckBox value={true} />
      </div>
      <div className="flex-grow-1 mt-auto mb-auto">
        <span className={todo.isDone ? classes.TodoIsDone : ''}>
          {todo.task}
        </span>
      </div>
      <div>
        <Button transparent>
          <i className="fa fa-pencil" />
        </Button>
      </div>
      <div>
        <Button onClick={onClickDelete} transparent>
          <i className="fa fa-trash" />
        </Button>
      </div>
    </div>
  )
})
