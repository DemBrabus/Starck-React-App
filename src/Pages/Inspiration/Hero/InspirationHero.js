import React from 'react';
import './InspirationHero.scss';

export default function InspirationHero() {
    return (
        <div className='InspirationHero'>
            <div className='InspirationHero-Wrapper'>

                <div className='InspirationHero-ImageBox'>
                    <div className='InspirationHero-WhiteBox'>
                        <p className='InspirationHero-WhiteBox-Title'>The Office Renaissance</p>
                        <p className='InspirationHero-WhiteBox-Text'>People are rebelling against the uninspiring sea of sameness that has come to be known as the office.</p>
                        <div className='InspirationHero-WhiteBox-Button'>
                            <p className='InspirationHero-WhiteBox-ButtonText'>Get Inspired</p>
                            <div className='InspirationHero-WhiteBox-ButtonIcon'></div>
                        </div>
                    </div>
                </div>

                <div className='InspirationHero-MobileContent'>
                    <p className='InspirationHero-WhiteBox-Title'>The Office Renaissance</p>
                    <p className='InspirationHero-WhiteBox-Text'>People are rebelling against the uninspiring sea of sameness that has come to be known as the office.</p>
                    <div className='InspirationHero-Mobile-Button'>
                        <p className='InspirationHero-Mobile-ButtonText'>Get Inspired</p>
                        <div className='InspirationHero-Mobile-ButtonIcon'></div>
                    </div>
                </div>

            </div>
        </div>
    )
}
