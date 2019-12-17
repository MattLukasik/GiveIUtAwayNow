import React, {Component} from 'react';
import HomeHeader from './HomeHeader';
import './Login.scss'
import {Link as LinkR} from "react-router-dom";

class Login extends Component {

    render() {
        return (
            <>
                <HomeHeader/>
                <div className="container login">
                    <h2 className="loginHeader">Zaloguj się</h2>
                    <div className="loginDec"></div>
                    <form action="" className="loginForm">
                        <div className="name_password_cont">
                            <label htmlFor="" className="loginEmail">Email
                                <input type="text" className="loginEmailText"/>
                            </label>
                            <label htmlFor="" className="loginPassword">Hasło
                                <input type="password" className="loginPasswordText"/>
                            </label>
                        </div>
                        <div className="reg_log">
                            <LinkR to="/register" className="register">
                                <button className="reg">Załóż konto</button>
                            </LinkR>
                            <button className="log">Zaloguj się</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}


export default Login;