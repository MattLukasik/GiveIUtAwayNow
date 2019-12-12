import React, {Component} from 'react';
import './HomeMain.scss';

class HomeMain extends Component {
ntent
    render() {
        return(
            <div className="container main">
                <div className="main_content">
                    <p className="main_content_lead">Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce.</p>
                    <div className="main_content_dec"></div>
                    <div className="main_content_widgets">
                        <button className="main_btn_widget">Oddaj rzeczy</button>
                        <button className="main_btn_widget">Zorganizuj zbiórkę</button>
                    </div>
                </div>


            </div>

        )
    }
}





export default HomeMain;