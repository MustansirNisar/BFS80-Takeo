import React, { useRef } from 'react'

function App() {
  const refInput = useRef(null)
  let handleInput = ()=>{
    console.log(refInput)
    refInput.current.focus()
    refInput.current.style.color = "orange"
    refInput.current.placeholder = "Enter something over here"
  }
  return (
    <div>
      <input ref={refInput} type="text" placeholder='Enter Username' />
      <button onClick={handleInput}>Focus</button>
    </div>
  )
}

export default App
