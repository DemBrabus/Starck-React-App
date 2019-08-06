import React from 'react';
import './AboutHero.scss';

export default function AboutHero() {
    return (
        <div className='AboutHero'>
            <div className='AboutHero-Wrapper'>

                <div className='AboutHero-Image'>
                    <div className='AboutHero-WhiteBox'>
                        <p className='AboutHero-WhiteBox-Title'>AboutStarck</p>
                        <p className='AboutHero-WhiteBox-Text'>For over 80 years Starck has helped create great experiences for the world''s leading  organizations, across industries</p>
                    </div>
                </div>

                <div className='AboutHero-MobileContent'>
                    <p className='AboutHero-MobileTitle'>AboutStarck</p>
                    <p className='AboutHero-MobileText'>For over 80 years Starck has helped create great experiences for the world''s leading  organizations, across industries</p>
                </div>

            </div>
        </div>
    )
}
