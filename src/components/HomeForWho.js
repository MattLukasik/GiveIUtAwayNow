import React, {Component} from 'react';

import './HomeForWho.scss'

class HomeForWho extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFundations: true,
            showNgos: false,
            showLocals: false,
            showFundPageOne: true,
            showFundPageTwo: false,
            showFundPageThree: false,
            showNgoPageOne:true,
            showNgoPageTwo:false
        }
    }

//wyświetlanie poszczególnych grup organizacji

    handleShowFund = () =>
        this.setState({
            showFundations: true,
            showNgos: false,
            showLocals: false,
        });

    handleShowNgo = () =>
        this.setState({
            showFundations: false,
            showNgos: true,
            showLocals: false,
        });

    handleShowLocal = () =>
        this.setState({
            showFundations: false,
            showNgos: false,
            showLocals: true
        });

    //paginacja w grupie Fundacje

    showFundPage1 = () => {
        this.setState({
            showFundPageOne: true,
            showFundPageTwo: false,
            showFundPageThree: false
        })
    };

    showFundPage2 = () => {
        this.setState({
            showFundPageOne: false,
            showFundPageTwo: true,
            showFundPageThree: false
        })
    };

    showFundPage3 = () => {
        this.setState({
            showFundPageOne: false,
            showFundPageTwo: false,
            showFundPageThree: true
        })
    };

//paginacja w grupie Ngo

    showNgoPage1 = () => {
        this.setState({
            showNgoPageOne: true,
            showNgoPageTwo: false,
            showNgoPageThree: false
        })
    };

    showNgoPage2 = () => {
        this.setState({
            showNgoPageOne: false,
            showNgoPageTwo: true,
            showNgoPageThree: false
        })
    };


    render() {
        return (
            <div className="container homeForWho" id="HomeForWho">
                <h2 className="homeForWho_header">Komu pomagamy?</h2>
                <div className="forWho_dec"></div>
                <div className="orgButtons">
                    <button className={`orgBtn fund ${this.state.showFundations ? "active" : ""}`}
                            onClick={this.handleShowFund}>Fundacjom
                    </button>
                    <button className={`orgBtn ngo ${this.state.showNgos ? "active" : ""}`}
                            onClick={this.handleShowNgo}>Organizacjom<br/>pozarządowym
                    </button>
                    <button className={`orgBtn local ${this.state.showLocals ? "active" : ""}`}
                            onClick={this.handleShowLocal}>Lokalnym<br/>zbiórkom
                    </button>
                </div>
                <div className="orgList_container">
                    {this.state.showFundations && (
                        <>
                            <h2 className="introText">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z<br/>którymi
                                współpracujemy. Możesz sprawdzić czym się zajmują,<br/>komu pomagają i czego potrzebują.
                            </h2>
                            <lu className="orgList fund">
                                {this.state.showFundPageOne && (
                                    <>
                                        <li className="orgLi first">
                                            <div className="name_mission_cont">
                                                <h2 className="name">Fundacja “Dbam o Zdrowie”</h2>
                                                <p className="mission">Cel i misja: Pomoc osobom znajdującym się w
                                                    trudnej
                                                    sytuacji
                                                    życiowej.</p>
                                            </div>
                                            <p className="collect">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                        </li>
                                        <li className="orgLi second">
                                            <div className="name_mission_cont">
                                                <h2 className="name">Fundacja “Dla dzieci”</h2>
                                                <p className="mission">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                            </div>
                                            <p className="collect">ubrania, meble, zabawki</p>
                                        </li>
                                        <li className="orgLi third">
                                            <div className="name_mission_cont">
                                                <h2 className="name">Fundacja “Bez domu”</h2>
                                                <p className="mission">Cel i misja: Pomoc dla osób nie posiadających
                                                    miejsca
                                                    zamieszkania.</p>
                                            </div>
                                            <p className="collect">ubrania, jedzenie, ciepłe koce</p>
                                        </li>
                                    </>
                                )}
                                {this.state.showFundPageTwo && (
                                    <>
                                        <li className="orgLi first">
                                            <div className="name_mission_cont">
                                                <h2 className="name">Fundacja “Lorem ipsum 4”</h2>
                                                <p className="mission">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                            </div>
                                            <p className="collect">ubrania, jedzenie, meble, zabawki</p>
                                        </li>
                                        <li className="orgLi second">
                                            <div className="name_mission_cont">
                                                <h2 className="name">Fundacja “Lorem ipsum 5”</h2>
                                                <p className="mission">Cel i misja: Pomoc osobom znajdującym się w
                                                    trudnej
                                                    sytuacji
                                                    życiowej.</p>
                                            </div>
                                            <p className="collect">ubrania, meble, zabawki, AGD</p>
                                        </li>
                                        <li className="orgLi third">
                                            <div className="name_mission_cont">
                                                <h2 className="name">Fundacja “Lorem ipsum 6”</h2>
                                                <p className="mission">Cel i misja: Pomoc dla osób nie posiadających
                                                    miejsca
                                                    zamieszkania.</p>
                                            </div>
                                            <p className="collect">jedzenie, ciepłe koce</p>
                                        </li>
                                    </>
                                )}
                                {this.state.showFundPageThree && (
                                    <>
                                        <li className="orgLi first">
                                            <div className="name_mission_cont">
                                                <h2 className="name">Fundacja “Lorem ipsum 7”</h2>
                                                <p className="mission">Cel i misja: Pomoc dla osób nie posiadających
                                                    miejsca
                                                    zamieszkania.
                                                </p>
                                            </div>
                                            <p className="collect">ubrania, jedzenie, zabawki</p>
                                        </li>
                                        <li className="orgLi second">
                                            <div className="name_mission_cont">
                                                <h2 className="name">Fundacja “Lorem ipsum 8”</h2>
                                                <p className="mission">Cel i misja: Pomoc osobom znajdującym się w
                                                    trudnej
                                                    sytuacji życiowej.
                                                </p>
                                            </div>
                                            <p className="collect">ubrania, meble, zabawki</p>
                                        </li>
                                        <li className="orgLi third">
                                            <div className="name_mission_cont">
                                                <h2 className="name">Fundacja “Lorem ipsum 9”</h2>
                                                <p className="mission">Cel i misja: Pomoc dzieciom z ubogich rodzin.
                                                </p>
                                            </div>
                                            <p className="collect">ubrania, jedzenie, ciepłe koce, sprzęt AGD, meble</p>
                                        </li>
                                    </>
                                )}
                            </lu>
                            <div className="pagination_btns_fund">
                                <button className={`btn_fund ${this.state.showFundPageOne ? "active" : ""}`} onClick={this.showFundPage1}>1</button>
                                <button className={`btn_fund btn_2 ${this.state.showFundPageTwo ? "active" : ""}`} onClick={this.showFundPage2}>2</button>
                                <button className={`btn_fund ${this.state.showFundPageThree ? "active" : ""}`} onClick={this.showFundPage3}>3</button>
                            </div>
                        </>
                    )}
                    {this.state.showNgos && (
                        <>
                            <h2 className="introText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br/>do
                                eiusmod tempor incididunt ut labore et dolore magna<br/>aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation
                            </h2>
                            <lu className="orgList ngo">
                                {this.state.showNgoPageOne &&(
                                    <>
                                        <li className="orgLi first">
                                            <div className="name_mission_cont">
                                                <h2 className="name">Organizacja “Lorem ipsum 1”</h2>
                                                <p className="mission"> Duis aute irure dolor in reprehenderit in
                                                    voluptate
                                                    velit.</p>
                                            </div>
                                            <p className="collect">Excepteur sint occaecat cupidatat</p>
                                        </li>
                                        <li className="orgLi second">
                                            <div className="name_mission_cont">
                                                <h2 className="name">Organizacja “Lorem ipsum 2”</h2>
                                                <p className="mission">t enim ad minim veniam, quis nostrud exercitation
                                                    ullamco
                                                    laboris.</p>
                                            </div>
                                            <p className="collect">consectetur adipiscing elit</p>
                                        </li>
                                        <li className="orgLi third">
                                            <div className="name_mission_cont">
                                                <h2 className="name">Organizacja “Lorem ipsum 3</h2>
                                                <p className="mission">Duis aute irure dolor in reprehenderit in
                                                    voluptate velit
                                                    esse cillum dolore eu fugiat nulla pariatur.</p>
                                            </div>
                                            <p className="collect">sunt in culpa qui officia deserunt</p>
                                        </li>
                                    </>
                                )}
                                {this.state.showNgoPageTwo &&(
                                    <>
                                        <li className="orgLi first">
                                            <div className="name_mission_cont">
                                                <h2 className="name">Organizacja “Lorem ipsum 4”</h2>
                                                <p className="mission"> Aliquam etiam erat velit scelerisque in. Vel
                                                    quam
                                                    elementum pulvinar etiam non quam.</p>
                                            </div>
                                            <p className="collect">libero nunc consequat interdum varius </p>
                                        </li>
                                        <li className="orgLi second">
                                            <div className="name_mission_cont">
                                                <h2 className="name">Organizacja “Lorem ipsum 5”</h2>
                                                <p className="mission">Tortor consequat id porta nibh venenatis cras sed
                                                    felis.</p>
                                            </div>
                                            <p className="collect">ullamcorper sit amet risus nullam</p>
                                        </li>
                                        <li className="orgLi third">
                                            <div className="name_mission_cont">
                                                <h2 className="name">Organizacja “Lorem ipsum 3</h2>
                                                <p className="mission">Amet est placerat in egestas erat imperdiet.
                                                    Sollicitudin
                                                    ac orci phasellus egestas.</p>
                                            </div>
                                            <p className="collect">velit euismod in pellentesque</p>
                                        </li>
                                    </>
                                )}
                            </lu>
                            <div className="pagination_btns_fund">
                                <button className={`btn_fund ${this.state.showNgoPageOne ? "active" : ""}`} onClick={this.showNgoPage1}>1</button>
                                <button className={`btn_fund btn_2 ${this.state.showNgoPageTwo ? "active" : ""}`} onClick={this.showNgoPage2}>2</button>
                                <button className={`btn_fund ${this.state.showNgos ? "hidden" : ""}`}>3</button>
                            </div>
                        </>
                    )}
                    {this.state.showLocals && (
                        <>
                            <h2 className="introText">Congue nisi vitae suscipit tellus mauris a diam<br/>maecenas.
                                Lorem sed risus ultricies tristique nulla aliquet.<br/>Et tortor at risus viverra
                                adipiscing at in tellus integer.
                            </h2>
                            <lu className="orgList local">
                                <li className="orgLi first">
                                    <div className="name_mission_cont">
                                        <h2 className="name">Zbiórka "Lorem ipsum 1</h2>
                                        <p className="mission">Egestas pretium aenean pharetra magna ac placerat.</p>
                                    </div>
                                    <p className="collect">Sagittis aliquam malesuada bibendum</p>
                                </li>
                                <li className="orgLi second">
                                    <div className="name_mission_cont">
                                        <h2 className="name">Zbiórka "Lorem ipsum 2</h2>
                                        <p className="mission">Lorem sed risus ultricies tristique nulla aliquet.</p>
                                    </div>
                                    <p className="collect">id nibh tortor id aliquet</p>
                                </li>
                                <li className="orgLi third">
                                    <div className="name_mission_cont">
                                        <h2 className="name">Zbiórka "Lorem ipsum 3"</h2>
                                        <p className="mission">Nunc aliquet bibendum enim facilisis gravida neque
                                            convallis.</p>
                                    </div>
                                    <p className="collect">interdum posuere lorem</p>
                                </li>
                            </lu>
                            <div className={`pagination_btns_fund ${this.state.showLocals ? "unvisible" : "" }`}>
                                <button className="btn_fund active">1</button>
                                <button className="btn_fund btn_2">2</button>
                                <button className="btn_fund">3</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        )
    }
}

export default HomeForWho;