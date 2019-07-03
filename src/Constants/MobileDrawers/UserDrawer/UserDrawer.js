import React from 'react';
import './UserDrawer.scss';
import { Link } from 'react-router-dom';

export default function UserDrawer({ UserDrawerIsOpen, CloseUserDrawer }) {

    let UserDrawerClasses = 'UserDrawer';
    if(UserDrawerIsOpen ){
        UserDrawerClasses = 'UserDrawer UserDrawerOpen'
    }
    return (
        <div className={UserDrawerClasses}>
            <div className='UserDrawer-Wrapper'>
                <div className='UserDrawer-RegistrationBlock'>
                    <Link to='/registration' className='UserDrawer-RegistrationTextLink' onClick={CloseUserDrawer}>
                        <p className='UserDrawer-RegistrationText'>Login / Register</p>
                    </Link>
                    
                </div>
                <div className='UserDrawer-SavedItemsBlock'>
                    <p className='UserDrawer-SavedItems-Text'>Saved Items</p>
                    <div className='UserDrawer-SavedItemIcon'></div>
                </div>
            </div>
        </div>
    )
}
