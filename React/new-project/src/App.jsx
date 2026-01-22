import Something, { Contact }  from "./Components/About"

function App() {
  let greeting = <h1>Hello, Hemanth!</h1>

  return (

    <>
      <h1>Welcome to my web page</h1>
      {greeting}
      <Something/>
      <Contact/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, delectus!</p>
    </>
       
    
  )
}

export default App
