import React, { Component } from "react";
import EmployeeDataService from "../services/employee.service";
import profilepic from '../images/photo1.jpg';
import '../css/list.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";


export default class EmployeesList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchSkill = this.onChangeSearchSkill.bind(this);
    this.retrieveEmployees = this.retrieveEmployees.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveEmployee = this.setActiveEmployee.bind(this);
    //this.removeAllEmployees = this.removeAllEmployees.bind(this);
    this.searchSkill = this.searchSkill.bind(this);

    this.state = {
      Employees: [],
      currentEmployee: null,
      currentIndex: -1,
      searchSkill: ""
    };
  }

  componentDidMount() {
    this.retrieveEmployees();
  }

  onChangeSearchSkill(e) {
    const searchSkill = e.target.value;

    this.setState({
      searchSkill: searchSkill
    });
  }

  retrieveEmployees() {
    EmployeeDataService.getAll()
      .then(response => {
        this.setState({
          employees: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveEmployees();
    this.setState({
      currentEmployee: null,
      currentIndex: -1
    });
  }

  setActiveEmployee(employee, index) {
    this.setState({
      currentEmployee: employee,
      currentIndex: index
    });
  }

//   removeAllTutorials() {
//     TutorialDataService.deleteAll()
//       .then(response => {
//         console.log(response.data);
//         this.refreshList();
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   }

  searchSkill() {
    EmployeeDataService.findBySkill(this.state.searchSkill)
      .then(response => {
        this.setState({
          employees: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    const { searchSkill, employees, currentEmployee, currentIndex } = this.state;

    return (
      <div action="">
          <div className="row" >
              <div className="col-5" >
                  <ul className="list-group" type="none">
                      <li><input type="text"className="prop" placeholder="Search by Name" value={searchSkill}onChange={this.onChangeSearchSkill}></input> <button onClick={this.searchSkill} className="btn searchbtn btn-primary">Search</button></li>
                  </ul>
                  <hr/>
                  <ul className="list-group emplist">
                      {employees && employees.map((employee, index) => (
                          <li className={"list-group-item list-group-item-action" +(index === currentIndex ? "active" : "")}onClick={() => this.setActiveEmployee(employee, index)}key={index}>
                            <div className="row">
                              <div className="col-8">
                              <b> {employee.userName} </b>  <p>{employee.Domain}</p>
                              </div>
                              <div className="col right">
                                
                                <button type="button" class="btn listbtn btn-success"><i class="fa fa-pencil fa-2x" aria-hidden="true"></i></button>
                                <button type="button" class="btn listbtn btn-danger"><i className="fa fa-trash fa-2x"></i></button>
                                
                              </div>
                            </div>
                          </li>
                      ))}
                  </ul>
              </div>
              {currentEmployee ? (
              <div className="col details">
                <div className="details">
                  <div className="row">
                      <div className="col-3">
                          <img className="avatar" src={profilepic} alt=""></img>
                      </div>
                      <div className="col">
                          <h3>{currentEmployee.employeename} </h3>
                          <h6>{currentEmployee.employeeid}</h6>
                          <h6>{currentEmployee.username}</h6>
                          <h6>{currentEmployee.domain}</h6>
                      </div>
                  </div>
                  <br/>
                  <div className="row" >
                      <div className="col-4">
                          <ul type="none">
                              <li> <b> <h5> Skills </h5> </b> </li>
                                  <ul>
                                      <li>{currentEmployee.skills}</li>
                                  </ul>
                              <li> <b> <h5> Tools </h5> </b> </li>
                                  <ul>
                                      <li>{currentEmployee.tools}</li>
                                  </ul>
                              <li> <b> <h5> Domain </h5> </b> </li>
                                  <ul>
                                      <li>{currentEmployee.domain}</li>
                                  </ul>
                              <li> <b> <h5> Exerience </h5> </b> </li>
                                  <ul>
                                      <li>{currentEmployee.experience}</li>
                                  </ul>
                          </ul>
                      </div>
                      <div className="col">
                          <ul type="none">
                              <li> <b> <h5> Project Title </h5> </b> </li>
                                  <ul>
                                      <li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro similique eligendi minus recusandae, deleniti quaerat aut officiis commodi veritatis magnam odio, unde natus omnis assumenda explicabo amet molestiae error?  </li>
                                  </ul>
                          </ul>
                      </div>
                  </div>
                  <center><button className="btn btn-primary">Edit</button></center>
                </div>
              </div>
              ): (
                  <div className="col " >
                    <div className="">
                      <br/>
                      
                    </div>
                  </div>
                )}
              
          </div>
          
      </div>
    );
  }
}
