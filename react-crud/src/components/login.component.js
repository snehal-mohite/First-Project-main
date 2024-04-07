import React, { Component } from "react";
import EmployeeDataService from "../services/employee.service";
import '../css/main.css';
import Search from "./search.component";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router";
//import logo from '../images/agiliad-logo.png'
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.newEmployee = this.newEmployee.bind(this);
    this.validating=this.validating.bind(this);
    
    this.state = {
      id: null,
      UserName: "",
      Password: "", 
      selectedOption: "",
      submitted: false
    };
  }

  onChangeUserName(e) {
    this.setState({
      UserName: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      Password: e.target.value
    });
  }
  validating(){
    if(this.state.UserName==="")
    {
      alert("Please Fill All fields")
      
    }
    if(this.state.Password==="")
    {
      alert("Please Fill All fields")
    
    }

  }

  saveUser() {
    var data = {
      UserName: this.state.UserName,
      Password: this.state.Password,
      selectedOption: this.state.selectedOption
    };



    EmployeeDataService.login(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          UserName: response.data.UserName,
          Password: response.data.Password,
          // selectedOption: response.data.selectedOption,
          submitted: true
        });
        console.log(response.data);
        if(response.status === 200){
          alert(response.data);
          this.props.handleChange(true,response.data.id, this.state.selectedOption);
        }

        this.newEmployee();
      })
      .catch(e => {
        console.log(e);
      });
  }

  newEmployee() {
    this.setState({
      id: null,
      UserName: "",
      Password: "",
      submitted: false
    });
  }
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
      <div className="search">
          {/* <form action= "/login"  method="POST"> */}
              <input className="small" 
              type="text" 
              value= {this.state.UserName}
              name="UserName" 
              id="username" 
              placeholder="Username" 
              onChange={this.onChangeUserName}/>
              <input className="small" 
              type="password" 
              value={this.state.Password} 
              name="Password" 
              id="password" 
              placeholder="password" 
              onChange={this.onChangePassword}/>    
              <div className="check">
                  <input className="rbtn" 
                  type="radio" checked
                  value="employee"
                  name="typ"
                  onChange={(e) =>{this.setState({selectedOption:e.target.value})}}
                  ></input> Employee
                  <input className="rbtn" 
                  type="radio" 
                  value="HR"
                  name="typ"
                  onChange={(e) =>{this.setState({selectedOption:e.target.value})}}
                  ></input> HR
                  <input className="rbtn" 
                  type="radio" 
                  value="Admin"
                  name="typ"
                  onChange={(e) =>{this.setState({selectedOption:e.target.value})}}
                  ></input> Admin
              </div>
              <button className="btnsubmit" onClick={() => {
                        this.validating();
                        this.saveUser();
                      }}type="submit" value="Submit" >Login</button>
              <a href="#">Forgot password ?</a>
          {/* </form> */}
      </div>
      
  </div>
        
    )
  }
}