import React, { useState } from 'react'
import { vata } from '../ChildA'

const UsWithArray1 = () => {
    const [pen,setteam]=useState([])
    function updte(){
    setteam([...pen,{
        id:"pen.length",
        name:Math.random()
    }])
    }
  return (
    <div>
        <ol>
            {pen.map((vata)=> 
            (<li key={vata.id} >{vata.name}</li>))}
        </ol>
<button onClick={updte}>update</button>
    </div>
  )
}

export default UsWithArray1