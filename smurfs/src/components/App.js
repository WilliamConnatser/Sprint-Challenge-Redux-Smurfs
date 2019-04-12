import React, {Component} from 'react';
import {connect} from 'react-redux';
import ACTIONS from '../actions/index';

import './App.css';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            add: false
        }

    }

    componentDidMount() {
        this
            .props
            .GET();
    }

    clickHandler = event => {
        this.setState({
            add: !this.state.add
        })
    }

    render() {
        return (
            <div className="App">
                <h1>SMURFS! 2.0 W/ Redux</h1>
                <h2 style={{
                    color: 'red'
                }}>{this.props.status.ERROR
                        ? this.props.status.ERROR
                        : null}</h2>

                <h2 style={{
                    color: 'green'
                }}>{this.props.status.LOADING
                        ? 'Loading...'
                        : null
}</h2>
                {this.props.status.LOADING
                    ? null
                    : <button onClick={this.clickHandler}>Add</button>
}
                {this.state.add
                    ? <SmurfForm smurf={this.props.smurf}/>
                    : null
}
                <SmurfList smurfs={this.props.smurfs}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, {
    GET: ACTIONS.GET.GET,
    ADD: ACTIONS.ADD.ADD,
    UPDATE: ACTIONS.UPDATE.UPDATE,
    DELETE: ACTIONS.DELETE.DELETE
})(App);
