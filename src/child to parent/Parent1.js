import React from 'react'
import Child1 from './Child1'
import { data } from '../App'

const Parent1 = () => {
    function getdata(anyname){
       console.log(anyname)
    }
  return (
    <div>
      <Child1 getdata={getdata}/>
    </div>
  )
}

export default Parent1
