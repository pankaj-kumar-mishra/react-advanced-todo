import React, { useState } from 'react'
import { SearchInput } from './SearchInput'

const LiskovSubstitution = () => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <h1>LiskovSubstitution</h1>
      <SearchInput value={value} onChange={handleChange} autoFocus />
    </div>
  )
}

export default LiskovSubstitution
