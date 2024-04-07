import React, { Component } from "react";
import EmployeeDataService from "../services/employee.service";
import '../css/main.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
export default class Update extends Component {
  
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
            <center>
            <div className="updatepanel" >
              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label"><i class="fa fa-user fa-2x" aria-hidden="true"></i></label>
                <div class="col-sm-10">
                  <input type="text" class="prop" id="inputPassword"></input>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label"><i class="fa fa-envelope fa-2x" aria-hidden="true"></i></label>
                <div class="col-sm-10">
                  <input type="email" class="prop" id="inputPassword"></input>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label"><i class="fa fa-key fa-2x" aria-hidden="true"></i></label>
                <div class="col-sm-10">
                  <input type="password" class="prop" id="inputPassword"></input>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label"><i class="fa fa-slack fa-2x" aria-hidden="true"></i></label>
                <div class="col-sm-10">
                  <input type="text" class="prop" id="inputPassword"></input>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label"><i class="fa fa-cogs fa-2x" aria-hidden="true"></i></label>
                <div class="col-sm-10">
                  <input type="text" class="prop" id="inputPassword"></input>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label"><i class="fa fa-area-chart fa-2x" aria-hidden="true"></i></label>
                <div class="col-sm-10">
                  <input type="text" class="prop" id="inputPassword"></input>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label"><i class="fa fa-flask fa-2x" aria-hidden="true"></i></label>
                <div class="col-sm-10">
                  <input type="number" class="prop" id="inputPassword"></input>
                </div>
              </div>

              <input className="small btnsubmit" type="submit" value="Send OTP"></input>
            </div>
            </center>
        </div>
        
    )
    
  }
}
