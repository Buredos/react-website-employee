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
                            <label> Leave of Absence NIK: </label>
                            <div> {this.state.leaveofabsence.nik} </div>
                        </div>
                        <div className = "row">
                            <label> Leave of Absence Leave id: </label>
                            <div> {this.state.leaveofabsence.leave_id} </div>
                        </div>
                        <div className = "row">
                            <label> Leave of Absence Type of Leave: </label>
                            <div> {this.state.leaveofabsence.type_of_leave} </div>
                        </div>
                        <div className = "row">
                            <label> Leave of Absence Amount of Leave: </label>
                            <div> {this.state.leaveofabsence.amount_of_leave} </div>
                        </div>
                    </div>
                     <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Go back</button>
                </div>
                
            </div>
        );
    }
}

export default ViewLeaveOfAbsenceComponent;