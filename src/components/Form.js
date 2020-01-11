import React, {Component} from 'react';
import './Form.scss'
import HomeMain from "./HomeMain";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";
import HomeHeader from "./HomeHeader";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showStep1: true,
            showStep2: false,
            showStep3: false,
            showStep4: false,
            showSummary: false,
            showThanks: false,
        }
    }

    handleShowStep1 = () => {
        this.setState({
            showStep1: true,
            showStep2: false,
            showStep3: false,
            showStep4: false,
            showSummary: false,
            showThanks: false
        })
    };

    //formularz - krok pierwszy //

    handleStepOneOptionChange = (eventStepOneChange) => {
        this.setState({
            stepOneCheckedOption: eventStepOneChange.target.value,
            stepOneAlert: ""
        })
    };
    handleShowStep2 = (eventStepOneSubmit) => {
        eventStepOneSubmit.preventDefault();
        let stepOneAlert;
        if (!this.state.stepOneCheckedOption) {
            stepOneAlert = <span className="stepOneAlert">Wybierz jedną z opcji!</span>;
            this.setState({
                stepOneAlert: stepOneAlert
            });
        } else {
            this.setState({
                showStep1: false,
                showStep2: true,
                showStep3: false,
                showStep4: false,
                showSummary: false,
                showThanks: false
            })
        }
    };

    //formularz - krok drugi //

    handleStepTwoDropdown = () => {
        this.setState({
            stepTwoDropdownOpen: !this.state.stepTwoDropdownOpen
        })
    };
    handleStepTwoOptionChange = (eventStepTwoChange) => {
        this.setState({
            stepTwoValue: eventStepTwoChange.target.value,
            stepTwoDropdownOpen: !this.state.stepTwoDropdownOpen,
            stepTwoAlert: ""
        })
    };

    handleShowStep3 = (eventStepTwoSubmit) => {
        eventStepTwoSubmit.preventDefault();
        let stepTwoAlert;
        if (!this.state.stepTwoValue) {
            stepTwoAlert = <div className="stepTwoAlert">Wybierz ilość worków!</div>;
            this.setState({
                stepTwoAlert: stepTwoAlert
            });
        } else {
            this.setState({
                showStep1: false,
                showStep2: false,
                showStep3: true,
                showStep4: false,
                showSummary: false,
                showThanks: false
            })
        }
    };
    handleShowStep4 = () => {
        this.setState({
            showStep1: false,
            showStep2: false,
            showStep3: false,
            showStep4: true,
            showSummary: false,
            showThanks: false
        })
    };
    handleShowSummary = () => {
        this.setState({
            showStep1: false,
            showStep2: false,
            showStep3: false,
            showStep4: false,
            showSummary: true,
            showThanks: false
        })
    };
    handleShowThanks = () => {
        this.setState({
            showStep1: false,
            showStep2: false,
            showStep3: false,
            showStep4: false,
            showSummary: false,
            showThanks: true
        })
    };


    render() {
        return (
            <>
                <HomeHeader/>
                <div className="formIntroduction">
                    <div className="introduction">
                        <h2 className="introHeader">Oddaj rzeczy, których już nie chcesz<br/>POTRZEBUJĄCYM</h2>
                        <div className="formDec"></div>
                        <p className="infoFourSteps">Wystarczą 4 proste kroki:</p>
                        <div className="introFormSteps">
                            <div className="introStep introStepLeft">
                                <div className="rotateEmptyBox"></div>
                                <p className="stepNum">1</p>
                                <p className="stepText">Wybierz<br/>rzeczy</p>
                            </div>
                            <div className="introStep">
                                <div className="rotateEmptyBox"></div>
                                <p className="stepNum">2</p>
                                <p className="stepText">Spakuj je<br/>w worki</p>
                            </div>
                            <div className="introStep">
                                <div className="rotateEmptyBox"></div>
                                <p className="stepNum">3</p>
                                <p className="stepText">Wybierz<br/>fundację</p>
                            </div>
                            <div className="introStep">
                                <div className="rotateEmptyBox"></div>
                                <p className="stepNum">4</p>
                                <p className="stepText">Zamów<br/>kuriera</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Step 1/4*/}
                {this.state.showStep1 && (
                    <>
                        <div className="formHeader">
                            <h2 className="warnFormHeader">Ważne!</h2>
                            <p className="textFormHeader">Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu
                                będziemy
                                wiedzieć komu najlepiej je przekazać.</p>
                        </div>
                        <div className="formMainPart">
                            <p className="formStep">Krok 1/4</p>
                            <h2 className="formStepInstrOne">Zaznacz co chcesz oddać:</h2>
                            <form action="" className="formStepOne">
                                <label className="stepOneLabel">
                                    <input type="radio" name="goods"
                                           value="goodClothes"
                                           checked={this.state.stepOneCheckedOption === "goodClothes"}
                                           onChange={this.handleStepOneOptionChange}
                                           className="stepOneInput"/>
                                    <span className="customInput"></span>
                                    ubrania, które nadają się do ponownego użycia
                                </label>
                                <label className="stepOneLabel">
                                    <input type="radio" name="goods" value="badClothes"
                                           checked={this.state.stepOneCheckedOption === "badClothes"}
                                           onChange={this.handleStepOneOptionChange}
                                           className="stepOneInput"/>
                                    <span className="customInput"></span>
                                    ubrania, do wyrzucenia
                                </label>
                                <label className="stepOneLabel">
                                    <input type="radio" name="goods" value="toys"
                                           checked={this.state.stepOneCheckedOption === "toys"}
                                           onChange={this.handleStepOneOptionChange}
                                           className="stepOneInput"/>
                                    <span className="customInput"></span>
                                    zabawki
                                </label>
                                <label className="stepOneLabel">
                                    <input type="radio" name="goods" value="books"
                                           checked={this.state.stepOneCheckedOption === "books"}
                                           onChange={this.handleStepOneOptionChange}
                                           className="stepOneInput"/>
                                    <span className="customInput"></span>
                                    książki
                                </label>
                                <label className="stepOneLabel">
                                    <input type="radio" name="goods" value="other"
                                           checked={this.state.stepOneCheckedOption === "other"}
                                           onChange={this.handleStepOneOptionChange}
                                           className="stepOneInput"/>
                                    <span className="customInput"></span>
                                    inne
                                </label>
                                {this.state.stepOneAlert}
                            </form>
                            <button className="stepOneFwdBtn" onClick={this.handleShowStep2}>Dalej</button>
                        </div>
                    </>
                )}
                {/*Step 2/4*/}
                {this.state.showStep2 && (
                    <>
                        <div className="formHeader">
                            <h2 className="warnFormHeader">Ważne!</h2>
                            <p className="textFormHeader">Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną
                                instrukcję
                                jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
                        </div>
                        <div className="formMainPart">
                            <p className="formStep">Krok 2/4</p>
                            <h2 className="formStepInstrTwo">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                            <form action="" className="formStepTwo">
                                <label className="stepTwoLabel">Liczba 60l worków:</label>
                                {this.state.stepTwoAlert}
                                <div className="stepTwoSelect" onClick={this.handleStepTwoDropdown}>
                                    <span className="stepTwoSelectChoose">{`${this.state.stepTwoValue ? this.state.stepTwoValue : "-wybierz-"}`}</span>
                                    <div
                                        className={`arrowClosed ${this.state.stepTwoDropdownOpen ? "open" : ""}`}></div>
                                </div>
                                <div className={`stepTwoOptions ${this.state.stepTwoDropdownOpen ? "open" : ""}`}>
                                    <option value="1" className="stepTwoSelOpt"
                                          onClick={this.handleStepTwoOptionChange}>1</option>
                                    <option value="2" className="stepTwoSelOpt"
                                          onClick={this.handleStepTwoOptionChange}>2</option>
                                    <option value="3" className="stepTwoSelOpt"
                                          onClick={this.handleStepTwoOptionChange}>3</option>
                                    <option value="4" className="stepTwoSelOpt"
                                          onClick={this.handleStepTwoOptionChange}>4</option>
                                    <option value="5" className="stepTwoSelOpt"
                                          onClick={this.handleStepTwoOptionChange}>5</option>
                                </div>
                            </form>
                            <button className="stepTwoRevBtn" onClick={this.handleShowStep1}>Wstecz</button>
                            <button className="stepTwoFwdBtn" onClick={this.handleShowStep3}>Dalej</button>
                        </div>
                    </>
                )}
                {/*Step 3/4*/}
                {this.state.showStep3 && (
                    <>
                        <div className="formHeader">
                            <h2 className="warnFormHeader">Ważne!</h2>
                            <p className="textFormHeader">Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej
                                organizacji w
                                wyszukiwarce. Możesz też filtrować organizacje<br/>po ich lokalizacji bądź celu ich
                                pomocy.</p>
                        </div>
                        <div className="formMainPart">
                            <p className="formStep">Krok 3/4</p>
                            <h2 className="formStepInstrThree">Lokalizacja:</h2>
                            <form action="" className="formStepThree">
                                <select className="stepThreeSelect">
                                    <option value="0" className="selOption">-wybierz-</option>
                                    <option value="1" className="selOption">Poznań</option>
                                    <option value="2" className="selOption">Warszawa</option>
                                    <option value="3" className="selOption">Kraków</option>
                                    <option value="4" className="selOption">Wrocław</option>
                                    <option value="5" className="selOption">Katowice</option>
                                </select>
                                <div className="helpGroups">
                                    <span className="helpGroupsHeader">Komu chcesz pomóc?</span>
                                    <label className="helpGroupsLabel">
                                        <input type="checkbox" className="helpGroupsInput"/>
                                        <span className="helpGroupsCheckmark">dzieciom</span>
                                    </label>
                                    <label className="helpGroupsLabel">
                                        <input type="checkbox" className="helpGroupsInput"/>
                                        <span className="helpGroupsCheckmark">samotnym matkom</span>
                                    </label>
                                    <label className="helpGroupsLabel">
                                        <input type="checkbox" className="helpGroupsInput"/>
                                        <span className="helpGroupsCheckmark">bezdomnym</span>
                                    </label><br/>
                                    <label className="helpGroupsLabel">
                                        <input type="checkbox" className="helpGroupsInput"/>
                                        <span className="helpGroupsCheckmark">niepełnosprawnym</span>
                                    </label>
                                    <label className="helpGroupsLabel">
                                        <input type="checkbox" className="helpGroupsInput"/>
                                        <span className="helpGroupsCheckmark">osobom starszym</span>
                                    </label>
                                    <label className="localizationSpecificLabel">Wpisz nazwę konkretnej organizacji
                                        (opcjonalnie)
                                        <input type="text" className="localizationSpecific"/></label>
                                </div>
                            </form>
                            <button className="stepThreeRevBtn" onClick={this.handleShowStep2}>Wstecz</button>
                            <button className="stepThreeFwdBtn" onClick={this.handleShowStep4}>Dalej</button>
                        </div>
                    </>
                )}
                {/*Step 4/4*/}
                {this.state.showStep4 && (
                    <>
                        <div className="formHeader">
                            <h2 className="warnFormHeader">Ważne!</h2>
                            <p className="textFormHeader">Podaj adres oraz termin odbioru rzeczy.</p>
                        </div>
                        <div className="formMainPart">
                            <p className="formStep">Krok 4/4</p>
                            <h2 className="formStepInstrFour">Podaj adres oraz termin odbioru rzeczy.</h2>
                            <form action="" className="formStepFour">
                                <div className="address_data_form">
                                    <span className="addressDataHeader">Adres odbioru:</span>
                                    <label className="addressLabel">
                                        <span className="addressLabelSpan">Ulica</span>
                                        <input type="text" className="addressInput street"/>
                                    </label>
                                    <label className="addressLabel">
                                        <span className="addressLabelSpan">Miasto</span>
                                        <input type="text" className="addressInput city"/>
                                    </label>
                                    <label className="addressLabel">
                                        <span className="addressLabelSpan">Kod<br/>pocztowy</span>
                                        <input type="text" className="addressInput postCode"/>
                                    </label>
                                    <label className="addressLabel">
                                        <span className="addressLabelSpan">Numer<br/>telefonu</span>
                                        <input type="text" className="addressInput phone"/>
                                    </label>
                                </div>
                                <div className="time_data_form">
                                    <span className="timeDataHeader">Termin odbioru</span>
                                    <label className="timeLabel">
                                        <span className="timeLabelSpan">Data</span>
                                        <input type="text" className="dataInput date"/>
                                    </label>
                                    <label className="timeLabel">
                                        <span className="timeLabelSpan">Godzina</span>
                                        <input type="text" className="dataInput time"/>
                                    </label>
                                    <label className="timeLabel note">
                                        <span className="timeLabelSpan">Uwagi<br/>dla kuriera</span>
                                        <textarea className="dataInput note"/>
                                    </label>
                                </div>
                            </form>
                            <button className="stepFourRevBtn" onClick={this.handleShowStep3}>Wstecz</button>
                            <button className="stepFourFwdBtn" onClick={this.handleShowSummary}>Dalej</button>
                        </div>
                    </>
                )}
                {/*Summary*/}
                {this.state.showSummary && (
                    <>
                        <div className="formMainPartSum">
                            <h2 className="summaryHeader">Podsumowanie Twojej darowizny</h2>
                            <div className="formSummary">
                                <div className="youGiveContainer">
                                    <p className="youGiveHeader">Oddajesz</p>
                                    <p className="youGiveCont">4 worki, ubrania w dobrym stanie, dzieciom</p>
                                    <p className="youGivePlace">dla lokalizacji: Warszawa</p>
                                </div>
                                <div className="data_time_summary">
                                    <div className="address_data_summary">
                                        <span className="addressDataHeader">Adres odbioru:</span>
                                        <div className="addressLabelSum">
                                            <span className="addressLabelName">Ulica</span>
                                            <span className="addressSummaryInput">Prosta 52</span>
                                        </div>
                                        <div className="addressLabelSum">
                                            <span className="addressLabelName">Miasto</span>
                                            <span className="addressSummaryInput">Poznań</span>
                                        </div>
                                        <div className="addressLabelSum">
                                            <span className="addressLabelName">Kod<br/>pocztowy</span>
                                            <span className="addressSummaryInput">60-179</span>
                                        </div>
                                        <div className="addressLabelSum">
                                            <span className="addressLabelName">Numer<br/>telefonu</span>
                                            <span className="addressSummaryInput">123-456-789</span>
                                        </div>
                                    </div>
                                    <div className="time_data_summary">
                                        <span className="timeDataHeader">Termin odbioru</span>
                                        <div className="timeLabelSum">
                                            <span className="timeLabelName">Data</span>
                                            <span className="dataSummaryInput">12.18.1979</span>
                                        </div>
                                        <div className="timeLabelSum">
                                            <span className="timeLabelName">Godzina</span>
                                            <span className="dataSummaryInput">16:00</span>
                                        </div>
                                        <div className="timeLabelSum">
                                            <span className="timeLabelName">Uwagi<br/>dla kuriera</span>
                                            <span className="dataSummaryInput">Wjazd na osiedle pierwszą bramą. Kod do domofonu to 1234</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="stepSumRevBtn" onClick={this.handleShowStep4}>Wstecz</button>
                            <button className="stepSumFwdBtn" onClick={this.handleShowThanks}>Potwierdzam</button>
                        </div>
                    </>
                )}
                {/*Thanks*/}
                {this.state.showThanks && (
                    <>
                        <div className="formMainPartSum">
                            <p className="thanks">Dziękujemy za przesłanie formularza.<br/>Na maila prześlemy
                                wszelkie<br/>informacje
                                o odbiorze.</p>
                            <div className="thanksDec"></div>

                        </div>
                    </>
                )}
                <HomeContact/>
                <HomeFooter/>
            </>
        )
    }
}

export default Form;