import React from 'react'

const Child = (props) => {
  return (
    <div className='Cd'>
        <h1>Child</h1>
      <h1 style={{color:"white" ,textAlign:"right"}}>{props.data}</h1>
    </div>
  )
}

export default Child
