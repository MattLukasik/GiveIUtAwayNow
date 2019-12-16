import React, {Component} from "react";
import './HomeContact.scss'

class HomeContact extends Component {

    render() {
        return (
            <div className="container HomeContact" id="HomeContact">
                <h2 className="HomeContact_header">Skontaktuj się z nami</h2>
                <div className="HomeContact_dec"></div>
                <form className="contactForm">
                    <div className="name_email">
                        <label htmlFor="" className="labelName">Wpisz swoje imię
                            <input type="text" className="nameText" placeholder="Krzysztof"/>
                        </label>
                        <label htmlFor="" className="labelEmail">Wpisz swój email
                            <input type="text" className="emailText" placeholder="abc@xyz.pl"/>
                        </label>
                    </div>
                    <label htmlFor="" className="labelMessage">Wpisz swoją wiadomość
                        <textarea className="messageText"
                                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                    </label>
                    <button className="btnMessage">Wyślij</button>
                </form>
            </div>
        )
    }
}

export default HomeContact;