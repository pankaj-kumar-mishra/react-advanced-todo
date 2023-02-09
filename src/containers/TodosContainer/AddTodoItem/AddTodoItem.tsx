import { FormEventHandler, useState } from 'react'
import { Input } from '../../../components/Input/Input'
import { Button } from '../../../components/Button/Button'
import { useAutoFocus } from '../../../hooks/useAutoFocus'

type AddTodoFormProps = {
  onAddClicked: (task: string) => void
}

// const AddTodoItemTextField = withAutoFocus(TextField); // using HoC

export const AddTodoItem = ({ onAddClicked }: AddTodoFormProps) => {
  const inputRef = useAutoFocus()
  const [value, setValue] = useState<string>('')

  const onInput = (value: string) => {
    setValue(value)
  }

  const onFormSubmitted: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    onAddClicked(value)
    setValue('')
  }

  return (
    <form className="flex" onSubmit={onFormSubmitted}>
      <div className="mr-1 flex-grow-1">
        <Input ref={inputRef} value={value} onInput={onInput} />
      </div>
      <Button type="submit" primary>
        Add
      </Button>
    </form>
  )
}
