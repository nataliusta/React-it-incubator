import React from 'react';
import classes from '../FormControls/FormControls.module.css';
import { Field, reduxForm } from 'redux-form';
import { Element } from '../FormControls/FormControls';
import { required } from '../../utils/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';

const Input = Element("input");

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} 
                       validate={[required]}
                       component={Input} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} 
                       type={'password'}
                       validate={[required]}
                       component={Input} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input} /> Remember me
            </div>
            {error && <div className={classes.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm) // wrapping in Redux-form

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);

    }

    if (props.isAuth) {
        return <Navigate to={'/mainpage'} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);