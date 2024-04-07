import React, { Component, useReducer, useState } from 'react'
import '../css/main.css';
// import profilepic from '../images/photo1.jpg'
import axios from 'axios';

const Register = () =>{
    const [user,setUser]= useState({
        "username": "",
        "password": ""
    })

    const handleChange = e =>{
        const {name,value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
const registerd = () =>{
    console.log(user);
    axios.post("http://localhost:8080/register",user)
    .then(res => alert(res.data));
}
        return (      
            <div>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                    crossorigin="anonymous"
                />
                {/* Main Content */}
                <div className="register" >
                    {/* <form action= "/register"  method="POST"> */}
                        <img src="agiliad-logo.png" alt=""></img>
                        <input className="prop small" align="center" type="text" value={user.username} name="username" id="username" placeholder="Username" onChange={handleChange}/><br />
                        <input className="prop small" type="password" value={user.password} name="password" id="password" placeholder="password" onChange={handleChange}/><br />
                        <input className="prop btnsubmit small" onClick={registerd} type="submit" value="Submit" /><br />
                        <a href="#">Forgot password ?</a>
                    {/* </form> */}
                </div>
                
            </div>
            
        )
    }
export default Register;