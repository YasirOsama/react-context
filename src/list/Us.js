import React, { useState } from 'react'

const Us = () => {
    const [value,setcountry]=useState({brand:"toyata",country:"india"})
    function update(){
        setcountry({...value, brand:"honda",country:"japan"})
    }
  return (
    <div>
        <h1>car brand is {value.brand}  and country is {value.country}</h1>
        <button onClick={update}>update</button>
    </div>
  )
}

export default Us