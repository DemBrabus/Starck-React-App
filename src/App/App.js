import React, { Component } from 'react';
import './App.scss';

//Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import FullNav from '../Constants/Navigation/FullNav/FullNav';
import MobileNav from '../Constants/Navigation/MobileNav/MobileNav';
import FullOverlay from '../Recycled/Overlay/FullOverlay/FullOverlay';
import MobileOverlay from '../Recycled/Overlay/MobileOverlay/MobileOverlay';
import NavDrawer from '../Constants/MobileDrawers/NavDrawer/NavDrawer';
import UserDrawer from '../Constants/MobileDrawers/UserDrawer/UserDrawer';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
          NavDrawerIsOpen: false,
          UserDrawerIsOpen: false,

    }
  }


  render() {

    //ToggleNavDrawer
      const ToggleNavDrawer = () => {
          this.setState((prevState) => {
            return {NavDrawerIsOpen: !prevState.NavDrawerIsOpen}
          });
      }
    //CloseNavDrawer
      const CloseNavDrawer = () => {
          this.setState({NavDrawerIsOpen: false});
      }

    //ToggleUserDrawer
      const ToggleUserDrawer = () => {
          this.setState((prevState) => {
            return {UserDrawerIsOpen: !prevState.UserDrawerIsOpen}
          });
      }
    //CloseUserDrawer
      const CloseUserDrawer = () => {
          this.setState({UserDrawerIsOpen: false});
      }

    //MobileOverlay
    let MOverlay;
      if(this.state.NavDrawerIsOpen === true || this.state.UserDrawerIsOpen === true){
        MOverlay = <MobileOverlay 
                      CloseNavDrawer={CloseNavDrawer} 
                      CloseUserDrawer={CloseUserDrawer}
                      />
      }


    return (

      <Router>

        <div className='App'>
            <FullNav />
            <MobileNav 
              ToggleNavDrawer={ToggleNavDrawer} 
              ToggleUserDrawer={ToggleUserDrawer} 
              NavDrawerStats={this.state.NavDrawerIsOpen} 
              UserDrawerStatus={this.state.UserDrawerIsOpen}/>

                <NavDrawer NavDrawerIsOpen={this.state.NavDrawerIsOpen}
                            CloseNavDrawer={CloseNavDrawer} />
                <UserDrawer UserDrawerIsOpen={this.state.UserDrawerIsOpen}
                CloseUserDrawer={CloseUserDrawer}/>
                  {MOverlay}      

                    


          <div className='App-Wrapper'>
            <Switch>


            </Switch>
          </div>



        </div>

      </Router>
      
    )
  }
}

