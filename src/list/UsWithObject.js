import React, { useState } from 'react'

const UsWithObject = () => {
    // usestate hook with object
    const [allvalue, setvalue] = useState({ firstname: "ammar", lastname: "yasir" })
    const HashChangeEvent=()=>{
        setvalue({...allvalue,firstname:"tanvir",lastname:"afzal"})
    }
    return (
        <div>
            <h1>first name is {allvalue.firstname} and last name is {allvalue.lastname} </h1>
            <button onClick={HashChangeEvent}>change</button>
        </div>
    )
}

export default UsWithObject