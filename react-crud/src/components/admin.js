import React, { Component } from "react";
import EmployeeDataService from "../services/employee.service";
import '../css/main.css';
import usericon from "../images/add-user.jpg"
import listicon from "../images/list-icon.png"
export default class Admin extends Component {

  render() {
    return (      
        <div>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossorigin="anonymous"
            />
            {/* Main Content */}
            <div className="container adashboard">
                <button className="tabs" href="#"><img className="icons" src={usericon} alt=""></img></button>                
                <button className="tabs" href="#"><img className="icons" src={listicon} alt=""></img></button>
            </div>
        </div>
        
    )
    
  }
}
