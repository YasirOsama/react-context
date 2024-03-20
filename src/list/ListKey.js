import React from 'react'
// how map() is work in react
const List = () => {
  // one methad
  const psl=['csk','mi','rcb','csk','lhr'];
  const result=psl.map((val,index)=><h1 key={index}>{val} index is{index}</h1>)
  // second method
   const car=['toyota','honda','suzuki'];
  return (
    <div>
       <h1>{result}</h1>
    {car.map((anyname,index)=> <h1 key={index}>{anyname} index is {index}</h1>)} 
    </div>
  )
}

export default List