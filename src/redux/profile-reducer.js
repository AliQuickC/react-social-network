import avatar from '../assets/images/avatars/skrep1.jpg';
import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
	posts: [
		{ id: 1, message: 'Hi, how are you?', likesCount: 2, avatarLink: avatar },
		{ id: 2, message: 'It\'s my first post', likesCount: 4, avatarLink: avatar },
		{ id: 3, message: 'Blabla', likesCount: 3, avatarLink: avatar },
		{ id: 4, message: 'Dada', likesCount: 1, avatarLink: avatar }
	],
	newPostText: 'Hi',
	profile: null
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: 0,
				avatarLink: avatar,
			};
			let stateCopy = { ...state };
			stateCopy.posts = [...state.posts];
			stateCopy.posts.push(newPost);
			stateCopy.newPostText = '';
			return stateCopy;
		}
		case UPDATE_NEW_POST_TEXT: {
			let stateCopy = { ...state };
			stateCopy.posts = [...state.posts];
			stateCopy.newPostText = action.newText;
			return stateCopy;
		}
		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile }
		}
		default:
			return state;
	}
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const getUserProfile = (userId) => (dispatch) => {
	usersAPI.getProfile(userId).then(response => {
			dispatch(setUserProfile(response.data));
	});
}
export const updateNewPostTextActionCreator = (text) =>
	({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;