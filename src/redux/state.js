import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import avatar from '../assets/images/avatars/skrep1.jpg';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi, how are you?', likesCount: 2, avatarLink: avatar },
				{ id: 2, message: 'It\'s my first post', likesCount: 4, avatarLink: avatar },
				{ id: 3, message: 'Blabla', likesCount: 3, avatarLink: avatar },
				{ id: 4, message: 'Dada', likesCount: 1, avatarLink: avatar }
			],
			newPostText: 'it-kamasutra.com'
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Dimych' },
				{ id: 2, name: 'Andrew' },
				{ id: 3, name: 'Sveta' },
				{ id: 4, name: 'Sasha' },
				{ id: 5, name: 'Viktor' },
				{ id: 6, name: 'Valera' }
			],
			messages: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'How is your it-kamasutra?' },
				{ id: 3, message: 'Yo' },
				{ id: 4, message: 'Yo' },
				{ id: 5, message: 'Yo' }
			]
		},
		sidebar: {}
	},
	getState() {
		return this._state;
	},
	_callSubscriber() {
		console.log('State changed');
	},
	subscribe(observer) {
		this._callSubscriber = observer;  // observer
	},
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	},
}

export default store;
window.store = store;
