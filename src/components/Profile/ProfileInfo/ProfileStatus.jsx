import React from 'react';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status, // = ''
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		});
	}
	deactivateEditMode = () => {
		this.setState({
			editMode: false
		});
		this.props.updateStatus(this.state.status); // global state (modified with thunk)
	}

	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value, // local state
		});
	}

	render() {
		return (
			<div>
				{!this.state.editMode &&
					<div>{'Status: '}
						<span onDoubleClick={this.activateEditMode}>
							{this.props.status || "-------"}
						</span>
					</div>
				}
				{this.state.editMode &&
					<div>{'Status: '}
						<input autoFocus={true} onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status} />
					</div>
				}
			</div>
		)
	}
}

export default ProfileStatus;
