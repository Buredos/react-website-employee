import React, { Component } from 'react';
import LeaveOfAbsenceService from '../services/LeaveOfAbsenceService';


class CreateLeaveOfAbsenceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nIK: '',
            amountOfLeave: '',
            leaveId: '',
            typeOfLeave:''
        }
        this.changenIKHandler = this.changenIKHandler.bind(this);
        this.changeamountOfLeaveHandler = this.changeamountOfLeaveHandler.bind(this);
        this.changeleaveIdHandler = this.changeleaveIdHandler.bind(this);
        this.changetypeOfLeaveHandler = this.changetypeOfLeaveHandler.bind(this);
        this.saveOrUpdateLeaveOfAbsence = this.saveOrUpdateLeaveOfAbsence.bind(this);
    }

    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{
            LeaveOfAbsenceService.getLeaveOfAbsenceById(this.state.id).then( (res) =>{
                let leaveofabsence = res.data;
                this.setState({nIK: leaveofabsence.nIK,
                    amountOfLeave: leaveofabsence.amountOfLeave,
                    typeOfLeave: leaveofabsence.typeOfLeave,
                    leaveId : leaveofabsence.leaveId
                });
            });
        }
        
    }

    saveOrUpdateLeaveOfAbsence = (e) => {
        e.preventDefault();
        let leaveofabsence = {nIK: this.state.nIK, amountOfLeave: this.state.amountOfLeave, leaveId: this.state.leaveId, typeOfLeave: this.state.typeOfLeave};
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

    changenIKHandler= (event) => {
        this.setState({nIK: event.target.value});
    }

    changeamountOfLeaveHandler= (event) => {
        this.setState({amountOfLeave: event.target.value});
    }

    changeleaveIdHandler= (event) => {
        this.setState({leaveId: event.target.value});
    }
    changetypeOfLeaveHandler= (event) => {
        this.setState({typeOfLeave: event.target.value});
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
                                        <label> nIK: </label>
                                        <input placeholder="nIK" name="nIK" className="form-control"
                                            value={this.state.nIK} onChange={this.changenIKHandler}/>
                                    </div>
                                    
                                    <div className = "form-group">
                                        <label> Leave id </label>
                                        <input placeholder="Leave id" name="leaveId" className="form-control"
                                            value={this.state.leaveId} onChange={this.changeleaveIdHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Type of Leave: </label>
                                        <input placeholder="Type of Leave" name="typeOfLeave" className="form-control"
                                            value={this.state.typeOfLeave} onChange={this.changetypeOfLeaveHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Amount of Leave: </label>
                                        <input placeholder="Amount of Leave" name="amountOfLeave" className="form-control"
                                            value={this.state.amountOfLeave} onChange={this.changeamountOfLeaveHandler}/>
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