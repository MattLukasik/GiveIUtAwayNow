import React, { Component } from 'react';
import './HomeFourSteps.scss';
import {Link as LinkR} from "react-router-dom";
import {Link} from "react-scroll";

class HomeFourSteps extends Component {


    render() {
        return (
            <div className="container fourSteps" id="HomeFourSteps">
                <h2 className="fourStepHeader">Wystarczą 4 proste kroki</h2>
                <div className="fourStep_content_dec"></div>
                <div className="fourStepsDiv">
                    <div className="step step_1">
                        <div className="stepIcon icon_1"></div>
                        <p className="stepLead">Wybierz rzeczy</p>
                        <div className="stepLine"></div>
                        <p className="stepText">ubrania, zabawki,<br/>sprzęt  i inne</p>
                    </div>
                    <div className="step step_2">
                        <div className="stepIcon icon_2"></div>
                        <p className="stepLead">Spakuj je</p>
                        <div className="stepLine"></div>
                        <p className="stepText">skorzystaj z<br/>worków na śmieci</p>
                    </div>
                    <div className="step step_3">
                        <div className="stepIcon icon_3"></div>
                        <p className="stepLead">Zdecyduj komu<br/>chcesz pomóc</p>
                        <div className="stepLine"></div>
                        <p className="stepText">wybierz zaufane<br/>miejsce</p>
                    </div>
                    <div className="step step_4">
                        <div className="stepIcon icon_4"></div>
                        <p className="stepLead">Zamów kuriera</p>
                        <div className="stepLine"></div>
                        <p className="stepText">kurier przyjedzie<br/>w dogodnym terminie</p>
                    </div>
                </div>
                <LinkR to="/give-things" className="link">
                    <button className="main_btn_widget">Oddaj<br/>rzeczy</button>
                </LinkR>
            </div>
        )
    }
}



export default HomeFourSteps;