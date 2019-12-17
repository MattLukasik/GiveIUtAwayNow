import React, {Component} from 'react';
import HomeHeader from './HomeHeader';
import './Logout.scss'
import {Link as LinkR} from "react-router-dom";

class Logout extends Component {

    render() {
        return (
            <>
                <HomeHeader/>
                <div className="container logout">
                    <h2 className="logoutHeader">Wylogowanie nastąpiło<br/>pomyślnie!</h2>
                    <div className="logoutDec"></div>
                    <LinkR to="/" className="home">
                        <button className="startBtn">Strona główna</button>
                    </LinkR>
                </div>
            </>
        )
    }
}


export default Logout;