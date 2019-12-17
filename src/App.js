import React, { Component } from 'react';
import {HashRouter, Route, Link, Switch, NavLink,} from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Logout from './components/Logout'


function App() {
  return (
      <HashRouter>
          <>
              <Route exact path='/' component={Home} />
              {/*<Route path='/form' component={Form} />*/}
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/logout' component={Logout} />
          </>
      </HashRouter>
  );
}

export default App;
