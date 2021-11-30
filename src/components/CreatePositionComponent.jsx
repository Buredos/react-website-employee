import React, { Component } from 'react';
import PositionService from '../services/PositionService';


class CreatePositionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            positionName: ''
        }
        this.changePositionNameHandler = this.changePositionNameHandler.bind(this);
        this.saveOrUpdatePosition = this.saveOrUpdatePosition.bind(this);
    }

    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{
            PositionService.getPositionById(this.state.id).then( (res) =>{
                let position = res.data;
                this.setState({positionName: position.positionName
                });
            });
        }
        
    }

    saveOrUpdatePosition = (e) => {
        e.preventDefault();
        let position = {positionName: this.state.positionName};
        console.log('position => ' + JSON.stringify(position));

        if(this.state.id === '_add'){
            PositionService.createPosition(position).then(res =>{
                this.props.history.push('/position');
            });
        }else{
            PositionService.updatePosition(position, this.state.id).then( res => {
                this.props.history.push('/position');
            });
        }

        
    }

    changePositionNameHandler= (event) => {
        this.setState({positionName: event.target.value});
    }

    cancel(){
        this.props.history.push('/position')
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className = "text-center">Add Position</h3>
        }else{
            return <h3 className = "text-center">Update Position</h3>
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
                                        <label> Position Name: </label>
                                        <input placeholder="Position Name" name="positionName" className="form-control"
                                            value={this.state.positionName} onChange={this.changePositionNameHandler}/>
                                    </div>
                                    

                                    <button className="btn btn-success" onClick={this.saveOrUpdatePosition} style={{marginTop: "15px"}}>Save</button>
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

export default CreatePositionComponent;