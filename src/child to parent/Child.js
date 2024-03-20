import React, { useState } from 'react'

const Child = (props) => {
    const [data,setdate]=useState('')
    const [name,setname]=useState([])
    const change=(e)=>{
        setdate(e.target.value)
        props.phone(data)
    }
    const click=()=>{
      setname([...name,data])
    }
  return (
    <div>
      <form>
        <label>Enter name</label>
        <input type='text' value={data} onChange={change}/>
        <button onClick={click}>add name</button>
      </form>
      <ul>
        <li>{name}</li>
      </ul>
    </div>
  )
}

export default Child





