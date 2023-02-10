import React, {useState} from 'react';

const ProfileStatusWithHooks = (props) => {
	//	[переменная state, ф-ция меняет значение state] = useState(инициализация значения state);
	let [editMode, setEditMode] = useState(false);	// использовать локальный state с помощью hook - useState
	let [status, setStatus] = useState(props.status);				// useState возвращает массив из 2х элементоа

	const activateEditMode = () => {
		setEditMode(true); // local state
	}

	const deactivateEditMode = () => {
		setEditMode(false);		// local state
		props.updateStatus(status);	// global state (modified with thunk)
	}

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value); // local state
	}

	return (
		<div>
			{!editMode &&
				<div>{'Status: '}
					<span onDoubleClick={activateEditMode}>
							{props.status || "-------"} {/* global state */}
						</span>
				</div>
			}
			{editMode &&
				<div>{'Status: '}
					<input autoFocus={true}
								 onChange={onStatusChange}
								 onBlur={deactivateEditMode}
								 value={status}/> {/* local state */}
				</div>
			}
		</div>
	)
}

export default ProfileStatusWithHooks;
