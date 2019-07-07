import React from 'react';
import './SILQHero.scss';

export default function SILQHero() {
    return (
        <div className='SILQHero'>
            <div className='SILQHero-Wrapper'>

                <div className='SILQHero-Image'>
                    <div className='SILQHero-WhiteBox'>
                        
                        <div className='SILQHero-WhiteBox-Top'>
                            <p className='SILQHero-WhiteBox-Title'>Design Concept</p>
                        </div>

                        <div className='SILQHero-WhiteBox-TextWrap'>
                            
                                <p className='SILQHero-WhiteBox-Text'>The SILQ chair (pronounced silk) is a breakthrough in seating design. Its innovative materiality is both mechanism and artistry, and delivers a personal experience by responding to the unique movements of your body.</p>
                            
                        </div>
                    </div>
                </div>

                <div className='SILQHero-Mobile-TextBox'>
                    <p className='SILQHero-Mobile-Title'>Design Concept</p>
                    <p className='SILQHero-Mobile-Text'>The SILQ chair (pronounced silk) is a breakthrough in seating design. Its innovative materiality is both mechanism and artistry, and delivers a personal experience by responding to the unique movements of your body.</p>
                </div>

            </div>
        </div>
    )
}

