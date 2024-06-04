import React from 'react'
import { useState,useEffect } from 'react'

function ReactHooksUsingArray(initialState){
    const [value, setValue] = useState(initialState)

    function onChange (e){
        setValue(e.target.value)
    }
    function clearValue (e){
        setValue("")
    }

    return [value, onChange, clearValue]
}

function App1() {
    const [userName, changeUserName,clearUsername] = ReactHooksUsingArray("")
    const [email,changeEmail,clearEmail] = ReactHooksUsingArray("")
    const [password,changePassword,clearPassword] = ReactHooksUsingArray('')
    const handleOnSubmit = (e)=>{
        e.preventDefault()
        console.log(userName,email,password)
        clearUsername()
        clearEmail()
        clearPassword()
    }
  return (
    <div>
        <form onSubmit={handleOnSubmit}>
            <label htmlFor="userName">Username</label>
            <input type="text" id="userName" value={userName} onChange={changeUserName}/>
            <br />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={email}  onChange={changeEmail}/>
            <br />
            <label htmlFor="password">Password</label>
            <input type="text" id="password" value={password} onChange={changePassword} />
            <br />
            <button type="submit" id="submit">Submit</button>
        </form>
    </div>
  )
}

export default App1