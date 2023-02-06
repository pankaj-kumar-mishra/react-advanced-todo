import classes from './Input.module.scss'
import { forwardRef, memo } from 'react'

type InputProps = {
  value: string
  onInput: (value: string) => void
  label?: string
  name?: string
  className?: string
}

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(
    ({ value, onInput, label = '', name = '', className }, ref?) => {
      return (
        <div className={className}>
          {!label ? null : <label htmlFor={name}>{label}</label>}
          <input
            ref={ref}
            name={name}
            value={value}
            type="text"
            className={classes.Input}
            onChange={(event) =>
              onInput((event.target as HTMLInputElement).value)
            }
          />
        </div>
      )
    },
  ),
)
