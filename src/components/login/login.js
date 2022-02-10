import React, { useState } from  "react"
import "./login.css"
//import { useState } from "react"

const Login=()=>{

    const [ user, setUser]= useState({
        
        username:"",
        password:"",
        


    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
}

    return (
        <div className="login">
            {console.log(user)}
            <h1>Login</h1>
            <input type="text" name="username" value={user.username} onChange={handleChange}placeholder="Enter your username"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password"></input>
            <div className="button">Login</div>
            <div>or</div>
            <div className="button">Register</div>
        </div>
    )
}
export default Login