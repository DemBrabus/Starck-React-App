import React, { Component } from 'react';
import './About.scss';
import AboutHero from './Hero/AboutHero';
import AboutTabs from './Tabs/AboutTabs';
import AboutInfo from './Info/AboutInfo';
import AboutClosing from './AboutClosing/AboutClosing';

export default class About extends Component {
    constructor(props){
        super(props)
        this.state = {
            ActiveTab: 'who',
        }

        

    }
    render() {

        const ToggleWhoWeAre = () => {
            this.setState({ActiveTab: 'who'});
        }

        const ToggleOurHeritage = () => {
            this.setState({ActiveTab: 'heritage'});
        }

        const ToggleOurValues = () => {
            this.setState({ActiveTab: 'values'});
        }

        const ToggleOurLocation = () => {
            this.setState({ActiveTab: 'location'});
        }

        console.log(this.state.ActiveTab);

        return (
            <div className='About'>
                <div className='About-Wrapper'>

                     <div className='About-TitleBlock'>
                        <p className='About-Title'>Our Company</p>
                    </div>


                    <AboutHero />
                    <AboutTabs ToggleWhoWeAre={ToggleWhoWeAre}
                                ToggleOurHeritage={ToggleOurHeritage}
                                ToggleOurValues={ToggleOurValues}
                                ToggleOurLocation={ToggleOurLocation}
                                
                                ActiveTabStatus={this.state.ActiveTab} />
                    <AboutInfo />
                    <AboutClosing />



                </div>
            </div>
        )
    }
}

