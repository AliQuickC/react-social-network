import React from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import {
	useLocation,
	useNavigate,
	useParams,
} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
			userId = 2;
		}
		this.props.getUserProfile(userId);
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} />
		)
	}
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);

