import React from 'react';
import './News.scss';

export default function News() {
    return (
        <div className='News'>
            <div className='News-Content'>
                <p className='News-Title'>News</p>
                <div className='News-CardWrapper'>
                    <div className='News-Card'>
                        <div className='News-CardImage News-CardImage1'></div>
                        <div className='News-CardTextBox'>
                            <p className='News-CardDate'>April 19, 2019</p>
                            <p className='News-CardTitle'>Starck embarks on the flex partnership with Steelcase to innovate the workplace</p>
                            <p className='News-CardText'>Creating dynamic team neighborhoods to support the rapid pace and changing activities of agile teams today.</p>
                        </div>
                    </div>
                    <div className='News-Card'>
                        <div className='News-CardImage News-CardImage2'></div>
                        <div className='News-CardTextBox'>
                            <p className='News-CardDate'>May 21, 2019</p>
                            <p className='News-CardTitle'>Starck SILQ chair wins Red Dot award</p>
                            <p className='News-CardText'>SILQ™ chair recognized for innovative product design in top international design competition.</p>
                        </div>
                    </div>
                    <div className='News-Card'>
                        <div className='News-CardImage News-CardImage3'></div>
                        <div className='News-CardTextBox'>
                            <p className='News-CardDate'>June 5, 2019</p>
                            <p className='News-CardTitle'>Starck Releases 2018 Corporate Sustainability Report</p>
                            <p className='News-CardText'>Starck celebrates its global sustainability performance with the release of its 2018 Corporate Sustainability Report.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
