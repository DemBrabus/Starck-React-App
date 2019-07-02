import React from 'react';
import './MobileNav.scss';

export default function MobileNav({ ToggleNavDrawer, ToggleUserDrawer, NvaDrawerStatus,UserDrawerStatus}) {
    return (
        <div className='MobileNav'>

            <div className='MobileNav-MenuIcon' onClick={ToggleNavDrawer}>
                <div className='MobileNav-MenuIcon-Bar'></div>
                <div className='MobileNav-MenuIcon-Bar'></div>
                <div className='MobileNav-MenuIcon-Bar'></div>
            </div>

            <h1 className='MobileNav-Logo'>Starck</h1>
            
            <div className='MobileNav-UserIcon' onClick={ToggleUserDrawer}>

            </div>
        </div>
    )
}
