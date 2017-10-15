import React, { Component } from 'react';
import VoteForm from './VoteForm.jsx';
import VoteResult from './VoteResult.jsx';

class OneVoteOneResult extends Component {
	constructor(props) {
		super(props);
		this.state = { activeVote: '',
					   voteCast: false }
		this.activateVote = this.activateVote.bind(this);
	}

	activateVote(id) {
		this.setState({
			voteCast: !this.state.voteCast,
			activeVote: id
		});
	}

	displayFormOrResult () {
		if (!this.state.voteCast)
			return <VoteForm activateVote={this.activateVote} />
		else
			return <VoteResult />
	}

	render () {
		return (
			<div className='oneVoteOneResult'>
				{ this.displayFormOrResult() }
			</div>
		);
	}
}

export default OneVoteOneResult;