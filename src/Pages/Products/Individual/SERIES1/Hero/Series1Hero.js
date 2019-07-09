import React from 'react';
import './Series1Hero.scss';

export default function Series1Hero() {
    return (
        <div className='Series1Hero'>
            <div className='Series1Hero-Wrapper'>

                <div className='Series1Hero-Image'>
                    <div className='Series1Hero-WhiteBox'>
                        
                        <div className='Series1Hero-WhiteBox-Top'>
                            <p className='Series1Hero-WhiteBox-Title'>Design Resources</p>
                        </div>

                        <div className='Series1Hero-WhiteBox-TextWrap'>
                                <p className='Series1Hero-WhiteBox-Text'>Starck Series 1 office chair delivers on what’s important — performance, style and choice. It retains everything that’s valued in a chair, while making it attainable for everyone.</p>
                        </div>

                        <div className='Series1Hero-WhiteBox-Button'>
                            <p className='Series1Hero-WhiteBox-ButtonText'>View Resources</p>
                        </div>
                    </div>
                </div>

                <div className='Series1Hero-Mobile-TextBox'>
                    <p className='Series1Hero-Mobile-Title'>Design Resources</p>
                    <p className='Series1Hero-Mobile-Text'>Starck Series 1 office chair delivers on what’s important — performance, style and choice. It retains everything that’s valued in a chair, while making it attainable for everyone.</p>
                </div>

            </div>
        </div>
    )
}
