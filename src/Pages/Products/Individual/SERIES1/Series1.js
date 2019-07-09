import React from 'react';
import './Series1.scss';
import Series1Hero from './Hero/Series1Hero';
import Series1InfoBar from './InfoBar/Series1InfoBar';
import Series1Range from './RangeOfSpaces/Series1Range';
import Series1Seating from './Seating/Series1Seating';

export default function Series1() {
    return (
        <div className='Series1'>
            <div className='Series1-Wrapper'>

                 <div className='Series1-TitleBlock'>
                    <p className='Series1-Title'>Series 1</p>
                    <div className='BuyButton Series1BuyButton'>
                        <p className='BuyButtonText'>Buy Now</p>
                    </div>
                </div>


                <Series1Hero />
                <Series1InfoBar />
                <Series1Range />
                <Series1Seating />



            </div>
        </div>
    )
}
