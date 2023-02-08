import React from 'react';
import Users from "./Users";
import { connect } from "react-redux";
import {
	follow,
	setCurrentPage,
	unfollow,
	requestUsers // thunk creater
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
// import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
	getUsers,
	getPageSize,
	getTotalUsersCount,
	getCurrentPage,
	getIsFetching,
	getFollowingInProgress
} from '../../redux/users-selectors';

// --- Class container begin -------------------------------------------------------------------
class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				followingInProgress={this.props.followingInProgress}
			/>
		</>
	}
}
// --- Class container end -------------------------------------------------------------------

// --- Connect container begin -------------------------------------------------------------------
let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}

export default compose(
	// withAuthRedirect,
	connect(mapStateToProps,{follow, unfollow, setCurrentPage, getUsers: requestUsers })
)(UsersContainer)
// --- Connect container end -------------------------------------------------------------------
