import React from 'react';
import './SILQ.scss';
import SILQHero from './Hero/SILQHero';
import InfoBar from './InfoBar/InfoBar';
import SILQHook from './Hook/SILQHook';
import SILQImageGrid from './ImageGrid/SILQImageGrid';
import SILQInnovations from './Innovations/SILQInnovations';
import SILQArtistry from './Artistry/SILQArtistry';
import SILQPerformance from './Performance/SILQPerformance';
import PurchaseBar from '../../../../Recycled/PurchaseBar/PurchaseBar';
import SILQClosing from './Closing/SILQClosing';

export default function SILQ() {
    return (
        <div className='SILQ'>
            <div className='SILQ-Wrapper'>
                
            
                <div className='SILQ-TitleBlock'>
                    <p className='SILQ-Title'>SILQ</p>
                    <div className='BuyButton SILQBuyButton'>
                        <p className='BuyButtonText'>Buy Now</p>
                    </div>
                </div>


                <SILQHero />
                <InfoBar />
                <SILQHook />
                <SILQImageGrid />
                <SILQInnovations />
                <SILQArtistry />
                <SILQPerformance />
                <SILQClosing />
                <PurchaseBar />


                
            </div>
        </div>
    )
}
