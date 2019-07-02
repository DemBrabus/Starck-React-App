import React from 'react';
import './MobileOverlay.scss';

export default function MobileOverlay({ CloseNavDrawer, CloseUserDrawer }) {
    return (
        <div className='MobileOverlay' onClick={CloseNavDrawer}>
            <div className='MobileOverlay-Wrapper' onClick={CloseUserDrawer}>

            </div>
        </div>
    )
}
