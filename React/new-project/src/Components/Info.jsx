import React from 'react'

function Info({children, color="yellow"}) {
  return (
    <div style={{color:color,backgroundColor:"aqua", border:"2px solid brown", margin: "10px", width:"400px"}}>
      <h1>This is my Info:</h1>
        {children}
    </div>
  )
}

export default Info
