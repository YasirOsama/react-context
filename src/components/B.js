import React, { useContext } from 'react'
import { tata,tata1 } from './A'
const B = () => {
    const um=useContext(tata);
    const no=useContext(tata1);
  return (
    <div>
      <h1>{um} and {no} </h1>
    </div>
  )
}

export default B
