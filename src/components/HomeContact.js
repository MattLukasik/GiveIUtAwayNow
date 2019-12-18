import React, {Component} from "react";
import './HomeContact.scss'

class HomeContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            nameAlert: "",
            emailAlert: "",
            messageAlert: "",
            messageSuccess: ""
        }
    }

//Walidacja formularza

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    //pole imienia
    handleSubmit = (e) => {
        e.preventDefault();

        let resultName;
        let resultEmail;
        let resultMessage;
        let resultSuccess;

        //pole imienia
        if (this.state.name === "" || /\S+\s\S+/.test(this.state.name) || /\s/.test(this.state.name)) {
            resultName = <span className="nameAlert">Podane imię jest nieprawidłowe!</span>;
        }
        this.setState({
            nameAlert: resultName,
        });

        // pole emaila
        if (this.state.email === "" || !/\S+\S+@\S+\S+\.\S+\S+/.test(this.state.email)) {
            resultEmail = <span className="nameAlert">Podany email jest nieprawidłowy!</span>;
        }
        this.setState({
            emailAlert: resultEmail,
        });

        //pole wiadomości
        if (this.state.message.length < 120) {
            resultMessage = <span className="nameAlert">Wiadomość musi mieć conajmniej 120 znaków!</span>;
        }
        this.setState({
            messageAlert: resultMessage,
        });

        if (!resultName && !resultEmail && !resultMessage){
            resultSuccess =
                <span className="nameSuccess">Wiadomość została wysłana!<br/>Wkrótce się skontaktujemy.</span>;

            fetch("https://fer-api.coderslab.pl/v1/portfolio/contact",
                {
                    headers: {'Content-Type': 'application/json'},
                    method: "POST",
                    body: JSON.stringify({name: this.state.name, email: this.state.email, message: this.state.message})
                })
                .then(data => {
                    console.log(data)
                }).catch(err => {
                console.log(err);
            });
            this.setState({
                messageSuccess: resultSuccess
            })
        }
    };

    render() {
        return (
            <div className="container HomeContact" id="HomeContact">
                <h2 className="HomeContact_header">Skontaktuj się z nami</h2>
                <div className="HomeContact_dec"></div>
                {this.state.messageSuccess}
                <form className="contactForm" onSubmit={this.handleSubmit}>
                    <div className="name_email">
                        <label htmlFor="" className="labelName">Wpisz swoje imię
                            <input className={`nameText ${this.state.nameAlert ? "alert" : ""}`}
                                   placeholder="Krzysztof"
                                   type="text"
                                   name="name"
                                   value={this.state.name}
                                   onChange={this.handleChange}/>
                            {this.state.nameAlert}
                        </label>

                        <label htmlFor="" className="labelEmail">Wpisz swój email
                            <input className={`emailText ${this.state.emailAlert ? "alert" : ""}`}
                                   placeholder="abc@xyz.pl"
                                   type="text"
                                   name="email"
                                   value={this.state.email}
                                   onChange={this.handleChange}
                            />
                            {this.state.emailAlert}
                        </label>
                    </div>
                    <label htmlFor="" className="labelMessage">Wpisz swoją wiadomość
                        <textarea className={`messageText ${this.state.messageAlert ? "alert" : ""}`}
                                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                  type="text"
                                  name="message"
                                  value={this.state.message}
                                  onChange={this.handleChange}/>
                        {this.state.messageAlert}
                    </label>
                    <button className="btnMessage" type="submit">Wyślij</button>
                </form>
            </div>
        )
    }
}

export default HomeContact;