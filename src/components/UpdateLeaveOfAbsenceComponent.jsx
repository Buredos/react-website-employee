import React, { Component } from 'react';
import LeaveOfAbsenceService from '../services/LeaveOfAbsenceService';

class UpdateLeaveOfAbsenceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nik: '',
            leave_id: '',
            type_of_leave: '',
            amount_of_leave:''
        }
        this.changenikHandler = this.changenikHandler.bind(this);
        this.changeleave_idHandler = this.changeleave_idHandler.bind(this);
        this.changetype_of_leaveHandler = this.changetype_of_leaveHandler.bind(this);
        this.changeamount_of_leaveHandler = this.changeamount_of_leaveHandler.bind(this);
        this.UpdateLeaveOfAbsence = this.UpdateLeaveOfAbsence.bind(this);
    }

    componentDidMount(){
        LeaveOfAbsenceService.getLeaveOfAbsenceById(this.state.id).then( (res) =>{
            let leaveofabsence = res.data;
            this.setState({nik: leaveofabsence.nik,
                leave_id: leaveofabsence.leave_id,
                type_of_leave : leaveofabsence.type_of_leave,
                amount_of_leave: leaveofabsence.amount_of_leave
            });
        });
    }

    UpdateLeaveOfAbsence = (e) => {
        e.preventDefault();
        let leaveofabsence = {nik: this.state.nik, leave_id: this.state.leave_id, type_of_leave: this.state.type_of_leave, amount_of_leave: this.amount_of_leave};
        console.log('leaveofabsence => ' + JSON.stringify(leaveofabsence));
        
        EmployeeService.updateLeaveOfAbsence(employee, this.state.id).then( res => {
            this.props.history.push('/leaveofabsence');
        });
    }

    changenikHandler= (event) => {
        this.setState({nik: event.target.value});
    }

    changeleave_idHandler= (event) => {
        this.setState({leave_id: event.target.value});
    }

    changetype_of_leaveHandler= (event) => {
        this.setState({type_of_leave: event.target.value});
    }
    changeamount_of_leaveHandler= (event) => {
        this.setState({amount_of_leave: event.target.value});
    }


    cancel(){
        this.props.history.push('/leaveofabsence')
    }
    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center">Update Leave of Absence</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> NIK: </label>
                                        <input placeholder="NIK" name="nik" className="form-control"
                                            value={this.state.nik} onChange={this.changenikHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Leave id: </label>
                                        <input placeholder="Leave id" name="leave_id" className="form-control"
                                            value={this.state.leave_id} onChange={this.changeleave_idHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Type of Leave </label>
                                        <input placeholder="Type of Leave" name="type_of_leave" className="form-control"
                                            value={this.state.type_of_leave} onChange={this.changetype_of_leaveHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Amount of Leave </label>
                                        <input placeholder="Amount of Leave" name="amount_of_leave" className="form-control"
                                            value={this.state.amount_of_leave} onChange={this.changeamount_of_leaveHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateLeaveOfAbsence}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateLeaveOfAbsenceComponent;