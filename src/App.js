import React, { Component } from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import * as Scroll from 'react-scroll';
// import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import HomeThreeColumns from "./components/HomeThreeColumns";


function App() {
  return (
      <HashRouter>
          <>
              <Route exact path='/' component={Home} />
              {/*<Route path='/form' component={Form} />*/}
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              {/*<Route path='/logout' component={Logout} />*/}
          </>
      </HashRouter>
  );
}

export default App;
