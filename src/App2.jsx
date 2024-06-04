import {useState} from 'react'

function ReactHookUsingObj(initialState){
    const [value, setValue] = useState(initialState)
    function onChange(e){
        setValue(e.target.value)
    }
    function clearInput(){
        setValue("")
    }
    return {value, onChange, clearInput}
}

function App2() {
    const handleOnSubmit = (e)=>{
        e.preventDefault()
        console.log(userName.value,email.value,password.value)
        userName.clearInput()
        email.clearInput()
        password.clearInput()
    }

    const userName = ReactHookUsingObj("")
    const email = ReactHookUsingObj("")
    const password = ReactHookUsingObj("")
  return (
    <div>
        <form onSubmit={handleOnSubmit}>
            <label htmlFor="userName">Username</label>
            <input type="text" id="userName" value={userName.value} onChange={userName.onChange}/>
            <br />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={email.value}  onChange={email.onChange}/>
            <br />
            <label htmlFor="password">Password</label>
            <input type="text" id="password" value={password.value} onChange={password.onChange} />
            <br />
            <button type="submit" id="submit">Submit</button>
        </form>
    </div>
  )
}

export default App2