import React from 'react'
import Social from './Social'

function Contact({firstName, age, country}) {
    // console.log(props)
  return (
    <div>
      {/* <h1>This is the Contact Section:</h1>
      <h4>Name: {props.firstName}</h4>
      <h4>Age: {props.age}</h4>
      <h4>Country: {props.country}</h4> */}
      <Social name={firstName} age={age} country= {country}/>
    </div>
  )
}

export default Contact
