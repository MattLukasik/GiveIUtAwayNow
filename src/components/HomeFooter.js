import React, {Component} from 'react';
import './HomeFooter.scss';

class HomeFooter extends Component {

    render() {
        return (
            <div className="footer">
                <p className="copyright">Copyright by Coders Lab</p>
                <div className="fb_insta">
                    <div className="fb"></div>
                    <div className="insta"></div>
                </div>
            </div>
        )
    }
}

export default HomeFooter;