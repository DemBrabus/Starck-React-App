import React, { Component } from 'react';
import './App.scss';

//Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import FullNav from '../Constants/Navigation/FullNav/FullNav';
import MobileNav from '../Constants/Navigation/MobileNav/MobileNav';

export default class App extends Component {
  render() {
    return (

      <Router>

        <div className='App'>
          <FullNav />
          <MobileNav />

            <div className='App-Wrapper'>
              <Switch>


              </Switch>
            </div>


      </div>

      </Router>
      
    )
  }
}

