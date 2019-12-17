import React, {Component} from 'react';
import HomeHeader from './HomeHeader';
import './Register.scss'
import {Link as LinkR} from "react-router-dom";

class Register extends Component {

    render() {
        return (
            <>
                <HomeHeader/>
                <div className="container register">
                    <h2 className="registerHeader">Załóż konto</h2>
                    <div className="registerDec"></div>
                    <form action="" className="registerForm">
                        <div className="name_password_cont">
                            <label htmlFor="" className="registerEmail">Email
                                <input type="text" className="registerEmailText"/>
                            </label>
                            <label htmlFor="" className="registerPassword">Hasło
                                <input type="password" className="registerPasswordText"/>
                            </label>
                            <label htmlFor="" className="confirmPassword">Powtórz hasło
                                <input type="password" className="confirmPasswordText"/>
                            </label>
                        </div>
                        <div className="log_reg">
                            <LinkR to="/login" className="login">
                                <button className="log">Zaloguj się</button>
                            </LinkR>
                            <LinkR to="/register" className="register">
                                <button className="reg">Załóż konto</button>
                            </LinkR>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}


export default Register;