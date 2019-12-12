import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import './HomeHeader.scss';

class HomeHeader extends Component {

    render() {
        return (
            <>
                <div className="container header">
                    <div className="homeHeader">
                        <ul className="logReg">
                            <li className="logRegLi">
                                <Link to="/login" className="login">Zaloguj</Link>
                            </li>
                            <li className="logRegLi">
                                <Link to="/register" className="register">Załóż konto</Link>
                            </li>
                        </ul>
                        <ul className="nav">
                            <li className="navEl">
                                <a href="" className="navElText">Start</a>
                            </li>
                            <li className="navEl">
                                <a href="" className="navElText">O co chodzi?</a>
                            </li>
                            <li className="navEl">
                                <a href="" className="navElText">O nas</a>
                            </li>
                            <li className="navEl">
                                <a href="" className="navElText">Fundacja i organizacje</a>
                            </li>
                            <li className="navEl">
                                <a href="" className="navElText">Kontak</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}


export default HomeHeader;