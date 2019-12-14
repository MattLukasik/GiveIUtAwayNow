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
                            <input type="text" className="nameText"/>
                        </label>
                        <label htmlFor="" className="labelEmail">Wpisz swój email
                            <input type="text" className="emailText"/>
                        </label>
                    </div>
                    <label htmlFor="" className="labelMessage">Wpisz swoją wiadomość
                        <input type="textarea" className="messageText"/>
                    </label>
                    <button className="btnMessage">Wyślij</button>
                </form>
                <div className="footer">
                    <p className="copyright">Copyright by Coders Lab</p>
                    <div className="fb"></div>
                    <div className="insta"></div>
                </div>
            </div>
        )
    }
}

export default HomeContact;