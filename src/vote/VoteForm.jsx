import React, { Component } from 'react';
import VoteButton from './VoteButton.jsx'

class VoteForm extends Component {
	constructor(props) {
		super(props);
		this.state = { voteOptions: [{id: 1, value: "agree", text: "Agree"}, 
		               				 {id: 2, value: "disagree", text: "Disagree"}] };
		this.activateVote = this.activateVote.bind(this);
	}

  activateVote(id) {
    this.props.activateVote();
  }

	render () { 
		return (
			<div className="voteForm">
				<div className="voteFormPrompt">
					What's your position on this important issue?
				</div>
				<div className="voteButtons">
					{this.state.voteOptions.map(voteOption=> {
						return (
							<VoteButton key={voteOption.id}
										activateVote={this.activateVote} 
								        voteOption={voteOption} />
							);
					})}
				</div>
			</div>
		);
	}
}

export default VoteForm;