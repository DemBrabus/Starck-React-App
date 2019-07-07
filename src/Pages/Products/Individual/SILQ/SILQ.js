import React from 'react';
import './SILQ.scss';
import SILQHero from './Hero/SILQHero';

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
                
            </div>
        </div>
    )
}
