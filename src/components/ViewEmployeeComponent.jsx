import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';


class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }

    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        });
    }

    cancel(){
        this.props.history.push('/employees')
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">Viewing Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee First Name: </label>
                            <div> {this.state.employee.firstName} </div>
                        </div>
                        <div className = "row">
                            <label> Employee Last Name: </label>
                            <div> {this.state.employee.lastName} </div>
                        </div>
                        <div className = "row">
                            <label> Employee ID: </label>
                            <div> {this.state.employee.nIK} </div>
                        </div>
                        <div className = "row">
                            <label> Employee Address: </label>
                            <div> {this.state.employee.Address} </div>
                        </div>
                        <div className = "row">
                            <label> Gender: </label>
                            <div> {this.state.employee.Gender} </div>
                        </div>
                        <div className = "row">
                            <label> Religion: </label>
                            <div> {this.state.employee.Religion} </div>
                        </div>
                        <div className = "row">
                            <label>  Birthday Date: </label>
                            <div> {this.state.employee.birthDayDate} </div>
                        </div>
                        <div className = "row">
                            <label>  Birthplace: </label>
                            <div> {this.state.employee.birthPlace} </div>
                        </div>
                        <div className = "row">
                            <label>  Phone Number: </label>
                            <div> {this.state.employee.phonenNumber} </div>
                        </div>
                        <div className = "row">
                            <label> Marital Status: </label>
                            <div> {this.state.employee.maritalStatus} </div>
                        </div>
                        <div className = "row">
                            <label> Date Entered Company: </label>
                            <div> {this.state.employee.dayEnterCompany} </div>
                        </div>
                        <div className = "row">
                            <label> Date Resigned: </label>
                            <div> {this.state.employee.dayOutCompany} </div>
                        </div>
                        
                    </div>
                     <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Go back</button>
                </div>
                
            </div>
        );
    }
}

export default ViewEmployeeComponent;