import React, {Component} from 'react';
import HomeHeader from './HomeHeader';
import './Login.scss'
import {Link as LinkR} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            emailAlert: "",
            passwordAlert: ""
        }
    }
//Walidacja formularza

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();

        let resultEmail;
        let resultPassword;

        // pole emaila
        if (this.state.email === "" || !/\S+\S+@\S+\S+\.\S+\S+/.test(this.state.email)) {
            resultEmail = <span className="nameAlert">Podany email jest nieprawidłowy!</span>
        }
        this.setState({
            emailAlert: resultEmail
        });

        //pole hasła
        if (this.state.password.length < 6) {
            resultPassword = <span className="nameAlert">Podane hasło jest za krótkie!</span>
        }
        this.setState({
            passwordAlert: resultPassword
        })
    };

    render() {
        return (
            <>
                <HomeHeader/>
                <div className="container login">
                    <h2 className="loginHeader">Zaloguj się</h2>
                    <div className="loginDec"></div>
                    <form className="loginForm" onSubmit={this.handleSubmit}>
                        <div className="name_password_cont">
                            <label htmlFor="" className="loginEmail">Email
                                <input type="text"
                                       className={`loginEmailText ${this.state.emailAlert ? "alert" : ""}`}
                                       name="email"
                                       value={this.state.email}
                                       onChange={this.handleChange}/>
                                {this.state.emailAlert}
                            </label>
                            <label htmlFor="" className="loginPassword">Hasło
                                <input type="password"
                                       className={`loginPasswordText ${this.state.passwordAlert ? "alert" : ""}`}
                                       name="password"
                                       value={this.state.password}
                                       onChange={this.handleChange}/>
                                {this.state.passwordAlert}
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