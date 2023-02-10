import { memo } from 'react'
import { Button } from '../../../components/Button/Button'
import { CheckBox } from '../../../components/CheckBox/CheckBox'
import { Todo } from '../../../models/Todo'
import classes from './TodoItem.module.scss'

type TodoItemProps = {
  todo: Todo
  onEditClicked?: (id: number) => void
  onDeleteClicked?: (id: number) => void
  onDoneClicked?: ({ id, isDone }: { id: number; isDone: boolean }) => void
}

export const TodoItem = memo(
  ({ todo, onEditClicked, onDeleteClicked, onDoneClicked }: TodoItemProps) => {
    const onClickDelete = () => {
      onDeleteClicked?.(todo.id)
    }
    const onClickEdit = () => {
      onEditClicked?.(todo.id)
    }
    const onClickDone = (value: boolean) => {
      onDoneClicked?.({ id: todo.id, isDone: value })
    }

    return (
      <div className={`${classes.TodoItem} flex`}>
        <div className="mt-2 mr-1">
          <CheckBox value={todo.isDone} onInput={onClickDone} />
        </div>
        <div className="flex-grow-1 mt-auto mb-auto">
          <span className={todo.isDone ? classes.TodoIsDone : ''}>
            {todo.task}
          </span>
        </div>
        <div>
          <Button onClick={onClickEdit} transparent>
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
  },
)
