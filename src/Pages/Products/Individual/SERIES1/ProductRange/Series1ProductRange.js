import React from 'react';
import './Series1ProductRange.scss';

export default function Series1ProductRange() {
    return (
        <div className='Series1ProductRange'>
            <div className='Series1ProductRange-Wrapper'>

                <p className='Series1ProductRange-Title'>Product Range</p>

                <div className='Series1ProductRange-ImageWrap'>

                    <div className='Series1ProductRange-Image Series1ProductRange-Image1'>
                        <p className='Series1ProductRange-ImageText'>Task Chair</p>
                    </div>
                    <div className='Series1ProductRange-Image Series1ProductRange-Image2'>
                        <p className='Series1ProductRange-ImageText'>Stool</p>
                    </div>
                    <div className='Series1ProductRange-Image Series1ProductRange-Image3'>
                        <p className='Series1ProductRange-ImageText'>Head Rest</p>
                    </div>
                    <div className='Series1ProductRange-Image Series1ProductRange-Image4'>
                        <p className='Series1ProductRange-ImageText'>Coat Hanger</p>
                    </div>

                </div>

                

            </div>
        </div>
    )
}
