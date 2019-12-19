import React, {Component} from 'react';
import './Form.scss'
import HomeMain from "./HomeMain";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";
import HomeHeader from "./HomeHeader";

class Form extends Component {

    render() {
        return (
            <>
                <HomeHeader/>
                <div className="formIntroduction">
                    <div className="introduction">
                        <h2 className="introHeader">Oddaj rzeczy, których już nie chcesz<br/>POTRZEBUJĄCYM</h2>
                        <div className="formDec"></div>
                        <p className="intoFourSteps">Wystarczą 4 proste kroki:</p>
                        <div className="introFormSteps">
                            <div className="introStep">
                                <p className="stepNum">1</p>
                                <p className="stepText">Wybierz<br/>rzeczy</p>
                            </div>
                            <div className="introStep">
                                <p className="stepNum">2</p>
                                <p className="stepText">Spakuj je<br/>w worki</p>
                            </div>
                            <div className="introStep">
                                <p className="stepNum">3</p>
                                <p className="stepText">Wybierz<br/>fundację</p>
                            </div>
                            <div className="introStep">
                                <p className="stepNum">4</p>
                                <p className="stepText">Zamów<br/>kuriera</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="formHeader">
                    <h2 className="warnFormHeader">Ważne!</h2>
                    <p className="textFormHeader">Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
                </div>
                <div className="formMainPart">
                    <p className="formStep">Krok1/4</p>
                    <h2 className="formStepInstr">Zaznacz co chcesz oddać:</h2>
                    <form action="formStepOne" className="">
                        <label className="stepOneLabel">
                            <input type="radio" name="goods" value="ubrania, które nadają się do ponownego użycia" className="stepOneInput"/>
                            ubrania, które nadają się do ponownego użycia
                        </label>
                        <label className="stepOneLabel">
                            <input type="radio" name="goods" value="ubrania, do wyrzucenia" className="stepOneInput"/>
                            ubrania, do wyrzucenia
                        </label>
                        <label className="stepOneLabel">
                            <input type="radio" name="goods" value="zabawki" className="stepOneInput"/>
                            zabawki
                        </label>
                        <label className="stepOneLabel">
                            <input type="radio" name="goods" value="książki" className="stepOneInput"/>
                            książki
                        </label>
                        <label className="stepOneLabel">
                            <input type="radio" name="goods" value="inne" className="stepOneInput"/>
                            inne
                        </label>
                    </form>
                    <button className="stepOneFwdBtn">Dalej</button>
                </div>
                <HomeContact/>
                <HomeFooter/>
            </>
        )
    }
}

export default Form;