// useState: greeting
// 💯 accept an initialName
// http://localhost:3000/isolated/final/01.extra-1.js

import * as React from 'react'

function Greeting({initialName = '',frontName = ''}) {
  const initStr = frontName ? `${frontName}-${initialName}`:initialName
  const [name, setName] = React.useState(initStr)
  function handleChange(event) {
    const tempStr = frontName ? `${frontName}-${event.target.value}`:event.target.value
    setName(tempStr)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Kody" frontName={"imaginix"}/>
}

export default App
