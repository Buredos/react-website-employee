import React, { Component } from 'react';
import HierarchyService from '../services/HierarchyService';


class ViewHierarchyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            hierarchy: {}
        }

    }

    componentDidMount(){
        HierarchyService.getHierarchyById(this.state.id).then( res => {
            this.setState({hierarchy: res.data});
        });
    }

    cancel(){
        this.props.history.push('/hierarchy')
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">Viewing Hierarchy Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Hierarchy First Names: </label>
                            <div> {this.state.hierarchy.firstName} </div>
                        </div>
                        <div className = "row">
                            <label> Hierarchy Last Names: </label>
                            <div> {this.state.hierarchy.lastName} </div>
                        </div>
                        <div className = "row">
                            <label> NIK: </label>
                            <div> {this.state.hierarchy.nIK} </div>
                        </div>
                        <div className = "row">
                            <label> Pos Id: </label>
                            <div> {this.state.hierarchy.posId} </div>
                        </div>
                    </div>
                     <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Go back</button>
                </div>
                
            </div>
        );
    }
}

export default ViewHierarchyComponent;
