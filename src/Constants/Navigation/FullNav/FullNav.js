import React from 'react';
import './FullNav.scss';

export default function FullNav() {
    return (
        <div className='FullNav'>
            <div className='FullNav-Wrapper'>
                <div className='FullNav-TopRow'>
                    <h1 className='FullNav-Logo'>Starck</h1>
                    <div className='FullNav-UserLinks-Wrapper'>
                        <p className='FullNav-Registration'>Login / Register</p>
                        <div className='FullNav-ContactBtn'>
                            <p className='FullNav-ContactBtn-Text'>Contact Us</p>
                        </div>
                    </div>
                </div>
                <div className='FullNav-BottomRow'>
                    <div className='FullNav-Links-Wrapper'>
                        <p className='FullNav-Link'>Products</p>
                        <p className='FullNav-Link'>Research</p>
                        <p className='FullNav-Link'>Inspiration</p>
                        <p className='FullNav-Link'>About</p>
                    </div>

                    <div className='FullNav-Dealer-Wrapper'>
                        <div className='FullNav-Dealer-Icon'></div>
                        <p className='FullNav-Dealer-Text'>Find A Dealer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
