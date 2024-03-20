import React, { useMemo, useState } from 'react'

const Usememo = () => {
    const [add, setadd] = useState(0);
    const [minus, setminius] = useState(100)
    const addition = () => {
        setadd(add + 1)
    }

    const maltiplication = useMemo(function multi() {
        console.log("*****")
        return add * 10;
    }, [add])

    return (
        <div>
            <h1>useMemo is used to good performance of the app
                . it return memorized value and callback return a memorized function</h1>
            <h1>learning usememo</h1>
            {maltiplication} <br />
            <button onClick={addition}>Addition</button>
            <span>{add}</span>
            <br />

            <button onClick={() => setminius(minus - 1)}>subtration</button>
            <span>{minus}</span>
        </div>
    )
}

export default Usememo
