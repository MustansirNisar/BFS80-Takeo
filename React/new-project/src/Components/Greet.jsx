import React from 'react'

function Greet({details:{name, id,  salary}}) {
    // let[first,second,third] = arrName;
  return (
    <div>
        {/* Passing an Array */}
      {/* <h3>Coder1: {props.fNames[0]}</h3>
      <h3>Coder2: {props.fNames[1]}</h3>
      <h3>Coder3: {props.fNames[2]}</h3>
      <h3>Coder4: {props.fNames[3]}</h3> */}
        {/* <h3>coder: {fNames[0]}</h3> */}
        {/* <h3>{coder1}</h3> */}
        {/* Passing an Object */}
        {/* <h3>{details.name}</h3>
        <h3>{details.id}</h3>
        <h3>{details.salary}</h3> */}
        <h3> {name}</h3>
        <h3> {id}</h3>
        <h3> {salary}</h3>


    </div>
  )
}

export default Greet
