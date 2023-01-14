/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {

	const setActive = ({ isActive }) => (isActive ? s.active : '');

	return <nav className={s.nav}>
		<div className={s.item}>
			<NavLink to="/profile" className={setActive}>Profile</NavLink>
		</div>
		<div className={s.item}>
			<NavLink to="/dialogs" className={setActive}>Messages</NavLink>
		</div>
		<div className={s.item}>
			<NavLink to="/users" className={setActive}>Users</NavLink>
		</div>
		<div className={s.item}>
			<a href="#"> News</a>
		</div>
		<div className={s.item}>
			<a href="#"> Music</a>
		</div>
		<div className={s.item}>
			<a href="#"> Settings</a>
		</div>
	</nav>
}

export default Navbar;
