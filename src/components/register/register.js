import React, { useState} from  "react"
import "./register.css"

const Register = () => {

    const [ user, setUser]= useState({
        firstname:"",
        lastname:"",
        username:"",
        password:"",
        email:"",
        number:""


    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
}


    return (
        <div className="register">
        <h1>Register</h1>
        <input type="text" name="firstname" value={user.firstname} placeholder="Enter your firstname" onChange={ handleChange}></input> 
        <input type="text" name="lastname" value={user.lastname} placeholder="Enter your lastname" onChange={ handleChange}></input>
        <input type="text" name="username" value={user.username} placeholder="Enter your username" onChange={ handleChange}></input>
        <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={ handleChange}></input>
        <input type="email" name="email" value={user.email} placeholder="Enter your Email" onChange={ handleChange}></input>
        <input type="number" name="number" value={user.number} placeholder="Enter your number" onChange={ handleChange}></input>
        <div className="button">Register</div>
        <div>or</div>
        <div className="button">Login</div>
    </div>
    )
}
export default Register
