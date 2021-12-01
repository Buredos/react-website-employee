import React, { Component } from 'react';
import LeaveOfAbsenceService from '../services/LeaveOfAbsenceService';
import { Icon } from './Signin/SigninElements';
import {NavBtnLink2} from './Navbar/NavbarElements';

class ListLeaveOfAbsenceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            leaveofabsence: []
        }
        this.addLeaveOfAbsence = this.addLeaveOfAbsence.bind(this);
        this.editLeaveOfAbsence = this.editLeaveOfAbsence.bind(this);
        this.deleteLeaveOfAbsence = this.deleteLeaveOfAbsence.bind(this);
    }

    deleteLeaveOfAbsence(id){
        LeaveOfAbsenceService.deleteLeaveOfAbsence(id).then( res => {
            this.setState({leaveofabsence: this.state.leaveofabsence.filter(leaveofabsence => leaveofabsence.id !== id)});
        });
    }

    viewLeaveOfAbsence(id){
        this.props.history.push(`/view-leaveofabsence/${id}`);
    }

    editLeaveOfAbsence(id){
        this.props.history.push(`/add-leaveofabsence/${id}`);
    }

    componentDidMount(){
        LeaveOfAbsenceService.getLeaveOfAbsence().then((res) => {
            this.setState({ leaveofabsence: res.data});
        });
    }

    addLeaveOfAbsence(){
        this.props.history.push('/add-leaveofabsence/_add')
    }

    render() {
        return (
            <div style={{background: "#01bf71", transform: "width 2s"}}>
                <Icon to="/">Harvest STMIK</Icon>
                <div className="container">
                    <div style={{marginBottom: "0px", marginTop: "50px"}}>
                        <h2 className="text-center">Leave of Absence List</h2>
                        <div className = "row"> 
                            <button className="btn btn-primary" onClick={this.addLeaveOfAbsence}> Add Leave of Absence </button>
                        </div>
                        <div className = "row">
                                <table className = "table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th> NIK</th>
                                            <th> Leave Id</th>
                                            <th> Type of Leave</th>
                                            <th> Amount of Leave</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            this.state.leaveofabsence.map(
                                                leaveofabsence =>
                                                <tr key = {leaveofabsence.id}>
                                                    <td> {leaveofabsence.nIK} </td>
                                                    <td> {leaveofabsence.leaveId} </td>
                                                    <td> {leaveofabsence.typeOfLeave} </td>
                                                    <td> {leaveofabsence.amountOfLeave} </td>
                                                    <td>
                                                        <button onClick = { () => this.editLeaveOfAbsence(leaveofabsence.id)} className="btn btn-info">Update</button>
                                                        <button style= {{marginLeft: "10px"}} onClick = { () => this.deleteLeaveOfAbsence(leaveofabsence.id)} className="btn btn-danger">Delete</button>
                                                        <button style= {{marginLeft: "10px"}} onClick = { () => this.viewLeaveOfAbsence(leaveofabsence.id)} className="btn btn-info">View</button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>

                                </table>

                        </div>
                    
                    </div>
                </div>
                <NavBtnLink2 to="/employees"  >Employees</NavBtnLink2>
                <NavBtnLink2 to="/position"  >Position</NavBtnLink2>
                <NavBtnLink2 to="/hierarchy"  >Hierarchy</NavBtnLink2>
            </div>
           
            
        );
    }
}

export default ListLeaveOfAbsenceComponent;