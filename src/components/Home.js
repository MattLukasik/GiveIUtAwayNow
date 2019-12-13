import React, { Component } from 'react';
// import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import HomeAbout from './HomeAbout';
import HomeContact from './HomeContact';
import HomeFooter from './HomeFooter';
import HomeForWho from './HomeForWho';
import HomeFourSteps from './HomeFourSteps';
import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';
import HomeThreeColumns from './HomeThreeColumns';



class Home extends Component {


    render() {
        return(
            <>
            <HomeHeader/>
            <HomeMain/>
            <HomeThreeColumns/>
            <HomeFourSteps/>
            <HomeAbout/>
            </>
        )
    }
}

export default Home;