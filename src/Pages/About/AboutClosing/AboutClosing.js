import React from 'react';
import './AboutClosing.scss';

export default function AboutClosing() {
    return (
        <div className='AboutClosing'>
            <div className='AboutClosing-Wrapper'>

                <div className='AboutClosing-Image'></div>

                <div className='AboutClosing-TextBox'>
                    <p className='AboutClosing-Title'>Our Executives + Board of Directors</p>
                    <p className='AboutClosing-Text'>A commitment to excellence, creativity and innovation. Take a moment to meet some of the leaders who shape our vision.</p>
                    <div className='AboutClosing-Button'>
                        <p className='AboutClosing-ButtonText'>Executive Officers</p>
                        <div className='AboutClosing-ButtonIcon'></div>
                    </div>
                    <div className='AboutClosing-Button'>
                        <p className='AboutClosing-ButtonText'>Board of Directors</p>
                        <div className='AboutClosing-ButtonIcon'></div>
                    </div>
                </div>

            </div>
        </div>
    )
}
