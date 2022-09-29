import React from 'react';
import classes from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import { Element } from '../FormControls/FormControls';
import { required } from '../../utils/validators';

const Input = Element("input");

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} 
                       validate={[required]}
                       component={Input} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} 
                       validate={[required]}
                       component={Input} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm) // wrapping in Redux-form

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);

    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;