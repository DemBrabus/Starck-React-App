import React from 'react';
import './Landing.scss';
import LandingHero from './LandingComps/Hero/LandingHero';
import WhatsNew from './LandingComps/WhatsNew/WhatsNew';


export default function Landing() {
    return (
        <div className='Landing'>
            <div className='Landing-Wrapper'>

                <LandingHero />
                <WhatsNew />



            </div>
        </div>
    )
}
