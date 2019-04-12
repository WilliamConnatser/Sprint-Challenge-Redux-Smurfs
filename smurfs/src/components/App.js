import React, {Component} from 'react';
import {connect} from 'react-redux';
import ACTIONS from '../actions/index';

import './App.css';
import SmurfList from './SmurfList';

class App extends Component {
    constructor(props) {
        super(props);

        console.log(props);
    }

    componentDidMount() {
        this
            .props
            .GET();
    }

    render() {
        return (
            <div className="App">
                <h1>SMURFS! 2.0 W/ Redux</h1>
                {this.props.status.ERROR
                    ? this.props.status.ERROR
                    : null}
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
