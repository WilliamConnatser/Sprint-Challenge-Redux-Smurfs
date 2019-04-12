import React, {Component} from 'react';
import SmurfForm from './SmurfForm';
import {connect} from 'react-redux';
import ACTIONS from '../actions/index';

class Smurf extends Component {
    state = {
        edit: false
    }
    clickHandler = event => {
        if(event.target.name === 'edit') {
            this.setState({
                edit: !this.state.edit
            })
        } else {
            this.props.DELETE(this.props.smurf);
        }
    }
    render() {
        return (
            <div>
                <h2>{this.props.smurf.name}</h2>
                Smurf ID #{this.props.smurf.id}
                <h3>Age:</h3>
                {this.props.smurf.age}
                <h3>Height:</h3>
                {this.props.smurf.height}
                <br/>
                <button name="edit" onClick={this.clickHandler}>Edit</button>
                <button name="delete" onClick={this.clickHandler}>Delete</button>
                {this.state.edit
                    ? <SmurfForm smurf={this.props.smurf}/>
                    : null
}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, {
    DELETE: ACTIONS.DELETE.DELETE
})(Smurf);