import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div>
			<div>
				<img
					src='https://pro-goa.ru/wp-content/uploads/luchshie-plyazhi-goa-03.jpg' alt="profile photo" />
			</div>
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large} />
				ava + description
			</div>
		</div>
	)
}

export default ProfileInfo;