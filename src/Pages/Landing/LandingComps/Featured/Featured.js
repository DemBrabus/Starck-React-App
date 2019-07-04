import React from 'react';
import './Featured.scss';

export default function Featured() {
    return (
        <div className='Featured'>
            <div className='Featured-Content'>
                <p className='Featured-Title'>
                    Featured Products
                </p>
                <div className='Featured-CardWrapper'>
                    <div className='Featured-Card Featured-Card1'>
                        <div className='Featured-CardImage Featured-CardImage1'></div>
                        <div className='Featured-Card-TextBox'>
                            <p className='Featured-CardTitle'>Gesture</p>
                            <p className='Featured-CardText'>Inspired by the movement of the human body, Gesture is the first office chair designed to support our interactions with today's technologies. Gesture is created for the way we work today.</p>
                        </div>
                    </div>
                    <div className='Featured-Card Featured-Card2'>
                        <div className='Featured-CardImage Featured-CardImage2'></div>
                        <div className='Featured-Card-TextBox'>
                            <p className='Featured-CardTitle'>Series 1</p>
                            <p className='Featured-CardText'>Series 1 office chair delivers on what’s important - performance, style and choice. It retains everything that’s valued in a chair, while making it attainable for everyone.</p>
                        </div>
                    </div>
                    <div className='Featured-Card Featured-Card3'>
                        <div className='Featured-CardImage Featured-CardImage3'></div>
                        <div className='Featured-Card-TextBox'>
                            <p className='Featured-CardTitle'>Cobi</p>
                            <p className='Featured-CardText'>The cobi office chair was designed to foster collaboration and promote movement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
