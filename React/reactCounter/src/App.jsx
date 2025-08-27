import { useState } from 'react'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(15)

  let AddValue = () => {
    if (Counter < 20)
    setCounter(Counter + 1)
  }

    let RemoveValue = () => {
      if (Counter > 0)
    setCounter(Counter - 1)
  }




  return (

    <>
    <h1>React aur Counter</h1>
    <h2>Counter Value: {Counter}</h2>
    <button onClick={AddValue}>Increase Value</button>
    <button onClick={RemoveValue}>Decrease Value</button>
    </>
    
  )
}

export default App
