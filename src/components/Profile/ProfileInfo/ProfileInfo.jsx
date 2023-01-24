import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div>
			<div className={s.descriptionBlock}>
				<img	className={s.profileImage}
							src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}
							alt="avatar" />
				<ProfileStatus status={"Hello my friends"}/>
				<h4 className={s.profileTitle}>Имя: {props.profile.fullName}</h4>
				<p>Про меня: {props.profile.aboutMe}</p>
				<p>Контакты: {JSON.stringify(props.profile.contacts)}</p>
				<p>Ищу работу: {props.profile.lookingForAJob ? 'Да' : 'Нет'}</p>
				<p>Какую вакансию ищу: {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : ''}</p>
			</div>
		</div>
	)
}

export default ProfileInfo;
