import React, { Component } from 'react';
import VoteForm from './VoteForm.jsx';
import VoteResult from './VoteResult.jsx';

class OneVoteOneResult extends Component {
	constructor(props) {
		super(props);
		this.state = { activeVote: '' }
		this.activateVote = this.activateVote.bind(this);
	}

	activateVote(e) {
		this.setState({
			activeVote: 'asdfasdf'
		});
	}

	displayFormOrResult () {
		if (this.state.activeVote === '')
			return <VoteForm activateVote={this.activateVote} />
		else
			return <VoteResult vote={this.activeVote}/>
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