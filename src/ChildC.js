import React from 'react'
import { data,data1 } from './App'
import { Child4 } from './Child4'
const ChildC = () => {
  return (
    <div>
      <data.Consumer>
        {
            (name)=>{
                return(
                <data1.Consumer>
                    {
                        (geneder)=>{
                            return(
                                <h1>my name is {name} and geneder is {geneder} </h1>
  )}
                    }
                </data1.Consumer>
               
                )
                  
            }
        }
      </data.Consumer>
       
      <Child4/>
    </div>
  )
}

export default ChildC
