import React from 'react'
import Grandparent from "./Grandparent";
import "./global.css";

const App = () => {
  return (
    <div className='rootmain'>
        <h1>Root Component</h1>
      <Grandparent data="frontend dev"></Grandparent>
    </div>
  )
}

export default App
