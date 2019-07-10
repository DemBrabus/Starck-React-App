import React from 'react';
import './Featured.scss';
import { Link } from 'react-router-dom';

export default function Featured() {
    return (
        <div className='Featured'>
            <div className='Featured-Content'>
                <p className='Featured-Title'>
                    Featured Products
                </p>
                <div className='Featured-CardWrapper'>
                    <div className='Featured-Card Featured-Card1'>
                            <Link to ='/product/gesture'>
                                <div className='Featured-CardImage Featured-CardImage1'></div>
                            </Link>
                        
                        <div className='Featured-Card-TextBox'>
                            <Link to ='/product/gesture'>
                                <p className='Featured-CardTitle'>Gesture</p>
                            </Link>
                            
                            <p className='Featured-CardText'>Inspired by the movement of the human body, Gesture is the first office chair designed to support our interactions with today's technologies. Gesture is created for the way we work today.</p>
                        </div>
                    </div>
                    <div className='Featured-Card Featured-Card2'>
                        <Link to ='/product/series1'>
                                <div className='Featured-CardImage Featured-CardImage2'></div>
                            </Link>
                        <div className='Featured-Card-TextBox'>
                            <Link to ='/product/series1'>
                                <p className='Featured-CardTitle'>Series 1</p>
                            </Link>
                            <p className='Featured-CardText'>Series 1 office chair delivers on what’s important - performance, style and choice. It retains everything that’s valued in a chair, while making it attainable for everyone.</p>
                        </div>
                    </div>
                    <div className='Featured-Card Featured-Card3'>
                        <Link to ='/product/leap'>
                                <div className='Featured-CardImage Featured-CardImage3'></div>
                            </Link>
                        <div className='Featured-Card-TextBox'>
                            <Link to ='/product/leap'>
                                <p className='Featured-CardTitle'>Leap</p>
                            </Link>
                            <p className='Featured-CardText'>The Leap office chair was designed to foster collaboration and promote movement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
