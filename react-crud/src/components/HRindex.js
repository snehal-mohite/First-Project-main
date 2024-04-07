import React, { Component, useReducer, useState } from 'react'
import '../css/main.css';
// import profilepic from '../images/photo1.jpg'
import axios from 'axios';

const HRadding = () =>{
    

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
                        <input className="small" type="password" value={user.password} name="password" id="password" placeholder="Password" onChange={handleChange}/>    
                        <input className="small" type="password" value={user.domain} name="domain" id="domain" placeholder="Domain" onChange={handleChange}/> 
                        <input className="btnsubmit" type="submit" value="Submit" />
                    {/* </form> */}
                </div>
                
            </div>
            
        )
    }
export default HRadding;