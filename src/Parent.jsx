import React from 'react'
import Child from "./Child"
const Parent = (props) => {
  return (
    <div className='Pt'>
        <h1>Parent</h1>
      <Child data={props.data}/>
    </div>
  )
}

export default Parent
