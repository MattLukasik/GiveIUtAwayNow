import React, {Component} from 'react';
import './HomeAbout.scss'

class HomeAbout extends Component{

    render() {
        return(
            <div className="container aboutUs" id="HomeAbout">
                <div className="aboutUs_content">
                    <h2 className="aboutUs_header">O nas</h2>
                    <div className="aboutUs_dec"></div>
                    <p className="aboutUs_text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <div className="aboutUs_sign"></div>
                </div>
                <div className="aboutUs_picture"></div>
            </div>
        )
    }
}

export default HomeAbout;