import React from 'react';
import preloader from "../../../assets/images/preloader.svg";

let Preloader = (props) => {
	return <div style={{ backgroundColor: 'white', display: 'inline-block', borderRadius: '50%' }}>
		<img src={preloader} alt="preloader" />
	</div>
}

export default Preloader;