import React, { Component } from 'react';
import PositionService from '../services/PositionService';
import { Icon } from './Signin/SigninElements';
import {NavBtnLink2} from './Navbar/NavbarElements';

class ListPositionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            position: []
        }
        this.addPosition = this.addPosition.bind(this);
        this.editPosition = this.editPosition.bind(this);
        this.deletePosition = this.deletePosition.bind(this);
    }

    deletePosition(id){
        PositionService.deletePosition(id).then( res => {
            this.setState({position: this.state.position.filter(position => position.id !== id)});
        });
    }

    viewPosition(id){
        this.props.history.push(`/view-position/${id}`);
    }

    editPosition(id){
        this.props.history.push(`/add-position/${id}`);
    }

    componentDidMount(){
        PositionService.getPosition().then((res) => {
            this.setState({ position: res.data});
        });
    }

    addPosition(){
        this.props.history.push('/add-position/_add')
    }

    render() {
        return (
            <div style={{background: "#01bf71", transform: "width 2s"}}>
                <Icon to="/">Harvest STMIK</Icon>
                <div className="container">
                    <div style={{marginBottom: "0px", marginTop: "50px"}}>
                        <h2 className="text-center">Position List</h2>
                        <div className = "row"> 
                            <button className="btn btn-primary" onClick={this.addPosition}> Add Position </button>
                        </div>
                        <div className = "row">
                                <table className = "table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th> Position Name</th>
                                            <th> Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            this.state.position.map(
                                                position =>
                                                <tr key = {position.id}>
                                                    <td> {position.positionName} </td>
                                                    <td>
                                                        <button onClick = { () => this.editPosition(position.id)} className="btn btn-info">Update</button>
                                                        <button style= {{marginLeft: "10px"}} onClick = { () => this.deletePosition(position.id)} className="btn btn-danger">Delete</button>
                                                        <button style= {{marginLeft: "10px"}} onClick = { () => this.viewPosition(position.id)} className="btn btn-info">View</button>
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
                <NavBtnLink2 to="/hierarchy"  >Hierarchy</NavBtnLink2>
                <NavBtnLink2 to="/leaveofabsence"  >Leave of Absence</NavBtnLink2>
            </div>
           
            
        );
    }
}

export default ListPositionComponent;