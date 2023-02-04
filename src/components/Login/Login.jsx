import React from 'react';
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

const LoginForm = (props) => {
	// Field - компонент из библиотеки redux-form
	// handleSubmit , отмена события по умолчанию, сбор данных формы упаковка в объект, вызов onSubmit в контейнерной компоненте отправка объекта.
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name={"email"}
					placeholder={"Email"}
					component={Input}
					validate={[required]} />
			</div>
			<div>
				<Field name={"password"}
					type={"password"}
					placeholder={"Password"}
					component={Input}
					validate={[required]} />
			</div>
			<div>
				<Field	name={"rememberMe"}
								type={"checkbox"}
								component={Input} /> remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

// форму оборачиваем в HOC reduxForm, из redux-form
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	}

	if (props.isAuth) {
		return <Navigate to={"/profile"} />
	}

	return <div>
		<h1>LOGIN</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login} )(Login);
