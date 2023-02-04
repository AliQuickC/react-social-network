import React from 'react';
import { Field, reduxForm } from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
	// Field - компонент из библиотеки redux-form
	// handleSubmit , отмена события по умолчанию, сбор данных формы упаковка в объект, вызов onSubmit в контейнерной компоненте отправка объекта.
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field	name={"login"}
								placeholder={"Login"}
								component={Input}
								validate={[required]} />
			</div>
			<div>
				<Field	name={"password"}
								placeholder={"Password"}
								component={Input}
								validate={[required]}	/>
			</div>
			<div>
				<Field component={Input} name={"rememberMe"} type={"checkbox"} /> remember me
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
		console.log(formData);
	}

	return <div>
		<h1>LOGIN</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
}

export default Login;
