import avatar from '../assets/images/avatars/skrep1.jpg';
import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
	posts: [
		{ id: 1, message: 'Hi, how are you?', likesCount: 2, avatarLink: avatar },
		{ id: 2, message: 'It\'s my first post', likesCount: 4, avatarLink: avatar },
		{ id: 3, message: 'Blabla', likesCount: 3, avatarLink: avatar },
		{ id: 4, message: 'Dada', likesCount: 1, avatarLink: avatar }
	],
	// newPostText: 'Hi',
	profile: null,
	status: '',
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: action.newPostText,
				likesCount: 0,
				avatarLink: avatar,
			};
			let stateCopy = { ...state };
			stateCopy.posts = [...state.posts];
			stateCopy.posts.push(newPost);
			stateCopy.newPostText = '';
			return stateCopy;
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status
			}
		}
		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile }
		}
		default:
			return state;
	}
}

// AC - action creaters
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

// thunc creaters
export const getUserProfile = (userId) => (dispatch) => {
	usersAPI.getProfile(userId).then(response => {
		dispatch(setUserProfile(response.data));
	});
}

export const getStatus = (userId) => (dispatch) => {
	profileAPI.getStatus(userId)
		.then(response => {
			dispatch(setStatus(response.data));
		});
}

export const updateStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status)
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setStatus(status));
			}
		});
}

export default profileReducer;
