import React, {Component} from 'react';
import {HashRouter, Route, Link as LinkR, Switch, NavLink,} from 'react-router-dom';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './HomeHeader.scss';

class HomeHeader extends Component {

    render() {
        return (
            <>
                <div className="container header">
                    <div className="homeHeader">
                        <ul className="logReg">
                            <li className="logRegLi">
                                <LinkR to="/login" className="login">Zaloguj</LinkR>
                            </li>
                            <li className="logRegLi">
                                <LinkR to="/register" className="register">Załóż konto</LinkR>
                            </li>
                        </ul>
                        <ul className="nav">
                            <li className="navEl">
                                <a href="" className="navElText">Start</a>
                            </li>
                            <li className="navEl">
                                <Link
                                    className="navElText"
                                    activeClass="active"
                                    to="HomeFourSteps"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration= {1000}
                                >O co chodzi?</Link>
                            </li>
                            <li className="navEl">
                                <Link
                                    className="navElText"
                                    activeClass="active"
                                    to="HomeAbout"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration= {1000}
                                >O nas</Link>
                            </li>
                            <li className="navEl">
                                <a href="" className="navElText">Fundacja i organizacje</a>
                            </li>
                            <li className="navEl">
                                <Link
                                    className="navElText"
                                    activeClass="active"
                                    to="HomeContact"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration= {1000}
                                >Kontakt</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}


export default HomeHeader;