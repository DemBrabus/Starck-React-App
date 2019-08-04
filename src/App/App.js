import React, { Component } from 'react';
import './App.scss';

//Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from '../Constants/ScrollToTop/ScrollToTop';

//Components
import FullNav from '../Constants/Navigation/FullNav/FullNav';
import MobileNav from '../Constants/Navigation/MobileNav/MobileNav';
import MobileOverlay from '../Recycled/Overlay/MobileOverlay/MobileOverlay';
import NavDrawer from '../Constants/MobileDrawers/NavDrawer/NavDrawer';
import UserDrawer from '../Constants/MobileDrawers/UserDrawer/UserDrawer';
import FullFooter from '../Constants/Footer/FullFooter/FullFooter';
import MobileFooter from '../Constants/Footer/MobileFooter/MobileFooter';

//Pages
import ProductPage from '../Pages/Products/Main/ProductPage';
import Research from '../Pages/Research/Research';
import Inspiration from '../Pages/Inspiration/Inspiration';
import About from '../Pages/About/About';
import Landing from '../Pages/Landing/Landing';
import ContactUs from '../Pages/ContactUs/ContactUs';
import Store from '../Pages/Store/Store';
import Dealer from '../Pages/Dealer/Dealer';
import Registration from '../Pages/Registration/Registration';
import SILQ from '../Pages/Products/Individual/SILQ/SILQ';
import Series1 from '../Pages/Products/Individual/SERIES1/Series1';
import Gesture from '../Pages/Products/Individual/GESTURE/Gesture';
import Leap from '../Pages/Products/Individual/LEAP/Leap';



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

  //MobileFooterTabs--------
      //FooterTab1
        const ToggleFooterTab1 = () => {
          this.setState((prevState) => {
            return {FooterTab1: !prevState.FooterTab1}
          });
        }
        const CloseFooterTab1 = () => {
        this.setState({FooterTab1: false});
        }
      //FooterTab2
        const ToggleFooterTab2 = () => {
            this.setState((prevState) => {
              return {FooterTab2: !prevState.FooterTab2}
            });
        }
        const CloseFooterTab2 = () => {
          this.setState({FooterTab2: false});
        }
      //FooterTab3
        const ToggleFooterTab3 = () => {
          this.setState((prevState) => {
            return {FooterTab3: !prevState.FooterTab3}
          });
        }
        const CloseFooterTab3 = () => {
          this.setState({FooterTab3: false});
        }
      //FooterTab4
        const ToggleFooterTab4 = () => {
          this.setState((prevState) => {
            return {FooterTab4: !prevState.FooterTab4}
          });
        }
        const CloseFooterTab4 = () => {
          this.setState({FooterTab4: false});
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
                    NavDrawerStatus={this.state.NavDrawerIsOpen} 
                    UserDrawerStatus={this.state.UserDrawerIsOpen}/>

                <NavDrawer 
                    NavDrawerIsOpen={this.state.NavDrawerIsOpen}
                    CloseNavDrawer={CloseNavDrawer}
                    CloseFooterTab1={CloseFooterTab1}
                    CloseFooterTab2={CloseFooterTab2}
                    CloseFooterTab3={CloseFooterTab3}
                    CloseFooterTab4={CloseFooterTab4} />
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
                  path='/product-page' 
                  component={ProductPage} />
              <Route 
                  path='/research' 
                  component={Research} />
              <Route 
                  path='/inspiration' 
                  component={Inspiration} />
              <Route 
                  path='/about' 
                  component={About} />
              <Route 
                  path='/contact' 
                  component={ContactUs} />
               <Route 
                  path='/store' 
                  component={Store} />
              <Route 
                  path='/find-a-dealer' 
                  component={Dealer} />
              <Route 
                  path='/registration' 
                  component={Registration} />
              <Route
                  path='/product/silq'
                  component={SILQ} />
              <Route
                  path='/product/series1'
                  component={Series1}/>
              <Route
                  path='/product/gesture'
                  component={Gesture} />
              <Route
                  path='/product/leap'
                  component={Leap} />
              


            </Switch>
          </div>

              <FullFooter />
              <MobileFooter ToggleFooterTab1={ToggleFooterTab1}
                            ToggleFooterTab2={ToggleFooterTab2}
                            ToggleFooterTab3={ToggleFooterTab3}
                            ToggleFooterTab4={ToggleFooterTab4}
                            FooterTab1Status={this.state.FooterTab1}
                            FooterTab2Status={this.state.FooterTab2}
                            FooterTab3Status={this.state.FooterTab3}
                            FooterTab4Status={this.state.FooterTab4}
                            NavDrawerStatus={this.state.NavDrawerIsOpen} 
                            UserDrawerStatus={this.state.UserDrawerIsOpen}
                            CloseNavDrawer={CloseNavDrawer} 
                            CloseUserDrawer={CloseUserDrawer}
                            />

              {MOverlay} 

        </div>
          </ScrollToTop>
      </Router>
      
    )
  }
}

