import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import {auth} from './firebase.js';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) => {
        event.preventDefault(); //prevents from reloading after form submits

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // logged in. redirect to the homepage
                history.push("/");
            })
            .catch((e) => alert(e.message));
    }

    const register = (event) => {
        event.preventDefault(); //prevents from reloading after form submits

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // user created and logged in. redirect to homepage
                history.push("/");
            })
            .catch((e) => alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    alt=""
                    className="login__logo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>Email</h5>
                    <input onChange={event => setEmail(event.target.value)} value={email} type="email" />
                    <h5>Password</h5>
                    <input onChange={e => setPassword(e.target.value)} value={password} type="password" />
                    <button 
                        type="submit" 
                        className="login__signInButton"
                        onClick={login}
                    >Sign In</button>
                </form>
                <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                <button onClick={register} className="login__registerButton">Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
