import React from 'react';
import './GestureHero.scss';

export default function GestureHero() {
    return (
        <div className='GestureHero'>
            <div className='GestureHero-Wrapper'>

                <div className='GestureHero-Image'>
                    <div className='GestureHero-WhiteBox'>
                        
                        <div className='GestureHero-WhiteBox-Top'>
                            <p className='GestureHero-WhiteBox-Title'>Design Resources</p>
                        </div>

                        
                            
                                <p className='GestureHero-WhiteBox-Text'>Gesture is the first chair designed to support our interactions with today's technologies.</p>

                                <div className='GestureHero-Button'>
                                    View Resources
                                </div>
                            
                        
                    </div>
                </div>

                <div className='GestureHero-Mobile-TextBox'>
                    <p className='GestureHero-Mobile-Title'>Design Resources</p>
                    <p className='GestureHero-Mobile-Text'>Gesture is the first chair designed to support our interactions with today's technologies.</p>

                    <div className='GestureHero-Button'>
                        View Resources
                    </div>
                </div>

            </div>
        </div>
    )
}
