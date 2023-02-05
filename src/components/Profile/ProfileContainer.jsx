import React from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import {
	useLocation,
	useNavigate,
	useParams,
} from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		const match = { params: useParams() };
		return (
			<Component
				{...props}
				router={{ location, navigate, params }}
				match={match}
			/>
		);
	}

	return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId;
		}
		this.props.getUserProfile(userId);	// thunk
		this.props.getStatus(userId);				// thunk
	}

	render() {
		return (
			<Profile	{...this.props}
								profile={this.props.profile}
								status={this.props.status}
								updateStatus={this.props.updateStatus} />
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth,
});

export default compose(
	connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
	withRouter,
	// withAuthRedirect,
)(ProfileContainer);
