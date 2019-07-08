import React from 'react';
import './SILQImageGrid.scss';

export default function SILQImageGrid() {
    return (
        <div className='SILQImageGrid'> 
            <div className='SILQImageGrid-Wrapper'>


                <div className='SILQImageGrid-Row'>
                    <div className='SILQImageGrid-Row1-Image SILQImageGrid-Image1'></div>
                    <div className='SILQImageGrid-Row1-Image SILQImageGrid-Image2'></div>
                    <div className='SILQImageGrid-Row1-Image SILQImageGrid-Image3'></div>
                </div>

                <div className='SILQImageGrid-Row'>
                    <div className='SILQImageGrid-Row2-Image SILQImageGrid-Image4'></div>
                    <div className='SILQImageGrid-Row2-Image SILQImageGrid-Image5'></div>
                </div>

                

            </div>
        </div>
    )
}
