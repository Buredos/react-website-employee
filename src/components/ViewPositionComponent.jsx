import React, { Component } from 'react';
import PositionService from '../services/PositionService';


class ViewPositionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            position: {}
        }

    }

    componentDidMount(){
        PositionService.getPositionById(this.state.id).then( res => {
            this.setState({position: res.data});
        });
    }

    cancel(){
        this.props.history.push('/position')
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">Viewing Position Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Position  Name: </label>
                            <div> {this.state.position.positionName} </div>
                        </div>
                    </div>
                     <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Go back</button>
                </div>
                
            </div>
        );
    }
}

export default ViewPositionComponent;