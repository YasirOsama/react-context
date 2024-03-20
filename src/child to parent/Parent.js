import React from 'react'
import Child from './Child'

const Parent = () => {
  const functionname=(anyname)=>{
console.log(anyname)
  }
    
  return (
    <div>
      <Child phone={functionname}/>
    </div>
  )
}

export default Parent

// function getdata(data){
//   console.log(data)

// }