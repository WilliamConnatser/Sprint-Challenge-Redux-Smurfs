import React, {Component} from 'react'
import SmurfForm from './SmurfForm';

export default class Smurf extends Component {
    state = {
        edit: false
    }
    clickHandler = event => {
        this.setState({
            edit: !this.state.edit
        })
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
                <button onClick={this.clickHandler}>Edit</button>
                {this.state.edit
                    ? <SmurfForm smurf={this.props.smurf}/>
                    : null
}
            </div>
        )
    }
}