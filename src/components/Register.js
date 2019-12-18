import React, {Component} from 'react';
import HomeHeader from './HomeHeader';
import './Register.scss'
import {Link as LinkR} from "react-router-dom";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confPassword: "",
            emailAlert: "",
            passwordAlert: "",
            confPasswordAlert: ""
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
        let resultConfPassword;

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
        });

        //pole potwierdzenia hasła
        if (this.state.password !== this.state.confPassword || this.state.confPassword === "") {
            resultConfPassword = <span className="nameAlert">Wprowadzono niepoprawne hasło!</span>
        }
        this.setState({
            confPasswordAlert: resultConfPassword
        })


    };
    render() {
        return (
            <>
                <HomeHeader/>
                <div className="container register">
                    <h2 className="registerHeader">Załóż konto</h2>
                    <div className="registerDec"></div>
                    <form className="registerForm" onSubmit={this.handleSubmit}>
                        <div className="name_password_cont">
                            <label htmlFor="" className="registerEmail">Email
                                <input type="text"
                                       className={`registerEmailText ${this.state.emailAlert ? "alert" : ""}`}
                                       name="email"
                                       value={this.state.email}
                                       onChange={this.handleChange}/>
                                {this.state.emailAlert}
                            </label>
                            <label htmlFor="" className="registerPassword">Hasło
                                <input type="password"
                                       className={`registerPasswordText ${this.state.passwordAlert ? "alert" : ""}`}
                                       name="password"
                                       value={this.state.password}
                                       onChange={this.handleChange}/>
                                {this.state.passwordAlert}
                            </label>
                            <label htmlFor="" className="confirmPassword">Powtórz hasło
                                <input type="password"
                                       className={`confirmPasswordText ${this.state.confPasswordAlert ? "alert" : ""}`}
                                       name="confPassword"
                                       value={this.state.confPassword}
                                       onChange={this.handleChange}/>
                                {this.state.confPasswordAlert}
                            </label>
                        </div>
                        <div className="log_reg">
                            <LinkR to="/login" className="login">
                                <button className="log">Zaloguj się</button>
                            </LinkR>
                                <button className="reg">Załóż konto</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}


export default Register;