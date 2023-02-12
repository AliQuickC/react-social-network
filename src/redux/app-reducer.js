import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
	initialized: false
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true
			}

		default:
			return state;
	}
}

// AC - action creaters
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
// AC - action creaters

// thunc creaters
export const initializeApp = () => (dispatch) => {
	let promise = dispatch(getAuthUserData());
	// debugger
	//dispatch(somethingelse());
	//dispatch(somethingelse());
	Promise.all([promise])
		.then(() => {
			dispatch(initializedSuccess());
		});
}
// thunc creaters

export default appReducer;
