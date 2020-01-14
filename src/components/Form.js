import React, {Component} from 'react';
import './Form.scss'
import HomeMain from "./HomeMain";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";
import HomeHeader from "./HomeHeader";
import DatePicker from "react-datepicker";
import Moment from 'react-moment';
import "react-datepicker/dist/react-datepicker.css";

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
            children: false,
            mothers:false,
            homeless: false,
            disabled: false,
            older: false,
            orgName:"",
            street:"",
            city:"",
            zipCode: "",
            phone: "",
            date: "",
            startDate: new Date(),
            hour: "",
            startHour: new Date(),
            info: ""
        };
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

    //formularz - krok trzeci //

    handleStepThreeDropdown = () => {
        this.setState({
            stepThreeDropdownOpen: !this.state.stepThreeDropdownOpen
        })
    };
    handleStepThreeDropDownChange = (eventStepThreeDropChange) => {
        this.setState({
            stepThreeDropValue: eventStepThreeDropChange.target.value,
            stepThreeDropdownOpen: !this.state.stepThreeDropdownOpen,
            stepThreeDropdownAlert: ""
        })
    };

    handleStepThreeChildrenChange = (e) => {
        this.setState({
            children: !this.state.children,
            stepThreeCheckFormAlert: ""
        });
    };
    handleStepThreeMothersChange = (e) => {
        this.setState({
            mothers: !this.state.mothers,
            stepThreeCheckFormAlert: ""
        });
    };
    handleStepThreeHomelessChange = (e) => {
        this.setState({
            homeless: !this.state.homeless,
            stepThreeCheckFormAlert: ""
        });
    };
    handleStepThreeDisabledChange = (e) => {
        this.setState({
            disabled: !this.state.disabled,
            stepThreeCheckFormAlert: ""
        });
    };
    handleStepThreeOlderChange = (e) => {
        this.setState({
            older: !this.state.older,
            stepThreeCheckFormAlert: ""
        });
    };

    handleOrgNameChange = (e) => {
        this.setState({
            orgName: e.target.value,
            stepThreeDropdownAlert: ""
        });
    };

    handleShowStep4 = (eventStepThreeSubmit) => {
        eventStepThreeSubmit.preventDefault();
        let stepThreeDropdownAlert;
        let stepThreeCheckFormAlert;
        if (!this.state.stepThreeDropValue && !this.state.orgName) {
            stepThreeDropdownAlert = <span className="stepThreeDropdownAlert">Wybierz lokalizację lub podaj nazwę konkretnej organizacji w polu poniżej!</span>;
            this.setState({
                stepThreeDropdownAlert: stepThreeDropdownAlert
            });
        } else if (!this.state.children && !this.state.mothers && !this.state.homeless && !this.state.disabled && !this.state.older){
            stepThreeCheckFormAlert = <span className="stepThreeCheckFormAlert">Wybierz komu chcesz pomóc!</span>;
            this.setState({
                stepThreeCheckFormAlert: stepThreeCheckFormAlert
            });
        } else {
            this.setState({
                showStep1: false,
                showStep2: false,
                showStep3: false,
                showStep4: true,
                showSummary: false,
                showThanks: false
            })
        }
    };

    //formularz - krok czwarty //

    handleStreetChange = (e) => {
        this.setState({
            street: e.target.value,
            stepFourAlert: ""
        })
    };
    handleCityChange = (e) => {
        this.setState({
            city: e.target.value,
            stepFourAlert: ""
        })
    };
    handleZipCodeChange = (e) => {
        this.setState({
            zipCode: e.target.value,
            stepFourAlert: ""
        })
    };
    handlePhoneChange = (e) => {
        this.setState({
            phone: e.target.value,
            stepFourAlert: ""
        })
    };
    handleDate = (date) => {
        this.setState({
            startDate: date,
            stepFourAlert: ""
        });
    };
    handleHour = (date) => {
        this.setState({
            startHour: date,
            stepFourAlert: ""
        })
    };
    handleInfoChange = (e) => {
        this.setState({
            info: e.target.value,
        })
    };

    handleShowSummary = (eventStepFourSubmit) => {
        eventStepFourSubmit.preventDefault();
        let stepFourLeftAlert;
        let stepFourRightAlert;
        if (!this.state.street || !/[0-9a-zA-Z]{5,}/.test(this.state.street)) {
            stepFourLeftAlert = <span className="stepFourLeftAlert">Wpisz ulicę i numer domu!</span>;
            this.setState({
                stepFourAlert: stepFourLeftAlert
            });
        } else if (!this.state.city || !/[0-9a-zA-Z]{2,}/.test(this.state.city)) {
            stepFourLeftAlert = <span className="stepFourLeftAlert">Podaj miasto!</span>;
            this.setState({
                stepFourAlert: stepFourLeftAlert
            });
        } else if (!this.state.zipCode || !/[0-9]{2}(-[0-9]{3})/.test(this.state.zipCode)) {
            stepFourLeftAlert = <span className="stepFourLeftAlert">Podaj kod pocztowy!</span>;
            this.setState({
                stepFourAlert: stepFourLeftAlert
            });
        } else if (!this.state.phone || !/[0-9]{9}/.test(this.state.phone)) {
            stepFourLeftAlert = <span className="stepFourLeftAlert">Podaj numer kontaktowy!</span>;
            this.setState({
                stepFourAlert: stepFourLeftAlert
            });
        } else if (!this.state.startDate) {
            stepFourRightAlert = <span className="stepFourRightAlert">Podaj datę odbioru przesyłki!</span>;
            this.setState({
                stepFourAlert: stepFourRightAlert
            });
        } else if (!this.state.startHour) {
            stepFourRightAlert = <span className="stepFourRightAlert">Podaj orientacyjną godzinę odbioru!</span>;
            this.setState({
                stepFourAlert: stepFourRightAlert
            });
        } else {
            this.setState({
                showStep1: false,
                showStep2: false,
                showStep3: false,
                showStep4: false,
                showSummary: true,
                showThanks: false
            })
        }
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
        let msgChild;
        if (this.state.children) {
            msgChild = "dzieciom, "
        } else {
            msgChild = ""
        }

        let msgMother;
        if (this.state.mothers) {
            msgMother = "samotnym matkom, "
        } else {
            msgMother = ""
        }

        let msgHomeless;
        if (this.state.homeless) {
            msgHomeless = "bezdomnym, "
        } else {
            msgHomeless = ""
        }

        let msgDisable;
        if (this.state.disabled) {
            msgDisable = "niepełnosprawnym, "
        } else {
            msgDisable = ""
        }

        let msgOlder;
        if (this.state.older) {
            msgOlder = "osobom starszym, "
        } else {
            msgOlder = ""
        }


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
                                           value="ubrania w dobrym stanie"
                                           checked={this.state.stepOneCheckedOption === "ubrania w dobrym stanie"}
                                           onChange={this.handleStepOneOptionChange}
                                           className="stepOneInput"/>
                                    <span className="customInput"></span>
                                    ubrania, które nadają się do ponownego użycia
                                </label>
                                <label className="stepOneLabel">
                                    <input type="radio" name="goods" value="ubrania do wyrzucenia"
                                           checked={this.state.stepOneCheckedOption === "ubrania do wyrzucenia"}
                                           onChange={this.handleStepOneOptionChange}
                                           className="stepOneInput"/>
                                    <span className="customInput"></span>
                                    ubrania, do wyrzucenia
                                </label>
                                <label className="stepOneLabel">
                                    <input type="radio" name="goods" value="zabawki"
                                           checked={this.state.stepOneCheckedOption === "zabawki"}
                                           onChange={this.handleStepOneOptionChange}
                                           className="stepOneInput"/>
                                    <span className="customInput"></span>
                                    zabawki
                                </label>
                                <label className="stepOneLabel">
                                    <input type="radio" name="goods" value="książki"
                                           checked={this.state.stepOneCheckedOption === "książki"}
                                           onChange={this.handleStepOneOptionChange}
                                           className="stepOneInput"/>
                                    <span className="customInput"></span>
                                    książki
                                </label>
                                <label className="stepOneLabel">
                                    <input type="radio" name="goods" value="inne"
                                           checked={this.state.stepOneCheckedOption === "inne"}
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
                                    <div className={`arrowClosed ${this.state.stepTwoDropdownOpen ? "open" : ""}`}></div>
                                </div>
                                <div className={`stepTwoOptions ${this.state.stepTwoDropdownOpen ? "open" : ""}`}>
                                    <option value="1 worek" className="stepTwoSelOpt"
                                            onClick={this.handleStepTwoOptionChange}>1</option>
                                    <option value="2 worki" className="stepTwoSelOpt"
                                            onClick={this.handleStepTwoOptionChange}>2</option>
                                    <option value="3 worki" className="stepTwoSelOpt"
                                             onClick={this.handleStepTwoOptionChange}>3</option>
                                    <option value="4 worki" className="stepTwoSelOpt"
                                            onClick={this.handleStepTwoOptionChange}>4</option>
                                    <option value="5 worków" className="stepTwoSelOpt"
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
                                <div className="stepThreeSelect" onClick={this.handleStepThreeDropdown}>
                                    <span className="stepThreeSelectChoose">{`${this.state.stepThreeDropValue ? this.state.stepThreeDropValue : "-wybierz-"}`}</span>
                                    <div className={`arrowClosed ${this.state.stepThreeDropdownOpen ? "open" : ""}`}></div>
                                </div>
                                {this.state.stepThreeDropdownAlert}
                                <div className={`stepThreeOptions ${this.state.stepThreeDropdownOpen ? "open" : ""}`}>
                                    <option value="Poznań" className="stepThreeSelOpt"
                                            onClick={this.handleStepThreeDropDownChange}>Poznań</option>
                                    <option value="Warszawa" className="stepThreeSelOpt"
                                            onClick={this.handleStepThreeDropDownChange}>Warszawa</option>
                                    <option value="Kraków" className="stepThreeSelOpt"
                                            onClick={this.handleStepThreeDropDownChange}>Kraków</option>
                                    <option value="Wrocław" className="stepThreeSelOpt"
                                            onClick={this.handleStepThreeDropDownChange}>Wrocław</option>
                                    <option value="Katowice" className="stepThreeSelOpt"
                                            onClick={this.handleStepThreeDropDownChange}>Katowice</option>
                                </div>
                                <div className="helpGroups">
                                    {this.state.stepThreeCheckFormAlert}
                                    <span className="helpGroupsHeader">Komu chcesz pomóc?</span>
                                    <label className="helpGroupsLabel">
                                        <input type="checkbox"
                                               className="helpGroupsInput"
                                               name="children"
                                               checked={this.state.children}
                                               onChange={this.handleStepThreeChildrenChange}/>
                                        <span className="helpGroupsCheckmark">dzieciom</span>
                                    </label>
                                    <label className="helpGroupsLabel">
                                        <input type="checkbox"
                                               className="helpGroupsInput"
                                               name="mothers"
                                               checked={this.state.mothers}
                                               onChange={this.handleStepThreeMothersChange}/>
                                        <span className="helpGroupsCheckmark">samotnym matkom</span>
                                    </label>
                                    <label className="helpGroupsLabel">
                                        <input type="checkbox"
                                               className="helpGroupsInput"
                                               name="homeless"
                                               checked={this.state.homeless}
                                               onChange={this.handleStepThreeHomelessChange}/>
                                        <span className="helpGroupsCheckmark">bezdomnym</span>
                                    </label><br/>
                                    <label className="helpGroupsLabel">
                                        <input type="checkbox"
                                               className="helpGroupsInput"
                                               name="disabled"
                                               checked={this.state.disabled}
                                               onChange={this.handleStepThreeDisabledChange}/>
                                        <span className="helpGroupsCheckmark">niepełnosprawnym</span>
                                    </label>
                                    <label className="helpGroupsLabel">
                                        <input type="checkbox"
                                               className="helpGroupsInput"
                                               name="older"
                                               checked={this.state.older}
                                               onChange={this.handleStepThreeOlderChange}/>
                                        <span className="helpGroupsCheckmark">osobom starszym</span>
                                    </label>
                                    <label className="organizationSpecificLabel">Wpisz nazwę konkretnej organizacji
                                        (opcjonalnie)
                                        <input type="text"
                                               className="organizationSpecific"
                                               value={this.state.orgName}
                                               name="orgName"
                                               onChange={this.handleOrgNameChange}/>
                                    </label>
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
                                        <input type="text" className="addressInput street"
                                               value={this.state.street}
                                               name="street"
                                               onChange={this.handleStreetChange}/>
                                    </label>
                                    <label className="addressLabel">
                                        <span className="addressLabelSpan">Miasto</span>
                                        <input type="text" className="addressInput city"
                                               value={this.state.city}
                                               name="city"
                                               onChange={this.handleCityChange}/>
                                    </label>
                                    <label className="addressLabel">
                                        <span className="addressLabelSpan">Kod<br/>pocztowy</span>
                                        <input type="text" className="addressInput postCode"
                                               value={this.state.zipCode}
                                               name="zipCode"
                                               onChange={this.handleZipCodeChange}/>
                                    </label>
                                    <label className="addressLabel">
                                        <span className="addressLabelSpan">Numer<br/>telefonu</span>
                                        <input type="text" className="addressInput phone"
                                               value={this.state.phone}
                                               name="phone"
                                               onChange={this.handlePhoneChange}/>
                                    </label>
                                </div>
                                <div className="time_data_form">
                                    <span className="timeDataHeader">Termin odbioru</span>
                                    <label className="timeLabel">
                                        <span className="timeLabelSpan">Data</span>
                                        <DatePicker type="text" className="dataInput date"
                                                value={this.state.startDate}
                                                name="date"
                                                selected={this.state.startDate}
                                                dateFormat="dd.MM.yyyy"
                                                onChange={this.handleDate}/>
                                    </label>
                                    <label className="timeLabel">
                                        <span className="timeLabelSpan">Godzina</span>
                                        <DatePicker type="text" className="dataInput time"
                                               value={this.state.startHour}
                                               name="hour"
                                               showTimeSelect
                                               showTimeSelectOnly
                                               timeIntervals={30}
                                               timeCaption="Time"
                                               dateFormat="h:mm aa"
                                               selected={this.state.startHour}
                                               onChange={this.handleHour}/>
                                    </label>
                                    <label className="timeLabel note">
                                        <span className="timeLabelSpan">Uwagi<br/>dla kuriera</span>
                                        <textarea className="dataInput note"
                                                  value={this.state.info}
                                                  name="info"
                                                  onChange={this.handleInfoChange}/>
                                    </label>
                                </div>
                                {this.state.stepFourAlert}
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
                                    <p className="youGiveCont">{this.state.stepTwoValue}, {this.state.stepOneCheckedOption}, {msgChild}{msgMother}{msgHomeless}{msgDisable}{msgOlder}</p>
                                    <p className="youGivePlace">dla lokalizacji: {this.state.stepThreeDropValue}</p>
                                </div>
                                <div className="data_time_summary">
                                    <div className="address_data_summary">
                                        <span className="addressDataHeader">Adres odbioru:</span>
                                        <div className="addressLabelSum">
                                            <span className="addressLabelName">Ulica</span>
                                            <span className="addressSummaryInput">{this.state.street}</span>
                                        </div>
                                        <div className="addressLabelSum">
                                            <span className="addressLabelName">Miasto</span>
                                            <span className="addressSummaryInput">{this.state.city}</span>
                                        </div>
                                        <div className="addressLabelSum">
                                            <span className="addressLabelName">Kod<br/>pocztowy</span>
                                            <span className="addressSummaryInput">{this.state.zipCode}</span>
                                        </div>
                                        <div className="addressLabelSum">
                                            <span className="addressLabelName">Numer<br/>telefonu</span>
                                            <span className="addressSummaryInput">{this.state.phone}</span>
                                        </div>
                                    </div>
                                    <div className="time_data_summary">
                                        <span className="timeDataHeader">Termin odbioru</span>
                                        <div className="timeLabelSum">
                                            <span className="timeLabelName">Data</span>
                                            <Moment className="dataSummaryInput" format="DD.MM.YYYY">{this.state.startDate}</Moment>
                                        </div>
                                        <div className="timeLabelSum">
                                            <span className="timeLabelName">Godzina</span>
                                            <Moment className="dataSummaryInput" format="hh:mm a">{this.state.startHour}</Moment>
                                        </div>
                                        <div className="timeLabelSum">
                                            <span className="timeLabelName">Uwagi<br/>dla kuriera</span>
                                            <span className="dataSummaryInput">{this.state.info}</span>
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