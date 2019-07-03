import React, { Component } from 'react';
import './App.scss';

//Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from '../Constants/ScrollToTop/ScrollToTop';

//Components
import FullNav from '../Constants/Navigation/FullNav/FullNav';
import MobileNav from '../Constants/Navigation/MobileNav/MobileNav';
import FullOverlay from '../Recycled/Overlay/FullOverlay/FullOverlay';
import MobileOverlay from '../Recycled/Overlay/MobileOverlay/MobileOverlay';
import NavDrawer from '../Constants/MobileDrawers/NavDrawer/NavDrawer';
import UserDrawer from '../Constants/MobileDrawers/UserDrawer/UserDrawer';
import FullFooter from '../Constants/Footer/FullFooter/FullFooter';
import MobileFooter from '../Constants/Footer/MobileFooter/MobileFooter';

//Pages
import MainProductPage from '../Pages/Products/Main/MainProductPage';
import Research from '../Pages/Research/Research';
import Inspiration from '../Pages/Inspiration/Inspiration';
import About from '../Pages/About/About';
import Landing from '../Pages/Landing/Landing';



//App Component ---- vv
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
          NavDrawerIsOpen: false,
          UserDrawerIsOpen: false,
          //Not Ideal-
          FooterTab1: false,
          FooterTab2: false,
          FooterTab3: false,
          FooterTab4: false,
          FooterTab5: false,

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
          <ScrollToTop>

        <div className='App'>
                <FullNav />
                <MobileNav 
                    ToggleNavDrawer={ToggleNavDrawer} 
                    ToggleUserDrawer={ToggleUserDrawer} 
                    NavDrawerStats={this.state.NavDrawerIsOpen} 
                    UserDrawerStatus={this.state.UserDrawerIsOpen}/>

                <NavDrawer 
                    NavDrawerIsOpen={this.state.NavDrawerIsOpen}
                    CloseNavDrawer={CloseNavDrawer} />
                <UserDrawer 
                    UserDrawerIsOpen={this.state.UserDrawerIsOpen}
                    CloseUserDrawer={CloseUserDrawer}/>
                         

          <div className='App-Wrapper'>
            <Switch>


              <Route 
                  path='/' 
                  exact 
                  component={Landing} />
              <Route 
                  path='/main-product-page' 
                  component={MainProductPage} />
              <Route 
                  path='/research' 
                  component={Research} />
              <Route 
                  path='/inspiration' 
                  component={Inspiration} />
              <Route 
                  path='/about' 
                  component={About} />
              


            </Switch>
          </div>

              <FullFooter />
              <MobileFooter />

              {MOverlay} 

        </div>
          </ScrollToTop>
      </Router>
      
    )
  }
}

