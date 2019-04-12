import React, {Component} from 'react'

export default class Smurf extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>{this.props.smurf.name}</h2>
                Smurf ID #{this.props.smurf.id}
                <h3>Age:</h3>
                {this.props.smurf.age}
                <h3>Height:</h3>
                {this.props.smurf.height}
            </div>
        )
    }
}