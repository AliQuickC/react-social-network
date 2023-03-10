import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from "../../redux/profile-reducer";
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import withRouter from '../../hoc/withRouter';
import Login from '../Login/Login';

class ProfileContainer extends React.Component {

	refreshProfile() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId;
			if (!userId) {
				return;
			// 	this.props.history.push("/login");
			}
		}
		this.props.getUserProfile(userId);	// thunk
		this.props.getStatus(userId);				// thunk
	}

	componentDidMount() {
		this.refreshProfile();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.refreshProfile();
		}
	}

	render() {
		if (!this.props.authorizedUserId && !this.props.match.params.userId) {
			return <Login/>;
		}

		return (<Profile  {...this.props}
											profile={this.props.profile}
											status={this.props.status}
											updateStatus={this.props.updateStatus}
											isOwner={!this.props.match.params.userId}
											savePhoto={this.props.savePhoto}
		/>)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth,
});

export default compose(connect(mapStateToProps, {
		getUserProfile,
		getStatus,
		updateStatus,
		savePhoto,
		saveProfile
	}), withRouter, // withAuthRedirect,
)(ProfileContainer);
