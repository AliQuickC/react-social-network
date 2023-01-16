import React from 'react';
import Users from "./Users";
import { connect } from "react-redux";
import {
	follow,
	setCurrentPage,
	setUsers,
	setTotalUsersCount,
	unfollow,
	toggleIsFetching,
	toggleFollowingProgress,
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

// --- Class container begin -------------------------------------------------------------------
class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true);

		usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {

			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
			this.props.setTotalUsersCount(data.totalCount);
		});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);

		usersAPI.getUsers(pageNumber, this.props.pageSize)
			.then(data => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(data.items);
			});
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
				toggleFollowingProgress={this.props.toggleFollowingProgress}
				followingInProgress={this.props.followingInProgress}
			/>
		</>
	}
}
// --- Class container end -------------------------------------------------------------------

// --- Connect container begin -------------------------------------------------------------------
let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	}
}

export default connect(mapStateToProps,
	{ follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress })(UsersContainer);
// --- Connect container end -------------------------------------------------------------------
