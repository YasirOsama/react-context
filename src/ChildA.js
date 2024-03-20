import React, { createContext } from 'react'
import { ChildB } from './ChildB'
const vata=createContext();
const vata1=createContext();
const ChildA = () => {
   const team="karachi"
   const capital="sindh";
  return (
    <div>
        < vata.Provider value={team}>
            <vata1.Provider value={capital}>
        <ChildB/>
        </vata1.Provider>
        </vata.Provider>
     
    </div>
  )
}

export default ChildA
export {vata,vata1}