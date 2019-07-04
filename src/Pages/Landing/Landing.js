import React from 'react';
import './Landing.scss';
import LandingHero from './LandingComps/Hero/LandingHero';
import WhatsNew from './LandingComps/WhatsNew/WhatsNew';
import Featured from './LandingComps/Featured/Featured';


export default function Landing() {
    return (
        <div className='Landing'>
            <div className='Landing-Wrapper'>

                <LandingHero />
                <WhatsNew />
                <Featured />


            </div>
        </div>
    )
}
