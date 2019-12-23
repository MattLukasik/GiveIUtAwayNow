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
                <div className="formHeader">
                    <h2 className="warnFormHeader">Ważne!</h2>
                    <p className="textFormHeader">Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
                        wiedzieć komu najlepiej je przekazać.</p>
                </div>
                <div className="formMainPart">
                    <p className="formStep">Krok 1/4</p>
                    <h2 className="formStepInstrOne">Zaznacz co chcesz oddać:</h2>
                    <form action="" className="formStepOne">
                        <label className="stepOneLabel">
                            <input type="radio" name="goods" value="ubrania, które nadają się do ponownego użycia"
                                   className="stepOneInput"/>
                            <span className="customInput"></span>
                            ubrania, które nadają się do ponownego użycia
                        </label>
                        <label className="stepOneLabel">
                            <input type="radio" name="goods" value="ubrania, do wyrzucenia" className="stepOneInput"/>
                            <span className="customInput"></span>
                            ubrania, do wyrzucenia
                        </label>
                        <label className="stepOneLabel">
                            <input type="radio" name="goods" value="zabawki" className="stepOneInput"/>
                            <span className="customInput"></span>
                            zabawki
                        </label>
                        <label className="stepOneLabel">
                            <input type="radio" name="goods" value="książki" className="stepOneInput"/>
                            <span className="customInput"></span>
                            książki
                        </label>
                        <label className="stepOneLabel">
                            <input type="radio" name="goods" value="inne" className="stepOneInput"/>
                            <span className="customInput"></span>
                            inne
                        </label>
                    </form>
                    <button className="stepOneFwdBtn">Dalej</button>
                </div>
                {/*Step 2/4*/}
                <div className="formHeader">
                    <h2 className="warnFormHeader">Ważne!</h2>
                    <p className="textFormHeader">Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję
                        jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
                </div>
                <div className="formMainPart">
                    <p className="formStep">Krok 2/4</p>
                    <h2 className="formStepInstrTwo">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                    <form action="" className="formStepTwo">
                        <label className="stepTwoLabel">Liczba 60l worków:</label>
                        <select className="stepTwoSelect">
                            <option value="0" className="selOption">-wybierz-</option>
                            <option value="1" className="selOption">1</option>
                            <option value="2" className="selOption">2</option>
                            <option value="3" className="selOption">3</option>
                            <option value="4" className="selOption">4</option>
                            <option value="5" className="selOption">5</option>
                        </select>
                    </form>
                    <button className="stepTwoRevBtn">Wstecz</button>
                    <button className="stepTwoFwdBtn">Dalej</button>
                </div>
                {/*Step 3/4*/}
                <div className="formHeader">
                    <h2 className="warnFormHeader">Ważne!</h2>
                    <p className="textFormHeader">Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
                        wyszukiwarce. Możesz też filtrować organizacje<br/>po ich lokalizacji bądź celu ich pomocy.</p>
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
                            <label className="localizationSpecificLabel">Wpisz nazwę konkretnej organizacji (opcjonalnie)
                                <input type="text" className="localizationSpecific"/></label>
                        </div>
                    </form>
                    <button className="stepThreeRevBtn">Wstecz</button>
                    <button className="stepThreeFwdBtn">Dalej</button>
                </div>
                {/*Step 4/4*/}
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
                            <label className="timeLabel">
                                <span className="timeLabelSpan">Uwagi<br/>dla kuriera</span>
                                <textarea className="dataInput note"/>
                            </label>
                        </div>
                    </form>
                    <button className="stepFourRevBtn">Wstecz</button>
                    <button className="stepFourFwdBtn">Dalej</button>
                </div>
                {/*Summary*/}
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
                    <button className="stepSumRevBtn">Wstecz</button>
                    <button className="stepSumFwdBtn">Potwierdzam</button>
                </div>
                {/*Thanks*/}
                <div className="formMainPartSum">
                    <p className="thanks">Dziękujemy za przesłanie formularza.<br/>Na maila prześlemy wszelkie<br/>informacje o odbiorze.</p>
                    <div className="thanksDec"></div>

                </div>
                <HomeContact/>
                <HomeFooter/>
            </>
        )
    }
}

export default Form;