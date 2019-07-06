import React from 'react';
import './ResearchTrending.scss';

export default function ResearchTrending() {
    return (
        <div className='ResearchTrending'>
            <div className='ResearchTrending-Wrapper'>

                <p className='ResearchTrending-Title'>Trending</p>

                <div className='ResearchTrending-Card'>
                    <div className='ResearchTrending-CardImage ResearchTrending-CardImage1'></div>
                    <div className='ResearchTrending-CardTextBox'>
                        <p className='ResearchTrending-CardCategory'>Workplace</p>
                        <p className='ResearchTrending-CardTitle'>Driving Culture Change at NameLogo HQ</p>
                    </div>
                </div>

                <div className='ResearchTrending-Card'>
                    <div className='ResearchTrending-CardImage ResearchTrending-CardImage2'></div>
                    <div className='ResearchTrending-CardTextBox'>
                        <p className='ResearchTrending-CardCategory'>Active Learning</p>
                        <p className='ResearchTrending-CardTitle'>Active Learning Center Grant Launches Fifth Cycle</p>
                    </div>
                </div>

                <div className='ResearchTrending-Card'>
                    <div className='ResearchTrending-CardImage ResearchTrending-CardImage3'></div>
                    <div className='ResearchTrending-CardTextBox'>
                        <p className='ResearchTrending-CardCategory'>Well being</p>
                        <p className='ResearchTrending-CardTitle'>New Office</p>
                    </div>
                </div>
                
                <div className='ResearchTrending-Card'>
                    <div className='ResearchTrending-CardImage ResearchTrending-CardImage4'></div>
                    <div className='ResearchTrending-CardTextBox'>
                        <p className='ResearchTrending-CardCategory'>Workplace</p>
                        <p className='ResearchTrending-CardTitle'>Starck and Microsoft: Bridge the Creative Gap</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
