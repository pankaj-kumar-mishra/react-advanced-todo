import { ReactNode } from 'react'
import classes from './HeaderLink.module.scss'

type HeaderLinkProps = {
  to: string
  children: ReactNode
}

export const HeaderLink = ({ children, to }: HeaderLinkProps) => {
  return (
    <a className={classes.HeaderLink + ' mr-2 ml-2'} href={to}>
      {children}
    </a>
  )
}
