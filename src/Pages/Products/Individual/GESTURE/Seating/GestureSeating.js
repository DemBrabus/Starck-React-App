import React from 'react';
import './GestureSeating.scss';

export default function GestureSeating() {
    return (
        <div className='GestureSeating'>
            <div className='GestureSeating-Wrapper'>

                <div className='GestureSeating-Image'></div>

                <div className='GestureSeating-TextBox'>
                    <p className='GestureSeating-Title'>The Strack Seating Difference</p>
                    <p className='GestureSeating-Text'>At Starck, we study how you work and how you feel. You inspire new seating solutions, each expressed with uncompromising quality, craftsmanship and sustainability.</p>
                    <div className='GestureSeating-Button'>
                        Find Out More
                    </div>
                </div>

            </div>
        </div>
    )
}
