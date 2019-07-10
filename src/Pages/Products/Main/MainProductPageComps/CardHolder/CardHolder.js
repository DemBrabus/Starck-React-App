import React from 'react';
import './CardHolder.scss';
import { Link } from 'react-router-dom';

export default function CardHolder() {
    return (
        <div className='CardHolder'>
            <div className='CardHolder-Content'>

                <div className='CardHolder-Row'>
                    <div className='Product-Card Product-Card1'>
                    <Link to='/product/silq'>
                        <div className='CardImage CardImage1'>
                        </div>
                    </Link>
                        
                    <div className='Card-TextBox'>
                        <p className='Card-Logo'>Starck</p>
                        <Link to='/product/silq'>
                            <p className='Card-Title'>SILQ</p>
                        </Link>
                        
                        <p className='Card-Text'>The SILQ chair is a breakthrough in seating design. Its innovative nature is both mechanism and artistry. It delivers a personal experience that responds to the unique movements of your body.</p>
                    </div>
                </div>

                <div className='Product-Card Product-Card2'>
                    <Link to='/product/series1'>
                        <div className='CardImage CardImage2'>
                        </div>
                    </Link>
                    <div className='Card-TextBox'>
                        <p className='Card-Logo'>Starck</p>
                        <Link to='/product/series1'>
                            <p className='Card-Title'>Series 1</p>
                        </Link>
                        <p className='Card-Text'>Starck Series 1 office chair delivers on what’s important - performance, style and choice. It retains everything that’s valued in a chair, while making it attainable for everyone.</p>
                    </div>
                </div>
                </div>


                <div className='CardHolder-Row'>
                    <div className='Product-Card Product-Card3'>
                        <Link to='/product/gesture'>
                        <div className='CardImage CardImage3'>
                        </div>
                        </Link>
                        <div className='Card-TextBox'>
                            <p className='Card-Logo'>Starck</p>
                            <Link to='/product/gesture'>
                            <p className='Card-Title'>Gesture</p>
                            </Link>
                            <p className='Card-Text'>Inspired by the movement of the human body, Gesture is the first office chair designed to support our interactions with today's technologies. Gesture is created for the way we work today.</p>
                        </div>
                    </div>

                    <div className='Product-Card Product-Card4'>
                        <Link to='/product/leap'>
                        <div className='CardImage CardImage4'>
                        </div>
                        </Link>
                        <div className='Card-TextBox'>
                            <p className='Card-Logo'>Starck</p>
                            <Link to='/product/leap'>
                            <p className='Card-Title'>Leap</p>
                            </Link>
                            <p className='Card-Text'>Leap is a desk chair that provides a high performance, ergonomic solution for any office.</p>
                        </div>
                    </div>
                </div>

                <div className='CardHolder-Row'>
                    <div className='Product-Card Product-Card5'>
                        <div className='CardImage CardImage5'>

                        </div>
                        <div className='Card-TextBox'>
                            <p className='Card-Logo'>Starck</p>
                            <p className='Card-Title'>COBI</p>
                            <p className='Card-Text'>The cobi office chair was designed to foster collaboration and promote movement.</p>
                        </div>
                    </div>

                    <div className='Product-Card Product-Card6'>
                        <div className='CardImage CardImage6'>

                        </div>
                        <div className='Card-TextBox'>
                            <p className='Card-Logo'>Starck</p>
                            <p className='Card-Title'>AMIA</p>
                            <p className='Card-Text'>Amia is a hardworking, versatile ergonomic office chair that adds an element of sophistication to any workspace.</p>
                        </div>
                    </div>
                </div>

                

                

               

            </div>
        </div>
    )
}
