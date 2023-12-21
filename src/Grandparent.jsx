import React from 'react'
import Parent from "./Parent"
const Grandparent = (props) => {
  return (
    <div className='Gp'>
        <h1>Grandparent</h1>
      <Parent data={props.data}/>
    </div>
  )
}

export default Grandparent
