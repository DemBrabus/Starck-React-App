import React from 'react';
import './LandingResearch.scss';

export default function LandingResearch() {
    return (
        <div className='LandingResearch'>
            <div className='LandingResearch-Content'>
                <p className='LandingResearch-Title'>Our Research</p>
                <div className='LandingResearch-CardWrapper'>
                    <div className='LandingResearch-Card1'>
                        <div className='LandingResearch-Image1'></div>
                        <div className='LandingResearch-TextBox'>
                            <p className='LandingResearch-CardTitle'>Planing For Performance</p>
                            <p className='LandingResearch-CardText'>Today so much of our work happens away from the primary workstation. The casual atmosphere draws us in, but often these spaces do not support our work.</p>
                            <div className='LandingResearch-CardButton'>
                                <p className='LandingResearch-CardButtonText'>
                                    View Article
                                </p>
                                <div className='LandingResearch-CardButtonIcon'></div>
                            </div>
                        </div>
                    </div>
                    <div className='LandingResearch-Card2'>
                        <div className='LandingResearch-Image2'></div>
                        <div className='LandingResearch-TextBox'>
                            <p className='LandingResearch-CardTitle'>New Work. New Rules</p>
                            <p className='LandingResearch-CardText'>The best workplaces need to be designed to support the collective needs of the team while also nurturing the needs of individuals. So, forget what your coach told you. There is an "I" in "team".</p>
                            <div className='LandingResearch-CardButton'>
                                <p className='LandingResearch-CardButtonText'>
                                    Learn More
                                </p>
                                <div className='LandingResearch-CardButtonIcon'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
