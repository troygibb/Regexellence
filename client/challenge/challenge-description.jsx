import React, { Component } from 'react';

export default class ChallengeDescription extends Component {
  render() {
  	if (this.props.editable) {

  	} else {
	    return (
	      <div>
	        <h3>{this.props.name}</h3>
	        <p>{this.props.description}</p>
	      </div>
	    );
	  }
  }
}
