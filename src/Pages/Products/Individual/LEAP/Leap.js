import React from 'react';
import './Leap.scss';
import LeapHero from './Hero/LeapHero';
import LeapInfoBar from './InfoBar/LeapInfoBar';

export default function Leap() {
    return (
        <div className='Leap'>
            <div className='Leap-Wrapper'>

                <div className='Leap-TitleBlock'>
                    <p className='Leap-Title'>Leap</p>
                    <div className='BuyButton'>
                        <p className='BuyButtonText'>Buy Now</p>
                    </div>
                </div>

                <LeapHero />
                <LeapInfoBar />

            </div>
        </div>
    )
}
