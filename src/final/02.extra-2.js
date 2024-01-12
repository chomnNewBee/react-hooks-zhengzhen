// useEffect: persistent state
// 💯 effect dependencies
// http://localhost:3000/isolated/final/02.extra-2.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  const [name, setName] = React.useState(
    () => window.localStorage.getItem('name') ?? initialName,
  )
  const [name2,setName2] = React.useState('')

  React.useEffect(() => {

    console.log("effect callback")

    window.localStorage.setItem('name', name)
  }, [])

  function handleChange(event) {
    setName(event.target.value)
  }
  function handleChange2(event) {
    setName2(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
        <label>Name2: </label>
        <input value={name2} onChange={handleChange2} id="name2" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
