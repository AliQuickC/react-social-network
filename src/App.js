import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";
import {connect} from 'react-redux';
import withRouter from './hoc/withRouter';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader/>
		}

		return (
			<BrowserRouter>
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
			</BrowserRouter>
		)
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
})

export default compose(
	withRouter,
	connect(mapStateToProps, { initializeApp })
	)(App);
// export default connect(null, { getAuthUserData })(App);
// export default App;
