import React, { useState } from 'react'

const Form = () => {
  const [name, setname] = useState('')
  const [psd, setpsd] = useState('')


  const changehandler = (e) => {
    // console.log(e.target.name)
    if (e.target.name == 'tanvir') {
      const capname = (e.target.value).toUpperCase();
      setname(capname)
    }
    else {
      const lname = (e.target.value).toLowerCase()
      setpsd(lname)

    }
  }
  return (
    <div>
      <h1> the components that react control is called controled components that controls dom is called uncontrolled components</h1>
      <form className='app'>
        <label >first name</label><br />
        <input type='text' name='tanvir' value={name} onChange={changehandler}></input><br />
        <label>password</label><br />
        <input type='text' name='password' value={psd} onChange={changehandler}></input>

      </form>
    </div>
  )
}

export default Form
