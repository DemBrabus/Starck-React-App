import React from 'react';
import './Landing.scss';
import LandingHero from './LandingComps/Hero/LandingHero';
import WhatsNew from './LandingComps/WhatsNew/WhatsNew';
import Featured from './LandingComps/Featured/Featured';
import LandingResearch from './LandingComps/Research/LandingResearch';
import News from './LandingComps/News/News';


export default function Landing() {
    return (
        <div className='Landing'>
            <div className='Landing-Wrapper'>

                <LandingHero />
                <WhatsNew />
                <Featured />
                <LandingResearch />
                <News />

            </div>
        </div>
    )
}
