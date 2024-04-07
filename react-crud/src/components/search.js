import axios from 'axios';
import React, { Component, useState } from 'react'
//  import { post } from '../../../../BackEnd/routes';
import '../css/main.css';
import profilepic from '../images/photo1.jpg'
//const fs = require('fs');
//const path = require('path');

const Search = () =>{
    const [skill,setSkill]= useState({
        "search": "",
    })

    const handleChange = e =>{
        const {name,value} = e.target
        setSkill({
            ...skill,
            [name]: value
        })
    }
    const [employee, setEmployee] = useState({
        "id": "",
        "username": "",
        "skills": "",
        "domain": "",
        "Experience":"" 
    })
    let storedata= "";
async function searchd (){
    console.log(skill);
    axios.post("http://localhost:3000/search",skill).then (response => {
        storedata = response.data;
    
    setEmployee(storedata);
    console.log(storedata[0].id);
    console.log(storedata.id);
    console.log(storedata);
    console.log(employee.username);
})
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
                <div className="Search">
                    <input class="prop" type="text" name="search" value={skill.search} id="search" placeholder="Search" onChange={handleChange} /><br/>
                    <input className="prop btnsubmit small" onClick={searchd} type="submit" value="Submit" />
                    <hr size="3" width="80%"  />
                    <div class="block">
                        <div class="row">
                            <div class="col-2 imgcol">
                                <img src={profilepic} alt="" class="avatar"></img>
                            </div>
                            <div class="col">
                                <ul type="none">
                                    <li>Employee Name:{employee.username}</li><br/>
                                    <li>Employee ID:{employee.id}</li><br/>
                                    <li>Skills:{employee.skills}</li>
                                </ul>
                            </div>
                            <div class="col">
                                <ul type="none">
                                    <li>Tools:{employee.domain}</li><br/>
                                    <li>Domain:{employee.domain}</li><br/>
                                    <li>Experience:{employee.Experience}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        )
    }
    export default Search;