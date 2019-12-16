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

    handleShowFund =()=>
        this.setState({
            visible1: true,
            visible2: false,
            visible3: false
        });

    handleShowNgo =()=>
        this.setState({
            visible1: false,
            visible2: true,
            visible3: false
        });

    handleShowLocal =()=>
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
                    <button className="orgBtn fund active" onClick={this.handleShowFund}>Fundacjom</button>
                    <button className="orgBtn ngo" onClick={this.handleShowNgo}>Organizacjom<br/>pozarządowym</button>
                    <button className="orgBtn local" onClick={this.handleShowLocal} >Lokalnym<br/>zbiórkom</button>
                </div>
                <div className="orgList_container">
                    {this.state.visible1 && (
                        <>
                            <h2 className="introText">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z<br/>którymi
                                współpracujemy. Możesz sprawdzić czym się zajmują,<br/>komu pomagają i czego potrzebują.
                            </h2>
                            <lu className="orgList_fund">
                                <li className="fundLi first">
                                    <div className="name_mission_cont">
                                        <h2 className="fund_name">Fundacja “Dbam o Zdrowie”</h2>
                                        <p className="fund_mission">Cel i misja: Pomoc osobom znajdującym się w trudnej
                                            sytuacji
                                            życiowej.</p>
                                    </div>
                                    <p className="fund_collect">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                </li>
                                <li className="fundLi second">
                                    <div className="name_mission_cont">
                                        <h2 className="fund_name">Fundacja “Dla dzieci”</h2>
                                        <p className="fund_mission">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                    </div>
                                    <p className="fund_collect">ubrania, meble, zabawki</p>
                                </li>
                                <li className="fundLi third">
                                    <div className="name_mission_cont">
                                        <h2 className="fund_name">Fundacja “Bez domu”</h2>
                                        <p className="fund_mission">Cel i misja: Pomoc dla osób nie posiadających
                                            miejsca
                                            zamieszkania.</p>
                                    </div>
                                    <p className="fund_collect">ubrania, jedzenie, ciepłe koce</p>
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
                            <lu className="orgList_fund">
                                <li className="fundLi first">
                                    <div className="name_mission_cont">
                                        <h2 className="fund_name">Fundacja “Dbam o Zdrowie”</h2>
                                        <p className="fund_mission">Cel i misja: Pomoc osobom znajdującym się w trudnej
                                            sytuacji
                                            życiowej.</p>
                                    </div>
                                    <p className="fund_collect">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                </li>
                                <li className="fundLi second">
                                    <div className="name_mission_cont">
                                        <h2 className="fund_name">Fundacja “Dla dzieci”</h2>
                                        <p className="fund_mission">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                    </div>
                                    <p className="fund_collect">ubrania, meble, zabawki</p>
                                </li>
                                <li className="fundLi third">
                                    <div className="name_mission_cont">
                                        <h2 className="fund_name">Fundacja “Bez domu”</h2>
                                        <p className="fund_mission">Cel i misja: Pomoc dla osób nie posiadających
                                            miejsca
                                            zamieszkania.</p>
                                    </div>
                                    <p className="fund_collect">ubrania, jedzenie, ciepłe koce</p>
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
                            <h2 className="introText">Tu na razie nic nie mam<br/>do
                                eiusmod tempor incididunt ut labore et dolore magna<br/>aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation
                            </h2>
                            <lu className="orgList_fund">
                                <li className="fundLi first">
                                    <div className="name_mission_cont">
                                        <h2 className="fund_name">Fundacja “Dbam o Zdrowie”</h2>
                                        <p className="fund_mission">Cel i misja: Pomoc osobom znajdującym się w trudnej
                                            sytuacji
                                            życiowej.</p>
                                    </div>
                                    <p className="fund_collect">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                </li>
                                <li className="fundLi second">
                                    <div className="name_mission_cont">
                                        <h2 className="fund_name">Fundacja “Dla dzieci”</h2>
                                        <p className="fund_mission">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                    </div>
                                    <p className="fund_collect">ubrania, meble, zabawki</p>
                                </li>
                                <li className="fundLi third">
                                    <div className="name_mission_cont">
                                        <h2 className="fund_name">Fundacja “Bez domu”</h2>
                                        <p className="fund_mission">Cel i misja: Pomoc dla osób nie posiadających
                                            miejsca
                                            zamieszkania.</p>
                                    </div>
                                    <p className="fund_collect">ubrania, jedzenie, ciepłe koce</p>
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