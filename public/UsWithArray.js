import React, { useState } from 'react'

const UsWithArray = () => {
    const [items,setitem]=useState([])
   console.log(items);
    function change(){
        setitem([...items,{
            id: "items.length",
            name:Math.random()
        }])
    }
  return (
    <div>
        <ol>
            {items.map((item)=>
                <li key={item.id}>{item.name}</li>
            )}
        </ol>
        //  ya khud kia hy
       {/* <h2>{items.map((anyname)=>
       (<li key={anyname.id}>{anyname.name} </li>))}</h2> */}

      
      <button onClick={change}>change</button>
     
    </div>
  )
}

export default UsWithArray
