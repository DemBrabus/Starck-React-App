import React from 'react';
import './Leap.scss';
import LeapHero from './Hero/LeapHero';
import LeapInfoBar from './InfoBar/LeapInfoBar';
import LeapTabs from './LeapTabs/LeapTabs';
import LeapInsight from './LeapInsights/LeapInsight';
import LeapSeating from './LeapSeating/LeapSeating';
import PurchaseBar from '../../../../Recycled/PurchaseBar/PurchaseBar';

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
                <LeapTabs />
                <LeapInsight />
                <LeapSeating />
                <PurchaseBar />

            </div>
        </div>
    )
}
