import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img
					src='https://pro-goa.ru/wp-content/uploads/luchshie-plyazhi-goa-03.jpg' alt="profile photo" />
			</div>
			<div className={s.descriptionBlock}>
				ava + description
			</div>
		</div>
	)
}

export default ProfileInfo;