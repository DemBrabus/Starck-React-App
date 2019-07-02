import React from 'react';
import './MobileNav.scss';

export default function MobileNav() {
    return (
        <div className='MobileNav'>

            <div className='MobileNav-MenuIcon'>
                <div className='MobileNav-MenuIcon-Bar'></div>
                <div className='MobileNav-MenuIcon-Bar'></div>
                <div className='MobileNav-MenuIcon-Bar'></div>
            </div>

            <h1 className='MobileNav-Logo'>Starck</h1>
            
            <div className='MobileNav-UserIcon'>

            </div>
        </div>
    )
}
