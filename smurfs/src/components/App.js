import React, {Component} from 'react';
import {connect} from 'react-redux';
import ACTIONS from '../actions/index';

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
    constructor(props) {
      super(props);

      console.log(props);
    }
    componentDidMount() {
      this.props.GET();
    }
    render() {
        return (
            <div className="App">
                <h1>SMURFS! 2.0 W/ Redux</h1>
                
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
