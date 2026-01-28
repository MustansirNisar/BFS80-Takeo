import React, { useEffect } from 'react'

function Effect({count, data}) {
    // function greet(){
    //     console.log("Hello and Welcome")
    // }
    // useEffect(()=>{
    // greet();

    // },[count,data])

    useEffect(()=>{
        console.log("At the time of Mounting")
    },[])

    useEffect(()=>{
        console.log("On Updating")
    },[count])

    useEffect(()=>{
        return ()=>{
            console.log("Executed at the time of Unmounting")
        }
    },[])

  return (
    <div>
      <h1>This is the useEffect Component</h1>
      <p>We are learning Component Lifecycle</p>
    </div>
  )
}

export default Effect
