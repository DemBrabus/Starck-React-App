import React from 'react';
import './LandingHero.scss';
import { Link } from 'react-router-dom';

export default function LandingHero() {
    return (
        <div className='LandingHero'>
            <div className='LandingHero-Content'>
                <div className='LandingHero-BlueBox'>
                    <div className='LandingHero-BlueBox-WhiteBox'>
                        <p className='LandingHero-BlueBox-WhiteBox-Title'>A new standard for office chairs </p>
                        <p className='LandingHero-BlueBox-WhiteBox-Text'>We've set out to capture the same quality and prestige found in high end automobiles and render that in the office space.</p>

                        <Link to='/product/silq'>
                            <div className='LandingHero-BlueBox-WhiteBox-Button'>
                            <p className='LandingHero-BlueBox-WhiteBox-ButtonText'>2019 SILQ</p>
                            <div className='LandingHero-BlueBox-WhiteBox-ButtonIcon'>
                                <div className="LandingHero-BlueBox-WhiteBox-ButtonIcon-Image"></div>
                            </div>
                        </div>
                        </Link>
                        
                    </div>
                </div>
                <div className='LandingHero-ImageBox'>
                </div>
            </div>

                <div className='LandingHero-MobileContent'>
                    <p className='LandingHero-MobileTitle'>A new standard for office chairs </p>
                    <p className='LandingHero-MobileText'>We've set out to capture the same quality and prestige found in high end automobiles and render that in the office space.</p>

                    <Link to='/product/silq'>
                        <div className='LandingHero-Mobile-Button' id='LandingHero-Mobile-Button'>
                            <p className='LandingHero-Mobile-ButtonText'>2019 SILQ</p>
                            <div className='LandingHero-Mobile-ButtonIcon'>
                                <div className='LandingHero-Mobile-ButtonIcon-Image'></div>
                            </div>
                        </div>
                    </Link>
                        
                </div> 
        </div>
    )
}
