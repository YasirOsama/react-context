import React, { createContext } from 'react'
import B from './B'
const tata=createContext();
const tata1=createContext();

const A = () => {
   const age=23;
   const no=87;
  return (
    <div>
        <tata.Provider value={age}>
         <tata1 .Provider value={no}>
          
        <B/>
        </tata1 .Provider>
        </tata.Provider>
     
    </div>
  )
}

export default A
export {tata,tata1};