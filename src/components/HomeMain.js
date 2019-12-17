import React, {Component} from 'react';
import {Link as LinkR} from 'react-router-dom';
import './HomeMain.scss';

class HomeMain extends Component {

    render() {
        return (
            <div className="container main">
                <div className="main_left_div"></div>
                <div className="main_right_div">
                    <div className="main_content">
                        <p className="main_content_lead">Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce.
                        </p>
                        <div className="main_content_dec"></div>
                        <div className="main_content_widgets">
                            <LinkR to="./login">
                                <button className="main_btn_widget left">Oddaj<br/>rzeczy</button>
                            </LinkR>
                            <LinkR to="./login">
                                <button className="main_btn_widget right">Zorganizuj<br/>zbiórkę</button>
                            </LinkR>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default HomeMain;