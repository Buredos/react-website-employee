import React, { Component } from 'react';
import LeaveOfAbsenceService from '../services/LeaveOfAbsenceService';


class ViewLeaveOfAbsenceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            leaveofabsence: {}
        }

    }

    componentDidMount(){
        LeaveOfAbsenceService.getLeaveOfAbsenceById(this.state.id).then( res => {
            this.setState({leaveofabsence: res.data});
        });
    }

    cancel(){
        this.props.history.push('/leaveofabsence')
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">Viewing Leave of Absence Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> NIK: </label>
                            <div> {this.state.leaveofabsence.nIK} </div>
                        </div>
                        <div className = "row">
                            <label> Leave id: </label>
                            <div> {this.state.leaveofabsence.leaveId} </div>
                        </div>
                        <div className = "row">
                            <label> Type of Leave: </label>
                            <div> {this.state.leaveofabsence.typeOfLeave} </div>
                        </div>
                        <div className = "row">
                            <label> Amount of Leave: </label>
                            <div> {this.state.leaveofabsence.amountOfLeave} </div>
                        </div>
                    </div>
                     <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Go back</button>
                </div>
                
            </div>
        );
    }
}

export default ViewLeaveOfAbsenceComponent;