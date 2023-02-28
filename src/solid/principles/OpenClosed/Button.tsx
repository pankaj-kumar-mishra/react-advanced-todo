interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  role?: 'back' | 'forward' | 'main' | 'not-found'
  icon?: React.ReactNode
}

export function Button(props: IButtonProps) {
  const { text, role, icon } = props

  return (
    <button {...props}>
      {text}
      <div>
        {/* {role === "forward" && <i className="forward-icon" />}
          {role === "back" && <i className="backward-icon" />} */}
        {icon}
      </div>
    </button>
  )
}
