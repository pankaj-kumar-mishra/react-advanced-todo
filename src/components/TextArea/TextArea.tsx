import classes from './TextArea.module.scss'
import { memo } from 'react'

type TextAreaProps = {
  label: string
  name: string
  className?: string
  onInput: (value: string) => void
  value: string
}

export const TextArea = memo(
  ({ value, onInput, label = '', name = '', className }: TextAreaProps) => {
    return (
      <div className={className}>
        <label htmlFor={name}>{label}</label>
        <textarea
          className={classes.TextAreaField}
          name={name}
          value={value}
          onChange={(event) => onInput(event.target.value)}
        />
      </div>
    )
  },
)
