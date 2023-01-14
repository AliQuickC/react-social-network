import avatar from '../assets/images/avatars/skrep1.jpg';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	posts: [
		{ id: 1, message: 'Hi, how are you?', likesCount: 2, avatarLink: avatar },
		{ id: 2, message: 'It\'s my first post', likesCount: 4, avatarLink: avatar },
		{ id: 3, message: 'Blabla', likesCount: 3, avatarLink: avatar },
		{ id: 4, message: 'Dada', likesCount: 1, avatarLink: avatar }
	],
	newPostText: 'Hi'
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
		default:
			return state;
	}
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
	({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;