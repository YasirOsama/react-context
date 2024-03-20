import React, { useCallback, useState } from 'react'
import UsecallBack1 from './UsecallBack1'

const UsecallBack = () => {
    const [add,setadd]=useState(0)
    const [count,setcount]=useState(0)
    const learning=useCallback(()=>{

    },[])
  return (
    <div>
      <h1> learning UsecallBack</h1>
      <h2>{add}</h2>
      <UsecallBack1 value={learning} value1={count}/>
      <button onClick={()=> setadd(add +1) }>Addition</button> <br/>
      <h1>{count}</h1>
      <button onClick={()=> setcount(count+2)}>count</button>
    </div>
  )
}

export default UsecallBack
