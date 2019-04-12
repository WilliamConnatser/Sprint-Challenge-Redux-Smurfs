import React, {Component} from 'react';
import {connect} from 'react-redux';
import ACTIONS from '../actions/index';

class SmurfForm extends Component {
    constructor(props) {
        super(props);

        if (this.props.smurf) {
            this.state = {
                smurf: this.props.smurf
            }
        } else {
            this.state = {
                smurf: {
                    name: '',
                    age: '',
                    height: ''
                }
            }
        }
    }
    changeHandler = event => {
        this.setState({
            smurf: {
                ...this.state.smurf,
                [event.target.name]: event.target.value
            }
        });
    }
    submitHandler = event => {
        event.preventDefault();
        isNaN(this.state.smurf.id)
            ? this
                .props
                .ADD(this.state.smurf)
            : this
                .props
                .UPDATE(this.state.smurf)
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input
                    name="name"
                    placeholder="name"
                    onChange={this.changeHandler}
                    value={this.state.smurf.name}/><br/>
                <input
                    name="age"
                    placeholder="age"
                    onChange={this.changeHandler}
                    value={this.state.smurf.age}/><br/>
                <input
                    name="height"
                    placeholder="height"
                    onChange={this.changeHandler}
                    value={this.state.smurf.height}/><br/>
                <button type="submit">
                    {isNaN(this.state.smurf.id)
                        ? 'Add'
                        : 'Edit'}
                    Smurf
                </button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, {
    ADD: ACTIONS.ADD.ADD,
    UPDATE: ACTIONS.UPDATE.UPDATE
})(SmurfForm);
