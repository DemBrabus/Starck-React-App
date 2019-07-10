import React, { Component } from 'react';
import './LeapTabs.scss';

export default class LeapTabs extends Component {
    constructor(props){
        super(props)
        this.state = {
            ActiveTab: 'movement',
        }
    }

        render() {
                const ToggleWhoWeAre = () => {
            this.setState({ActiveTab: 'movement'});
        }

        const ToggleOurHeritage = () => {
            this.setState({ActiveTab: 'orientation'});
        }

        const ToggleOurValues = () => {
            this.setState({ActiveTab: 'fit'});
        }

        const ToggleOurLocation = () => {
            this.setState({ActiveTab: 'workLounge'});
        }

        console.log(this.state.ActiveTab);


         let Card1Classes = 'AboutTabs-Card AboutTabs-Card1';
        if(this.state.ActiveTab === 'movement'){
            Card1Classes = 'AboutTabs-Card AboutTabs-Card1 AboutTabs-CardActive';
        }

        let Card2Classes = 'AboutTabs-Card AboutTabs-Card2';
        if(this.state.ActiveTab === 'orientation'){
            Card2Classes = 'AboutTabs-Card AboutTabs-Card2 AboutTabs-CardActive';
        }

        let Card3Classes = 'AboutTabs-Card AboutTabs-Card3';
        if(this.state.ActiveTab === 'fit'){
            Card3Classes = 'AboutTabs-Card AboutTabs-Card3 AboutTabs-CardActive';
        }

        let Card4Classes = 'AboutTabs-Card AboutTabs-Card4';
        if(this.state.ActiveTab === 'workLounge'){
            Card4Classes = 'AboutTabs-Card AboutTabs-Card4 AboutTabs-CardActive';
        }

        let Tab1Classes = 'AboutTabs-TabText';
        if(this.state.ActiveTab === 'movement'){
            Tab1Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
        }

        let Tab2Classes = 'AboutTabs-TabText';
        if(this.state.ActiveTab === 'orientation'){
            Tab2Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
        }

        let Tab3Classes = 'AboutTabs-TabText';
        if(this.state.ActiveTab === 'fit'){
            Tab3Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
        }

        let Tab4Classes = 'AboutTabs-TabText';
        if(this.state.ActiveTab === 'workLounge'){
            Tab4Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
        }




        return (
            <div className='LeapTabs'>

                <div className='AboutTabs-Wrapper'>

                <p className='AboutTabs-Title'>Features</p>

                <div className='AboutTabs-Tabs'>
                    <div className='AboutTabs-Tab AboutTabs-Tab1' onClick={ToggleWhoWeAre}>
                        <p className={Tab1Classes}>Movement</p>
                    </div>
                    <div className='AboutTabs-Tab AboutTabs-Tab2' onClick={ToggleOurHeritage}>
                        <p className={Tab2Classes}>Orientation</p>
                    </div>
                    <div className='AboutTabs-Tab AboutTabs-Tab3' onClick={ToggleOurValues}>
                        <p className={Tab3Classes}>Fit</p>
                    </div>
                    <div className='AboutTabs-Tab AboutTabs-Tab4' onClick={ToggleOurLocation}>
                        <p className={Tab4Classes}>WorkLounge</p>
                    </div>
                </div>

                <div className='AboutTabs-CardContainer'>
                    <div className={Card1Classes}>
                        <div className='AboutTabs-Image LeapTabs-Image1'></div>

                        <div className='AboutTabs-TextBox'>
                            <p className='AboutTabs-TextBoxText'>Moving helps reduce pressure on the spine, sends oxygen to your muscles, and increases blood flow to your brain. Movement is healthy and your desk chair should support your body as you move.</p> 
                        </div>

                        
                    </div>

                    <div className={Card2Classes}>
                        <div className='AboutTabs-Image LeapTabs-Image2'></div>

                        <div className='AboutTabs-TextBox'>
                            <p className='AboutTabs-TextBoxText'>Changes in posture help you stay comfortable and more attentive. Leap office chair’s Natural Glide System™ enables you to comfortably recline without straining your eyes, neck, or arms.</p>
                             
                        </div>
                        
                    </div>

                    <div className={Card3Classes}>
                        <div className='AboutTabs-Image LeapTabs-Image3'></div>
                        <div className='AboutTabs-TextBox'>
                            <p className='AboutTabs-TextBoxText'>Your body is unique. You need a desk chair that easily adjusts to fit you, your preferences, and how you work.</p>
                        </div>
                        
                    </div>

                    <div className={Card4Classes}>
                        <div className='AboutTabs-Image LeapTabs-Image4'></div>
                        <div className='AboutTabs-TextBox'>
                            <p className='AboutTabs-TextBoxText'>The Leap WorkLounge, developed in conjunction with IDEO, combines elegant form, rich materials, and Leap technology.</p>
                            <br></br>
                            <p className='AboutTabs-TextBoxText'>Research has shown that changing posture is the right thing to do for good health. So, if you need to push back and relax in a deep recline, sit up to keyboard, or even something in between, the Leap WorkLounge and Ottoman will provide you with exceptional comfort and support.</p>
                             
                        </div>
                        
                    </div>
                    
                </div>

            </div>

            </div>
        )
    }
}
