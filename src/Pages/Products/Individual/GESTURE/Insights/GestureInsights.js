import React, { Component } from 'react';
import './GestureInsights.scss';

export default class GestureInsights extends Component {
    constructor(props){
        super(props)
        this.state = {
            ActiveTab: 'study',
        }
    }

        render() {
                const ToggleWhoWeAre = () => {
            this.setState({ActiveTab: 'study'});
        }

        const ToggleOurHeritage = () => {
            this.setState({ActiveTab: 'devices'});
        }

        const ToggleOurValues = () => {
            this.setState({ActiveTab: 'users'});
        }

        const ToggleOurLocation = () => {
            this.setState({ActiveTab: 'spaces'});
        }

        console.log(this.state.ActiveTab);


         let Card1Classes = 'AboutTabs-Card AboutTabs-Card1';
        if(this.state.ActiveTab === 'study'){
            Card1Classes = 'AboutTabs-Card AboutTabs-Card1 AboutTabs-CardActive';
        }

        let Card2Classes = 'AboutTabs-Card AboutTabs-Card2';
        if(this.state.ActiveTab === 'devices'){
            Card2Classes = 'AboutTabs-Card AboutTabs-Card2 AboutTabs-CardActive';
        }

        let Card3Classes = 'AboutTabs-Card AboutTabs-Card3';
        if(this.state.ActiveTab === 'users'){
            Card3Classes = 'AboutTabs-Card AboutTabs-Card3 AboutTabs-CardActive';
        }

        let Card4Classes = 'AboutTabs-Card AboutTabs-Card4';
        if(this.state.ActiveTab === 'spaces'){
            Card4Classes = 'AboutTabs-Card AboutTabs-Card4 AboutTabs-CardActive';
        }

        let Tab1Classes = 'AboutTabs-TabText';
        if(this.state.ActiveTab === 'study'){
            Tab1Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
        }

        let Tab2Classes = 'AboutTabs-TabText';
        if(this.state.ActiveTab === 'devices'){
            Tab2Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
        }

        let Tab3Classes = 'AboutTabs-TabText';
        if(this.state.ActiveTab === 'users'){
            Tab3Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
        }

        let Tab4Classes = 'AboutTabs-TabText';
        if(this.state.ActiveTab === 'spaces'){
            Tab4Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
        }




        return (
            <div className='GestureInsights'>

                <div className='AboutTabs-Wrapper'>

                <p className='AboutTabs-Title'>Insights</p>

                <div className='AboutTabs-Tabs'>
                    <div className='AboutTabs-Tab AboutTabs-Tab1' onClick={ToggleWhoWeAre}>
                        <p className={Tab1Classes}>Global Posture Study</p>
                    </div>
                    <div className='AboutTabs-Tab AboutTabs-Tab2' onClick={ToggleOurHeritage}>
                        <p className={Tab2Classes}>Devices</p>
                    </div>
                    <div className='AboutTabs-Tab AboutTabs-Tab3' onClick={ToggleOurValues}>
                        <p className={Tab3Classes}>Users</p>
                    </div>
                    <div className='AboutTabs-Tab AboutTabs-Tab4' onClick={ToggleOurLocation}>
                        <p className={Tab4Classes}>Spaces</p>
                    </div>
                </div>

                <div className='AboutTabs-CardContainer'>
                    <div className={Card1Classes}>
                        <div className='AboutTabs-TextBox'>
                            <p className='AboutTabs-TextBoxText'>To best understand the body at work, we undertook a global posture study on six continents, observing over 2,000 people in a wide range of postures.</p>
                            <br></br>
                            <p className='AboutTabs-TextBoxText'>We discovered that new technologies combined with new behaviors led to nine new postures that are not adequately addressed by current seating solutions.</p>
                            
                             
                        </div>
                        <div className='AboutTabs-Image GestureTabs-Image1'></div>
                    </div>

                    <div className={Card2Classes}>
                        <div className='AboutTabs-TextBox'>
                            <p className='AboutTabs-TextBoxTitle'>WHAT WE LEARNED</p>
                            <p className='AboutTabs-TextBoxText'>While technology boosts productivity, it can cause pain that disrupts our work, our ability to concentrate, and our creativity.</p>
                            <br></br>
                            <p className='AboutTabs-TextBoxText'>How might we design an office chair as advanced as today’s technology? A chair that augments our technology?</p>
                             
                        </div>
                        <div className='AboutTabs-Image GestureTabs-Image2'></div>
                    </div>

                    <div className={Card3Classes}>
                        <div className='AboutTabs-TextBox'>
                            <p className='AboutTabs-TextBoxTitle'>WHAT WE LEARNED</p>
                            <p className='AboutTabs-TextBoxText'>From body size and shape to gender and generation, each play a role in the sitting preference of each individual.</p> 
                            <br></br>
                            <p className='AboutTabs-TextBoxText'>How might we support all users yet meet the postural preferences that exist within the workplace?</p> 
                            
                             
                        </div>
                        <div className='AboutTabs-Image GestureTabs-Image3'></div>
                    </div>

                    <div className={Card4Classes}>
                        <div className='AboutTabs-TextBox'>
                            <p className='AboutTabs-TextBoxTitle'>WHAT WE LEARNED</p>
                            <p className='AboutTabs-TextBoxText'>We see work being done in a greater range of spaces within the office. We’re spending equal amounts of time at our desk as we are in collaborative spaces. We’re sharing desks, where one day a larger person might be using a chair and the next day a much smaller person.</p>
                            <br></br>
                            <p className='AboutTabs-TextBoxText'>How might we solve for multiple users sitting in multiple spaces throughout a day?</p>
                             
                        </div>
                        <div className='AboutTabs-Image GestureTabs-Image4'></div>
                    </div>
                    
                </div>

            </div>

            </div>
        )
    }
}
