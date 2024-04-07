import React, { Component } from "react";
import EmployeeDataService from "../services/employee.service";
import '../css/main.css';
export default class AddHr extends Component {

    constructor(props) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeDomain = this.onChangeDomain.bind(this);
    
        this.saveUser = this.saveUser.bind(this);
        this.newEmployee = this.newEmployee.bind(this);
    
        this.state = {
          id: null,
          UserName: "",
          Password: "", 
          Domain: "",
          submitted: false,
          Passerr:"",
          usererr:"",
          domainerr:""
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
    
      onChangeDomain(e) {
        this.setState({
          Domain: e.target.value
        });
      }
       Valid()
       {
        if(this.state.UserName==="" && this.state.domainerr==="")
        {
          this.setState({usererr:"Please enter Username"},{domainerr:"Please enter Domain"})
        }
        else if(this.state.UserName==="" )
         {
           this.setState({usererr:"Please enter Username"})
         }
        else if(this.state.domainerr==="")
         {
           this.setState({domainerr:"Please enter Domain"})
         }
         else{
           return true
         }
         if(! this.state.Password.length<8)
         {
           this.setState({Passerr:"Password lenght shoud be more than 8"})
         }
         
       }
      saveUser() {
        var data = {
          UserName: this.state.UserName,
          Password: this.state.Password,
          Domain : this.state.Domain
        };
        this.setState(
          {Passerr:"",usererr:"",domainerr:""}
        )
        if(this.Valid())
               {
                 alert("Form has been submited");
                 
               }
        EmployeeDataService.registerhr(data)
          .then(response => {
            this.setState({
              id: response.data.id,
              UserName: response.data.UserName,
              Password: response.data.Password,
              Domain : response.data.Domain,
              //published: response.data.published,
               
              submitted: true
            });
            this.newEmployee();
            console.log(response.data);
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
          Domain: "",          //published: false,
    
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
            <div className="search" >
                <input class="small" 
                type="text" 
                value={this.state.UserName}
                name="UserName" 
                id="UserName" 
                onChange={this.onChangeUserName}
                placeholder="Username"></input>
                <p style={{color:"red",fontSize:"20x"}}>{this.state.usererr}</p>
                <input class="small" 
                type="password" 
                value={this.state.Password} 
                name="Password" 
                id="Password"
                onChange={this.onChangePassword}
                placeholder="Password"></input>
                <p style={{color:"red",fontSize:"20x"}}>{this.state.Passerr}</p>
                <input class="small" 
                type="text" 
                value={this.state.Domain} 
                name="Domain" 
                id="Domain" 
                onChange={this.onChangeDomain}
                placeholder="Domain"></input>
                <p style={{color:"red",fontSize:"20x"}}>{this.state.domainerr}</p>
                <input class="small btnsubmit" 
                type="submit" 
                onClick={this.saveUser}
                value="Add"></input>
            </div>
            
        </div>
        
    )

  }
}