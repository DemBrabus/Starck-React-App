import React from 'react';
import './NavDrawer.scss';

export default function NavDrawer({ NavDrawerIsOpen, CloseNavDrawer }) {

    let NavDrawerClasses = 'NavDrawer';
    if(NavDrawerIsOpen) {
        NavDrawerClasses = 'NavDrawer NavDrawerOpen';
    }

    return (
        <div className={NavDrawerClasses}>
            <div className='NavDrawer-Wrapper'>
                <ul className='NavDrawer-List'>
                    <li className='NavDrawer-ListItem'><a href='#' className='NavDrawer-ListItemLink' onClick={CloseNavDrawer}>Products<div className='NavDrawer-ListItemLinkIcon'></div></a></li>

                    <li className='NavDrawer-ListItem'><a href='#' className='NavDrawer-ListItemLink' onClick={CloseNavDrawer}>Research<div className='NavDrawer-ListItemLinkIcon'></div></a></li>

                    <li className='NavDrawer-ListItem'><a href='#' className='NavDrawer-ListItemLink' onClick={CloseNavDrawer}>Inspiration<div className='NavDrawer-ListItemLinkIcon'></div></a></li>

                    <li className='NavDrawer-ListItem'><a href='#' className='NavDrawer-ListItemLink' onClick={CloseNavDrawer}>About<div className='NavDrawer-ListItemLinkIcon'></div></a></li>

                    <li className='NavDrawer-ListItem '><a href='#' className='NavDrawer-ListItemLink NavDrawer-Dealer' onClick={CloseNavDrawer}>Find A Dealer<div className='NavDrawer-ListItemLinkIcon'></div></a></li>
                </ul>
            </div>
            
        </div>
    )
}
