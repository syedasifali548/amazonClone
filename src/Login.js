import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // SignIn 
    const signIn = (e) => {
        e.preventDefault()

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth)
                    history.push("/")

            })
            .catch(error=>alert(error.message))
    }

    // SignUp Or create new user
    const register = e => {
        e.preventDefault()

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // console.log(auth ,"Account created Successfully")
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))

    }
    return (

        <div className="login">
            <Link to="/">
                <img
                    className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>
            <div className="login_container">
                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password}
                        onChange={e => setPassword(e.target.value)} />
                    <button className="login_button" type="submit" onClick={signIn} >Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's
                     Conditions of Use and Privacy Notice.</p>
                <button className="login_registerButton" onClick={register}>Create your Amazon account</button>

            </div>
        </div>


    )
}

export default Login
