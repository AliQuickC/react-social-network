import {useParams} from 'react-router-dom';
import React from 'react';

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
export default function withRouter(Component) {
	return (props) => {
		const match = {params: useParams()};
		return <Component {...props} match={match}/>
	}
}
