import React from 'react';
import './WhatsNew.scss';

export default function WhatsNew() {
    return (
        <div className='WhatsNew'>
            <div className='WhatsNew-Content'>
                <div className='WhatsNew-TextSection'>
                    <p className='WhatsNew-Title' id='WhatsNew-Title'>Whats New At Starck</p>
                    <p className='WhatsNew-Text' id='WhatsNew-Text'>In collaboration with Microsoft and Steelcase we have untethered teams from the traditionally limited environments so they can work together how the like: easily, actively and spontaneously  </p>
                    <div className='WhatsNew-Button'>
                        <p className='WhatsNew-ButtonText'>
                            2019 Collaboration
                        </p>
                        <div className='WhatsNew-ButtonIcon'>
                            <div className='WhatsNew-ButtonIcon-Image'></div>
                        </div>
                    </div>
                </div>
                <div className='WhatsNew-Image'></div>
            </div>
        </div>
    )
}
