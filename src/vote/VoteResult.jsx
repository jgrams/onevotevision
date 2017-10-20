import React, { Component } from 'react';
import ShareIcon from './ShareIcon.jsx'
import TwitterLogo from "../static/images/iconmonstr-twitter-4-240.png"
import FacebookLogo from "../static/images/iconmonstr-facebook-4-240.png"

class VoteResult extends Component {
	constructor(props) {
		super(props);
		this.state = { shareIcons: [{id: 1, image: TwitterLogo, text: "Twitter Icon", value: "twitter"}, 
		               				{id: 2, image: FacebookLogo, text: "Facebook Icon", value: "facebook"}] };
	}

    render() {
		return (
			<div className="voteResult">
				<h3>Almost everyone agrees with you.</h3>
				<div className="shareContainer">
					<div className="shareText">
						1 vote. <br/>Share your correct opinion.
					</div>
					<div className="shareIcons">
						{this.state.shareIcons.map(icon => {
							return(<ShareIcon key={icon.id}
							                  shareIcon={icon} />
							    );
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default VoteResult;