import React from 'react';
import './GestureProducts.scss';

export default function GestureProducts() {
    return (
        <div className='GestureProducts'>
            <div className='GestureProducts-Wrapper'>

                <p className='GestureProducts-Title'>Product Range</p>

                <div className='GestureProducts-ImageWrap'>

                    <div className='GestureProducts-Image GestureProducts-Image1'>
                        <p className='GestureProducts-ImageText'>Gesture</p>
                    </div>
                    <div className='GestureProducts-Image GestureProducts-Image2'>
                        <p className='GestureProducts-ImageText'>HeadRest</p>
                    </div>
                    <div className='GestureProducts-Image GestureProducts-Image3'>
                        <p className='GestureProducts-ImageText'>Stool</p>
                    </div>
                    <div className='GestureProducts-Image GestureProducts-Image4'>
                        <p className='GestureProducts-ImageText'>Wrapped Neck</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
