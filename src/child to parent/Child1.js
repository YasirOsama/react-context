import React, { useState } from 'react'

const Child1 = (props) => {
    const [name,setname]=useState('')
   const change=(e)=>{
    e.preventDefault();
   
      
        props.getdata(name)
   }
  return (
    <div>
      
      <input type='text' value={name} onChange={(e)=> setname(e.target.value) }></input>
      <button onClick={change}>update</button>
    </div>
  )
}

export default Child1
