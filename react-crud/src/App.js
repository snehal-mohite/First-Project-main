import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header";
import Update from "./components/update.component";
import Forgot from "./components/forgot.component";
import Login from "./components/login";
import Admin from "./components/admin";
import Register from "./components/register.component";
import Employee from "./components/employee.component";
import AddHr from "./components/add.hr.component";
import EmployeeList from "./components/employee-list.component";
class App extends Component {
  render() {
    return (

        <div className="container mt-3">
          <BrowserRouter>
          <Header />
          <Switch>
            {/* <Route exact path={["/", "/employees/register"]} component={Register}} /> */}
            <Route exact path="/" component={Update} />
            
            <Route path="/employees/:id" component={Employee} />
          </Switch>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;