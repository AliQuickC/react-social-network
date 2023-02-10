import React from 'react';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status, // = ''
	}

	activateEditMode = () => {
		this.setState({ // local state
			editMode: true
		});
	}
	deactivateEditMode = () => {
		this.setState({ // local state
			editMode: false
		});
		this.props.updateStatus(this.state.status); // global state (modified with thunk)
	}

	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value, // local state
		});
	}

	componentDidUpdate(prevProps, prevState) {

		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			});
		}
	}

	render() {
		return (
			<div>
				{!this.state.editMode &&
					<div>{'Status: '}
						<span onDoubleClick={this.activateEditMode}>
							{this.props.status || "-------"}	{/* global state */}
						</span>
					</div>
				}
				{this.state.editMode &&
					<div>{'Status: '}
						<input	autoFocus={true}
										onChange={this.onStatusChange}
										onBlur={this.deactivateEditMode}
										value={this.state.status} />	{/* local state */}
					</div>
				}
			</div>
		)
	}
}

export default ProfileStatus;
