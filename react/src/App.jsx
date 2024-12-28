
import { useState } from 'react'
import './App.css'
function App() {

  const [name, setName] = useState("Jane B");

  const changeName = () => {
    setName("John Doe");
  }


  return (
    <>
      <h1>Hello {name}!</h1>
      <button onClick={changeName }>Change User</button>
    </>
  )
}

export default App
