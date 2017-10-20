import React, { Component } from 'react';
import ShareIcons from './ShareIcons.jsx'


class VoteResult extends Component {
    render() {
		return (
			<div class="voteResult">
				<div>
					<h2>Almost everyone agrees with you.</h2>
					<h3>100% agree with you.</h3>
					<div class="voteShare">
						<h6>1 vote.</h6>
						<h6>Share your opinion.</h6>
					</div>
					<ShareIcons />
				</div>
			</div>
		);
	}
}

export default VoteResult;