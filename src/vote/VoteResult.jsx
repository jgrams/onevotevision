import React from 'react';

function VoteResult ({ vote }) {
	return (
		<div class="voteResult">
			<div>
				<h2>Almost everyone agrees with you.</h2>
				<h3>100% agree with you.</h3>
				<div class="voteShare">
					<h6>1 vote.</h6>
				</div>
			</div>
		</div>
	);
}

export default VoteResult;