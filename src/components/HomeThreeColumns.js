import React, { Component } from 'react';
import './HomeThreeColumns.scss'

class HomeThreeColumns extends Component{


    render() {
        return (
            <div className="container threeColumns">
                <div className="column_of_three">
                    <h2 className="number">10</h2>
                    <h3 className="leadText">ODDANYCH WORKÓW</h3>
                    <p className="columnText">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="column_of_three">
                    <h2 className="number">5</h2>
                    <h3 className="leadText">WSPARTYCH ORGANIZACJI</h3>
                    <p className="columnText">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="column_of_three">
                    <h2 className="number">7</h2>
                    <h3 className="leadText">ZORGANIZOWANY ZBIÓREK</h3>
                    <p className="columnText">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
            </div>
        )
    }
}

export default HomeThreeColumns;