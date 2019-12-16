import React, {Component} from 'react';

import './HomeForWho.scss'

class HomeForWho extends Component {

    render() {
        return (
            <div className="container homeForWho" id="HomeForWho">
                <h2 className="homeForWho_header">Komu pomagamy?</h2>
                <div className="forWho_dec"></div>
                <div className="orgButtons">
                    <button className="orgBtn fund active">Fundacjom</button>
                    <button className="orgBtn ngo">Organizacjom<br/>pozarządowym</button>
                    <button className="orgBtn local">Lokalnym<br/>zbiórkom</button>
                </div>
                <div className="orgList_container">
                    <h2 className="introText">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z<br/>którymi
                        współpracujemy. Możesz sprawdzić czym się zajmują,<br/>komu pomagają i czego potrzebują.</h2>
                    <lu className="orgList_fund">
                        <li className="fundLi first">
                            <div className="name_mission_cont">
                                <h2 className="fund_name">Fundacja “Dbam o Zdrowie”</h2>
                                <p className="fund_mission">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
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
                                <p className="fund_mission">Cel i misja: Pomoc dla osób nie posiadających miejsca
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
                </div>
            </div>
        )

    }
}

export default HomeForWho;