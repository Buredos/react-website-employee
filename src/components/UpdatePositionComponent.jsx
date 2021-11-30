import React, { Component } from 'react';
import PositionService from '../services/PositionService';

class UpdatePositionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            positionName: ''
           
        }
        this.changepositionNameHandler = this.changepositionNameHandler.bind(this);
        this.UpdatePosition = this.UpdatePosition.bind(this);
    }

    componentDidMount(){
        PositionService.getPositionById(this.state.id).then( (res) =>{
            let position = res.data;
            this.setState({positionName: position.positionName,
            });
        });
    }

    UpdatePosition = (e) => {
        e.preventDefault();
        let position = {firstName: this.state.positionName};
        console.log('position => ' + JSON.stringify(position));
        
        PositionService.updatePosition(position, this.state.id).then( res => {
            this.props.history.push('/position');
        });
    }

    changePositionNameHandler= (event) => {
        this.setState({positionName: event.target.value});
    }


    cancel(){
        this.props.history.push('/position')
    }
    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center">Update Position</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Position Name: </label>
                                        <input placeholder="Position Name" name="positionName" className="form-control"
                                            value={this.state.positionName} onChange={this.changePositionNameHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.UpdatePosition}>Save</button>
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

export default UpdateEmployeeComponent;