import React from 'react';
import s from './Header.module.css';
import logo from '../../assets/images/logo.svg';

const Header = () => {
	return <header className={s.header}>
		<img src={logo} alt="img" />
	</header>
}

export default Header;
