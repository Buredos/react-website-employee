import React, { Component } from 'react';
import LeaveOfAbsenceService from '../services/LeaveOfAbsenceService';


class CreateLeaveOfAbsenceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nik: '',
            amount_of_leave: '',
            leave_id: '',
            type_of_leave:''
        }
        this.changenikHandler = this.changenikHandler.bind(this);
        this.changeamountofleaveHandler = this.changeamountofleaveHandler.bind(this);
        this.changeleaveidHandler = this.changeleaveidHandler.bind(this);
        this.changetypeofleaveHandler = this.changetypeofleaveHandler.bind(this);
        this.saveOrUpdateLeaveOfAbsence = this.saveOrUpdateLeaveOfAbsence.bind(this);
    }

    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{
            LeaveOfAbsenceService.getLeaveOfAbsenceById(this.state.id).then( (res) =>{
                let leaveofabsence = res.data;
                this.setState({nik: leaveofabsence.nik,
                    amount_of_leave: leaveofabsence.amount_of_leave,
                    leave_id : leaveofabsence.leave_id
                });
            });
        }
        
    }

    saveOrUpdateLeaveOfAbsence = (e) => {
        e.preventDefault();
        let leaveofabsence = {nik: this.state.nik, amount_of_leave: this.state.amount_of_leave, leave_id: this.state.leave_id, type_of_leave: this.type_of_leave};
        console.log('leaveofabsence => ' + JSON.stringify(leaveofabsence));

        if(this.state.id === '_add'){
            LeaveOfAbsenceService.createLeaveOfAbsence(leaveofabsence).then(res =>{
                this.props.history.push('/leaveofabsence');
            });
        }else{
            LeaveOfAbsenceService.updateLeaveOfAbsence(leaveofabsence, this.state.id).then( res => {
                this.props.history.push('/leaveofabsence');
            });
        }

        
    }

    changenikHandler= (event) => {
        this.setState({nik: event.target.value});
    }

    changeamountofleaveHandler= (event) => {
        this.setState({amount_of_leave: event.target.value});
    }

    changeleaveidHandler= (event) => {
        this.setState({leave_id: event.target.value});
    }
    changetypeofleaveHandler= (event) => {
        this.setState({type_of_leave: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees')
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className = "text-center">Add Leave of Absence</h3>
        }else{
            return <h3 className = "text-center">Update Leave of Absence</h3>
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
                                        <label> NIK: </label>
                                        <input placeholder="NIK" name="nik" className="form-control"
                                            value={this.state.nik} onChange={this.changenikHandler}/>
                                    </div>
                                    
                                    <div className = "form-group">
                                        <label> Leave id </label>
                                        <input placeholder="Leave id" name="leave_id" className="form-control"
                                            value={this.state.leave_id} onChange={this.changeleaveidHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Type of Leave: </label>
                                        <input placeholder="Type of Leave" name="type_of_leave" className="form-control"
                                            value={this.state.type_of_leave} onChange={this.changetypeofleaveHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Amount of Leave: </label>
                                        <input placeholder="Amount of Leave" name="amount_of_leave" className="form-control"
                                            value={this.state.amount_of_leave} onChange={this.changeamountofleaveHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateLeaveOfAbsence} style={{marginTop: "15px"}}>Save</button>
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

export default CreateLeaveOfAbsenceComponent;