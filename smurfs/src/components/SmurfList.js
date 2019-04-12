import React, { Component } from 'react';
import Smurf from './Smurf';

export default class SmurfList extends Component {
  render() {
      const listOfSmurfs = this.props.smurfs.map(smurf=><Smurf smurf={smurf} key={smurf.name} />)
    return (
      <div>
        {listOfSmurfs}
      </div>
    )
  }
}
