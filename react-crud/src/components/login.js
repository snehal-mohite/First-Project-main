import React, { Component, useReducer, useState } from 'react'
import '../css/main.css';
// import profilepic from '../images/photo1.jpg'
import axios from 'axios';

const Login = () =>{
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
const logind = () =>{
    console.warn(user);
    axios.post("http://localhost8080:/login",user)
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
                <div className="search">
                    {/* <form action= "/login"  method="POST"> */}
                        <input className="small" type="text" value={user.username} name="username" id="username" placeholder="Username" onChange={handleChange}/>
                        <input className="small" type="password" value={user.password} name="password" id="password" placeholder="password" onChange={handleChange}/>    
                        <div className="check">
                            <input className="rbtn" type="radio" value="employee"></input> Employee
                            <input className="rbtn" type="radio" value="HR"></input> HR
                        </div>
                        <input className="btnsubmit" onClick={logind} type="submit" value="Submit" />
                        <a href="#">Forgot password ?</a>
                    {/* </form> */}
                </div>
                
            </div>
            
        )
    }
export default Login;
