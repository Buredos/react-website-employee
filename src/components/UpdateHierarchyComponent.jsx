import React, { Component } from 'react';
import HierarchyService from '../services/HierarchyService';

class UpdateHierarchyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            first_name: '',
            last_name: '',
            nik: '',
            pos_id
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changenikHandler = this.changenikHandler.bind(this);
        this.changepos_idHandler = this.changepos_idHandler.bind(this);
        this.updateHierarchy = this.updateHierarchy.bind(this);
    }

    componentDidMount(){
        HierarchyService.getHierarchyById(this.state.id).then( (res) =>{
            let hierarchy = res.data;
            this.setState({first_name: hierarchy.first_name,
                last_name: hierarchy.last_name,
                nik : hierarchy.nik,
                pos_id :hierarchy.pos_id
            });
        });
    }

    updateHierarchy = (e) => {
        e.preventDefault();
        let hierarchy = {first_name: this.state.first_name, last_name: this.state.last_name, nik: this.state.nik, pos_id : this.state.pos_id};
        console.log('hierarchy => ' + JSON.stringify(hierarchy));
        
        HierarchyService.updateHierarchy(hierarchy, this.state.id).then( res => {
            this.props.history.push('/hierarchy');
        });
    }

    changeFirstNameHandler= (event) => {
        this.setState({first_name: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({last_name: event.target.value});
    }

    changenikHandler= (event) => {
        this.setState({nik: event.target.value});
    }
    
    changepos_idHandler= (event) => {
        this.setState({pos_id: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees')
    }
    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center">Update Hierarchy</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="first_name" className="form-control"
                                            value={this.state.first_name} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="last_name" className="form-control"
                                            value={this.state.last_name} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> NIK </label>
                                        <input placeholder="NIK" name="nik" className="form-control"
                                            value={this.state.nik} onChange={this.changenikHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Pos id </label>
                                        <input placeholder="Pos id" name="pos_id" className="form-control"
                                            value={this.state.pos_id} onChange={this.changepos_idHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateHierarchy}>Save</button>
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

export default UpdateHierarchyComponent;