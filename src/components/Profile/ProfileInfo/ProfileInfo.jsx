import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
	if (!profile) {
		return <Preloader />
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	}

	return (
		<div>
			<div className={s.descriptionBlock}>
				<img	className={s.mainPhoto}
							src={profile.photos.large != null ? profile.photos.large : userPhoto}
							alt="avatar"
				/>
				{ isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
				<ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

				<h4 className={s.profileTitle}>Имя: {profile.fullName}</h4>
				<p>Про меня: {profile.aboutMe}</p>
				<p>Контакты: {JSON.stringify(profile.contacts)}</p>
				<p>Ищу работу: {profile.lookingForAJob ? 'Да' : 'Нет'}</p>
				<p>Какую вакансию ищу: {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : ''}</p>
			</div>
		</div>
	)
}

export default ProfileInfo;
