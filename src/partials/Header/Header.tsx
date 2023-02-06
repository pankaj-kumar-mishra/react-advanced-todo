// import React from 'react'

// export const Header = () => {
//   return React.createElement('div', {
//     children: 'Using Create Element',
//   })
// }

import classes from './Header.module.scss'
import { HeaderLink } from './HeaderLink/HeaderLink'
// console.log(classes) // show different name (hash name)

export const Header = () => {
  return (
    <header className={classes.Header}>
      <div className={classes.HeaderTitle}>Advanced ToDo</div>
      <nav className="m-auto">
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/">Stats</HeaderLink>
        <HeaderLink to="/">About</HeaderLink>
      </nav>
    </header>
  )
}
