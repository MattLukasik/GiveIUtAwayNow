import React, {Component} from 'react';

import './HomeForWho.scss'

class HomeForWho extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible1: true,
            visible2: false,
            visible3: false,
        }
    }

    handleShowFund = () =>
        this.setState({
            visible1: true,
            visible2: false,
            visible3: false
        });

    handleShowNgo = () =>
        this.setState({
            visible1: false,
            visible2: true,
            visible3: false
        });

    handleShowLocal = () =>
        this.setState({
            visible1: false,
            visible2: false,
            visible3: true
        });


    render() {
        return (
            <div className="container homeForWho" id="HomeForWho">
                <h2 className="homeForWho_header">Komu pomagamy?</h2>
                <div className="forWho_dec"></div>
                <div className="orgButtons">
                    <button className={`orgBtn fund ${this.state.visible1 ? "active" : ""}`}
                            onClick={this.handleShowFund}>Fundacjom
                    </button>
                    <button className={`orgBtn ngo ${this.state.visible2 ? "active" : ""}`}
                            onClick={this.handleShowNgo}>Organizacjom<br/>pozarządowym
                    </button>
                    <button className={`orgBtn local ${this.state.visible3 ? "active" : ""}`}
                            onClick={this.handleShowLocal}>Lokalnym<br/>zbiórkom
                    </button>
                </div>
                <div className="orgList_container">
                    {this.state.visible1 && (
                        <>
                            <h2 className="introText">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z<br/>którymi
                                współpracujemy. Możesz sprawdzić czym się zajmują,<br/>komu pomagają i czego potrzebują.
                            </h2>
                            <lu className="orgList fund">
                                <li className="orgLi first">
                                    <div className="name_mission_cont">
                                        <h2 className="name">Fundacja “Dbam o Zdrowie”</h2>
                                        <p className="mission">Cel i misja: Pomoc osobom znajdującym się w trudnej
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
                            </lu>
                            <div className="pagination_btns_fund">
                                <button className="btn_fund active">1</button>
                                <button className="btn_fund btn_2">2</button>
                                <button className="btn_fund">3</button>
                            </div>
                        </>
                    )}
                    {this.state.visible2 && (
                        <>
                            <h2 className="introText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br/>do
                                eiusmod tempor incididunt ut labore et dolore magna<br/>aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation
                            </h2>
                            <lu className="orgList ngo">
                                <li className="orgLi first">
                                    <div className="name_mission_cont">
                                        <h2 className="name">Organizacja “Lorem ipsum 1”</h2>
                                        <p className="mission"> Duis aute irure dolor in reprehenderit in voluptate
                                            velit.</p>
                                    </div>
                                    <p className="collect">Excepteur sint occaecat cupidatat</p>
                                </li>
                                <li className="orgLi second">
                                    <div className="name_mission_cont">
                                        <h2 className="name">Organizacja “Lorem ipsum 2”</h2>
                                        <p className="mission">t enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris.</p>
                                    </div>
                                    <p className="collect">consectetur adipiscing elit</p>
                                </li>
                                <li className="orgLi third">
                                    <div className="name_mission_cont">
                                        <h2 className="name">Organizacja “Lorem ipsum 3</h2>
                                        <p className="mission">Duis aute irure dolor in reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla pariatur.</p>
                                    </div>
                                    <p className="collect">sunt in culpa qui officia deserunt</p>
                                </li>
                            </lu>
                            <div className="pagination_btns_fund">
                                <button className="btn_fund active">1</button>
                                <button className="btn_fund btn_2">2</button>
                                <button className="btn_fund">3</button>
                            </div>
                        </>
                    )}
                    {this.state.visible3 && (
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
                                        <p className="mission">Nunc aliquet bibendum enim facilisis gravida neque convallis.</p>
                                    </div>
                                    <p className="collect">interdum posuere lorem</p>
                                </li>
                            </lu>
                            <div className="pagination_btns_fund">
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