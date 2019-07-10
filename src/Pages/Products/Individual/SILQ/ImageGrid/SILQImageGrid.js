import React from 'react';
import './SILQImageGrid.scss';

export default function SILQImageGrid() {
    return (
        <div className='SILQImageGrid'> 
            <div className='SILQImageGrid-Wrapper'>


                <div className='SILQImageGrid-Row'>
                    <div className='SILQImageGrid-Row1-Image SILQImageGrid-Image1 SILQGridImage'></div>
                    <div className='SILQImageGrid-Row1-Image SILQImageGrid-Image2 SILQGridImage'></div>
                    <div className='SILQImageGrid-Row1-Image SILQImageGrid-Image3 SILQGridImage'></div>
                </div>

                <div className='SILQImageGrid-Row'>
                    <div className='SILQImageGrid-Row2-Image SILQImageGrid-Image4 SILQGridImage'></div>
                    <div className='SILQImageGrid-Row2-Image SILQImageGrid-Image5 SILQGridImage'></div>
                </div>

                

            </div>
        </div>
    )
}
