import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from './components/Navbar/Navbar';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from 'react-redux';
import withRouter from './hoc/withRouter';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from "./redux/redux-store";

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader/>
		}

		return (
			<div className='app-wrapper'>
				<HeaderContainer/>
				<Navbar/>
				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/dialogs' element={<DialogsContainer/>}/>
						<Route path='/profile/:userId?'
									 element={<ProfileContainer/>}/>
						<Route path='/users'
									 element={<UsersContainer/>}/>
						<Route path='/login'
									 element={<LoginPage/>}/>
					</Routes>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
})

// export default compose(
// 	withRouter,
// 	connect(mapStateToProps, {initializeApp})
// )(App);

let AppContainer = compose(
	withRouter,
	connect(mapStateToProps, {initializeApp}))(App);

const JSApp = () => {
	return <BrowserRouter>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</BrowserRouter>
}

export default JSApp;
