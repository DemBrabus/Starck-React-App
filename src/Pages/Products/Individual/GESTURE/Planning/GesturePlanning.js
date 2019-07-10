import React from 'react';
import './GesturePlanning.scss';

export default function GesturePlanning() {
    return (
        <div className='GesturePlanning'>
            <div className='GesturePlanning-Wrapper'>

                <p className='GesturePlanning-Title'>Planning Ideas</p>

                <div className='GesturePlanning-Button'>
                    <p className='GesturePlanning-ButtonText'>All Gesture Planning Ideas</p>
                    <div className='GesturePlanning-ButtonIcon'></div>
                </div>

                <div className='GesturePlanning-CardWrap'>
                    <div className='GesturePlanning-Card'>
                        <div className='GesturePlanning-CardImage GesturePlanning-CardImage1'></div>
                        <div className='GesturePlanning-CardTextBox'>
                            <p className='GesturePlanning-CardTitle'>FH2DY3SV</p>
                            <p className='GesturePlanning-CardText'>Agile methodologies improve speed, flexibility and customer focus. This focus space for a super duo supports agile pair-based work</p>
                        </div>
                    </div>
                    <div className='GesturePlanning-Card'>
                        <div className='GesturePlanning-CardImage GesturePlanning-CardImage2'></div>
                        <div className='GesturePlanning-CardTextBox'>
                            <p className='GesturePlanning-CardTitle'>UZ7GK9TK</p>
                            <p className='GesturePlanning-CardText'>Inspired by teams using design thinking and agile practices, the Starck Flex Collection gives teams the flexibility and control</p>
                        </div>
                    </div>
                    <div className='GesturePlanning-Card'>
                        <div className='GesturePlanning-CardImage GesturePlanning-CardImage3'></div>
                        <div className='GesturePlanning-CardTextBox'>
                            <p className='GesturePlanning-CardTitle'>DZ4VH6PB</p>
                            <p className='GesturePlanning-CardText'>Give people a permanent address. A 120-degree application and seated-height privacy provide space to focus. And, there’s plenty of storage</p>
                        </div>
                    </div>
                    <div className='GesturePlanning-Card'>
                        <div className='GesturePlanning-CardImage GesturePlanning-CardImage4'></div>
                        <div className='GesturePlanning-CardTextBox'>
                            <p className='GesturePlanning-CardTitle'>VU4ZD2KT</p>
                            <p className='GesturePlanning-CardText'>A reservable workspace for a small project team includes individual spaces at the bench and a side-by-side lounge area</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
