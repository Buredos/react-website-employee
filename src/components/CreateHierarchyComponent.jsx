import React, { Component } from 'react';
import HierarchyService from '../services/HierarchyService';


class CreateHierarchyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            nik: '',
            posId:''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changenikHandler = this.changenikHandler.bind(this);
        this.changeposIdHandler = this.changeposIdHandler.bind(this);
        this.saveOrUpdateHierarchy = this.saveOrUpdateHierarchy.bind(this);
    }

    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{
            HierarchyService.getHierarchyById(this.state.id).then( (res) =>{
                let hierarchy = res.data;
                this.setState({firstName: hierarchy.firstName,
                    lastName: hierarchy.lastName,
                    nik : hierarchy.nik,
                    posId : hierarchy.posId
                });
            });
        }
        
    }

    saveOrUpdateHierarchy = (e) => {
        e.preventDefault();
        let hierarchy = {firstName: this.state.firstName, lastName: this.state.lastName, nik: this.state.nik, posId: this.state.posId};
        console.log('hierarchy => ' + JSON.stringify(hierarchy));

        if(this.state.id === '_add'){
            HierarchyService.createHierarchy(hierarchy).then(res =>{
                this.props.history.push('/hierarchy');
            });
        }else{
            HierarchyService.updateHierarchy(hierarchy, this.state.id).then( res => {
                this.props.history.push('/hierarchy');
            });
        }

        
    }

    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changenikHandler= (event) => {
        this.setState({nik: event.target.value});
    }
    changeposIdHandler= (event) => {
        this.setState({posId: event.target.value});
    }

    cancel(){
        this.props.history.push('/hierarchy')
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className = "text-center">Add Hierarchy</h3>
        }else{
            return <h3 className = "text-center">Update Hierarchy</h3>
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
                                        <label> NIK </label>
                                        <input placeholder="NIK" name="nik" className="form-control"
                                            value={this.state.nik} onChange={this.changenikHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Pos id </label>
                                        <input placeholder="Pos id" name="posId" className="form-control"
                                            value={this.state.posId} onChange={this.changeposIdHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateHierarchy} style={{marginTop: "15px"}}>Save</button>
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

export default CreateHierarchyComponent;