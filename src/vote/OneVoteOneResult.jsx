import React, { Component } from 'react';
import VoteForm from './VoteForm.jsx';
import VoteResult from './VoteResult.jsx';

class OneVoteOneResult extends Component {
	constructor(props) {
		super(props);
		this.state = { displayForm: true }
		this.toggleView = this.toggleView.bind(this);
	}

	toggleView = () => {
		this.setState({
			displayForm: !this.state.displayForm
		});
	}

	displayFormOrResult () {
		if (this.state.displayForm)
			return <VoteForm/>
		else
			return <VoteResult/>
	}

	render () {
		return (
			<div>
				{ this.displayFormOrResult() }
			</div>
		);
	}
}

export default OneVoteOneResult;