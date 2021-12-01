import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';


class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            nIK: '',
            Address: '',
            Gender: '',
            Religion: '',
            birthDayDate: '',
            birthPlace: '',
            phoneNumber: '',
            maritalStatus: '',
            dayEnterCompany: '',
            dayOutCompany: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changenIKHandler = this.changenIKHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeReligionHandler = this.changeReligionHandler.bind(this);
        this.changebirthDayDateHandler = this.changebirthDayDateHandler.bind(this);
        this.changebirthPlaceHandler = this.changebirthPlaceHandler.bind(this);
        this.changephoneNumberHandler = this.changephoneNumberHandler.bind(this);
        this.changemaritalStatusHandler = this.changemaritalStatusHandler.bind(this);
        this.changedayEnterCompanyHandler = this.changedayEnterCompanyHandler.bind(this);
        this.changedayOutCompanyHandler = this.changedayOutCompanyHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({firstName: employee.firstName,
                    lastName: employee.lastName,
                    nIK : employee.nIK,
                    Address: employee.Address,
                    Gender:  employee.Gender,
                    Religion: employee.Religion,
                    birthDayDate: employee.birthDayDate,
                    birthPlace: employee.birthPlace,
                    phoneNumber: employee.phoneNumber,
                    maritalStatus: employee.maritalStatus,
                    dayEnterCompany: employee.dayEnterCompany,
                    dayOutCompany: employee.dayOutCompany
                });
            });
        }
        
    }

    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, nIK: this.state.nIK,
        Address: this.state.Address, Gender: this.state.Gender, Religion: this.state.Religion, birthDayDate: this.state.birthDayDate,
    birthPlace: this.state.birthPlace, phoneNumber: this.state.phoneNumber, maritalStatus: this.state.maritalStatus,
dayEnterCompany: this.state.dayEnterCompany, dayOutCompany: this.state.dayOutCompany };
        console.log('employee => ' + JSON.stringify(employee));

        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/employees');
            });
        }

        
    }

    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }
    changenIKHandler= (event) => {
        this.setState({nIK: event.target.value});
    }
    changeAddressHandler= (event) => {
        this.setState({Address: event.target.value});
    }
    changeGenderHandler= (event) => {
        this.setState({Gender: event.target.value});
    }
    changeReligionHandler= (event) => {
        this.setState({Religion: event.target.value});
    }
    changebirthDayDateHandler= (event) => {
        this.setState({birthDayDate: event.target.value});
    }
    changebirthPlaceHandler= (event) => {
        this.setState({birthPlace: event.target.value});
    }
    changephoneNumberHandler= (event) => {
        this.setState({phoneNumber: event.target.value});
    }
    changemaritalStatusHandler= (event) => {
        this.setState({maritalStatus: event.target.value});
    }
    changedayEnterCompanyHandler= (event) => {
        this.setState({dayEnterCompany: event.target.value});
    }
    changedayOutCompanyHandler= (event) => {
        this.setState({dayOutCompany: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees')
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className = "text-center">Add Employee</h3>
        }else{
            return <h3 className = "text-center">Update Employee</h3>
        }
    }
    render() {
        return (
            <div>
                <div className = "container" style={{marginBottom: "123px", marginTop: "100px"}}>
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                    <label> NIK: </label>
                                        <input placeholder="NIK" name="nIK" className="form-control"
                                            value={this.state.nIK} onChange={this.changenIKHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Address </label>
                                        <input placeholder="Address" name="Address" className="form-control"
                                            value={this.state.Address} onChange={this.changeAddressHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Gender: </label>
                                        <input placeholder="Gender" name="Gender" className="form-control"
                                            value={this.state.Gender} onChange={this.changeGenderHandler}/>
                                </div>

                                <div className = "form-group">
                                    <label> Religion: </label>
                                        <input placeholder="Religion" name="Religion" className="form-control"
                                            value={this.state.Religion} onChange={this.changeReligionHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Birthday Date: </label>
                                        <input placeholder="Birthday Date" name="birthDayDate" className="form-control"
                                            value={this.state.birthDayDate} onChange={this.changebirthDayDateHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Birthplace: </label>
                                        <input placeholder="Birthplace" name="birthPlace" className="form-control"
                                            value={this.state.birthPlace} onChange={this.changebirthPlaceHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Phone Number: </label>
                                        <input placeholder="Phone Number" name="phoneNumber" className="form-control"
                                            value={this.state.phoneNumber} onChange={this.changephoneNumberHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Marital Status: </label>
                                        <input placeholder="Marital Status" name="maritalStatus" className="form-control"
                                            value={this.state.maritalStatus} onChange={this.changemaritalStatusHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Day Entered Company: </label>
                                        <input placeholder="Day Entered Company" name="dayEnterCompany" className="form-control"
                                            value={this.state.dayEnterCompany} onChange={this.changedayEnterCompanyHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Day Out Company: </label>
                                        <input placeholder="Day Out Company" name="dayOutCompany" className="form-control"
                                            value={this.state.dayOutCompany} onChange={this.changedayOutCompanyHandler}/>
                                </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateEmployee} style={{marginTop: "15px"}}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginTop: "15px",marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CreateEmployeeComponent;