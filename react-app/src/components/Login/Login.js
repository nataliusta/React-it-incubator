import React from 'react';
import classes from './Login.module.css';

const Login = (props) => {
    return <div>
        <h1>Login</h1>
        <form>
            <div>
                <input placeholder={'Login'} />
            </div>
            <div>
                <input placeholder={'Password'} />
            </div>
            <div>
                <input type={'checkbox'} /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

export default Login;