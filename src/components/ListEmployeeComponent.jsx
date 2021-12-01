import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Icon } from './Signin/SigninElements';
import {NavBtnLink2} from './Navbar/NavbarElements';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }

    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }

    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add')
    }

    render() {
        return (
            <div style={{background: "#01bf71", transform: "width 2s"}}>
                <Icon to="/">Harvest STMIK</Icon>
                <div className="container">
                    <div style={{marginBottom: "0px", marginTop: "50px"}}>
                        <h2 className="text-center">Employees List</h2>
                        <div className = "row"> 
                            <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee </button>
                        </div>
                        <div className = "row">
                                <table className = "table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th> Employee First Name</th>
                                            <th> Employee Last Name</th>
                                            <th> Employee NIK</th>
                                            <th> Address </th>
                                            <th> Phone Number </th>
                                            <th> Gender </th>
                                            <th> Religion </th>
                                            <th> Birthday Date </th>
                                            <th> Birth Place </th>
                                            <th> Marital Status </th>
                                            <th> Day Entered </th>
                                            <th> Day Left </th>
                                            <th> Actions</th>





                                            
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            this.state.employees.map(
                                                employee =>
                                                <tr key = {employee.id}>
                                                    <td> {employee.firstName} </td>
                                                    <td> {employee.lastName} </td>
                                                    <td> {employee.nIK} </td>
                                                    <td> {employee.Address} </td>
                                                    <td> {employee.phoneNumber} </td>
                                                    <td> {employee.Gender} </td>
                                                    <td> {employee.Religion} </td>
                                                    <td> {employee.birthDayDate} </td>
                                                    <td> {employee.birthPlace} </td>
                                                    <td> {employee.maritalStatus} </td>
                                                    <td> {employee.dayEnterCompany} </td>
                                                    <td> {employee.dayOutCompany} </td>
                                                    <td>
                                                        <button onClick = { () => this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                                        <button style= {{marginLeft: "10px"}} onClick = { () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                                        <button style= {{marginLeft: "10px"}} onClick = { () => this.viewEmployee(employee.id)} className="btn btn-info">View</button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>

                                </table>

                        </div>
                    
                    </div>
                </div>
                <NavBtnLink2 to="/position"  >Position</NavBtnLink2>
                <NavBtnLink2 to="/hierarchy"  >Hierarchy</NavBtnLink2>
                <NavBtnLink2 to="/leaveofabsence"  >Leave of Absence</NavBtnLink2>
            </div>
           
            
        );
    }
}

export default ListEmployeeComponent;