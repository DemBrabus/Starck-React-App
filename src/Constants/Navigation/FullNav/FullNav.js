import React from 'react';
import './FullNav.scss';
import { Link } from 'react-router-dom';

export default function FullNav() {
    return (
        <div className='FullNav'>
            <div className='FullNav-Wrapper'>
                <div className='FullNav-TopRow'>
                    <Link to='/'>
                        <h1 className='FullNav-Logo'>Starck</h1>
                    </Link>
                    <div className='FullNav-UserLinks-Wrapper'>
                        <p className='FullNav-Registration'>Login / Register</p>
                        <div className='FullNav-ContactBtn'>
                            <p className='FullNav-ContactBtn-Text'>Contact Us</p>
                        </div>
                    </div>
                </div>
                <div className='FullNav-BottomRow'>
                    <div className='FullNav-Links-Wrapper'>
                        <Link to='/main-product-page'>
                            <p className='FullNav-Link'>Products</p>
                        </Link>
                        <Link to='/research'>
                            <p className='FullNav-Link'>Research</p>
                        </Link>
                        <Link to='/inspiration'>
                            <p className='FullNav-Link'>Inspiration</p>
                        </Link>
                        <Link to='/about'>
                            <p className='FullNav-Link'>About</p>
                        </Link>
                        
                        
                        
                        
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
