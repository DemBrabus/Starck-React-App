import React from 'react';
import './UserDrawer.scss';

export default function UserDrawer({ UserDrawerIsOpen, CloseUserDrawer }) {

    let UserDrawerClasses = 'UserDrawer';
    if(UserDrawerIsOpen ){
        UserDrawerClasses = 'UserDrawer UserDrawerOpen'
    }
    return (
        <div className={UserDrawerClasses}>
            <div className='UserDrawer-Wrapper'>
                <div className='UserDrawer-RegistrationBlock'>
                    <p className='UserDrawer-RegistrationText'><a href='#'className='UserDrawer-RegistrationTextLink' onClick={CloseUserDrawer}>Login / Register</a></p>
                </div>
                <div className='UserDrawer-SavedItemsBlock'>
                    <p className='UserDrawer-SavedItems-Text'>Saved Items</p>
                    <div className='UserDrawer-SavedItemIcon'></div>
                </div>
            </div>
        </div>
    )
}
