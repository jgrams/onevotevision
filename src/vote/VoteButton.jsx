import React, { Component } from 'react';

class VoteButton extends Component {
    render() {
       return( 
	       	<div className="voteButtonContainer">
				<button onClick={this.props.activateVote} 
			      		value={this.props.voteOption.value}
			            className="voteButton" >
			        {this.props.voteOption.text}
			    </button>
			</div>
		);
    }
}
export default VoteButton;