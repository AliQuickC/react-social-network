import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error}) => {
	// Field - компонент из библиотеки redux-form
	// handleSubmit , отмена события по умолчанию, сбор данных формы упаковка в объект, вызов onSubmit в контейнерной компоненте отправка объекта.
	return (
		<form onSubmit={handleSubmit}>
			{createField("Email", "email", [required], Input)}
			{createField("Password", "password", [required], Input, {type: "password"})}
			{createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

			{error &&
				<div className={style.formSummaryError}>
					{error}
				</div>
			}
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

// форму оборачиваем в HOC reduxForm, из redux-form
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	}

	if (props.isAuth) {
		return <Navigate to={"/profile"}/>
	}

	return <div>
		<h1>LOGIN</h1>
		<LoginReduxForm onSubmit={onSubmit}/>
	</div>
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
