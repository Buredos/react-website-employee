import React, { Component } from 'react';
import HierarchyService from '../services/HierarchyService';
import { Icon } from './Signin/SigninElements';
import {NavBtnLink2} from './Navbar/NavbarElements';

class ListHierarchyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hierarchy: []
        }
        this.addHierarchy = this.addHierarchy.bind(this);
        this.editHierarchy = this.editHierarchy.bind(this);
        this.deleteHierarchy = this.deleteHierarchy.bind(this);
    }

    deleteHierarchy(id){
        HierarchyService.deleteHierarchy(id).then( res => {
            this.setState({hierarchy: this.state.hierarchy.filter(hierarchy => hierarchy.id !== id)});
        });
    }

    viewHierarchy(id){
        this.props.history.push(`/view-hierarchy/${id}`);
    }

    editHierarchy(id){
        this.props.history.push(`/add-hierarchy/${id}`);
    }

    componentDidMount(){
        HierarchyService.getHierarchy().then((res) => {
            this.setState({ hierarchy: res.data});
        });
    }

    addHierarchy(){
        this.props.history.push('/add-hierarchy/_add')
    }

    render() {
        return (
            <div style={{background: "#01bf71", transform: "width 2s"}}>
                <Icon to="/">Harvest STMIK</Icon>
                <div className="container">
                    <div style={{marginBottom: "0px", marginTop: "50px"}}>
                        <h2 className="text-center">Hierarchy List</h2>
                        <div className = "row"> 
                            <button className="btn btn-primary" onClick={this.addHierarchy}> Add Hierarchy </button>
                        </div>
                        <div className = "row">
                                <table className = "table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th> Hierarchy First Name</th>
                                            <th> Hierarchy Last Name</th>
                                            <th> Hierarchy NIK</th>
                                            <th> Hierarchy Pos id</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            this.state.hierarchy.map(
                                                hierarchy =>
                                                <tr key = {hierarchy.id}>
                                                    <td> {hierarchy.firstName} </td>
                                                    <td> {hierarchy.lastName} </td>
                                                    <td> {hierarchy.nIK} </td>
                                                    <td> {hierarchy.posId} </td>
                                                    <td>
                                                        <button onClick = { () => this.editHierarchy(hierarchy.id)} className="btn btn-info">Update</button>
                                                        <button style= {{marginLeft: "10px"}} onClick = { () => this.deleteHierarchy(hierarchy.id)} className="btn btn-danger">Delete</button>
                                                        <button style= {{marginLeft: "10px"}} onClick = { () => this.viewHierarchy(hierarchy.id)} className="btn btn-info">View</button>
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
                <NavBtnLink2 to="/leaveofabsence"  >Leave of Absence</NavBtnLink2>
            </div>
           
            
        );
    }
}

export default ListHierarchyComponent;