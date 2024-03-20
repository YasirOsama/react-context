import React from 'react'
import { vata ,vata1} from './ChildA'
export const Child4 = () => {
  return (
    <div>
        <vata.Consumer>
        {
            (team)=>{
                return(
                    <vata1.Consumer>
                        {
                            (capital)=>{
                                return(
                                    <h1> team name is : {team} and karachi is capital of: {capital}</h1>
                                )
                            }
                        }
                    </vata1.Consumer>
                    
                )
            }
        }
        </vata.Consumer>
    </div>
  )
}
