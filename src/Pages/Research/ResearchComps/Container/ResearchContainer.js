import React from 'react';
import './ResearchContainer.scss'
import MainGrid from '../MainGrid/MainGrid';
import ResearchTrending from '../Trending/ResearchTrending';

export default function ResearchContainer({ Card1Status, Card2Status, Card3Status, Card4Status, Card5Status, Card6Status, Card7Status, Card8Status, ToggleCard1, ToggleCard2, ToggleCard3, ToggleCard4, ToggleCard5, ToggleCard6, ToggleCard7, ToggleCard8 }) {



    return (
        <div className='ResearchContainer'>
            <div className='ResearchContainer-Wrapper'>

                <MainGrid ToggleCard1={ToggleCard1}
                            ToggleCard2={ToggleCard2}
                            ToggleCard3={ToggleCard3}
                            ToggleCard4={ToggleCard4}
                            ToggleCard5={ToggleCard5}
                            ToggleCard6={ToggleCard6}
                            ToggleCard7={ToggleCard7}
                            ToggleCard8={ToggleCard8}

                            Card1Status={Card1Status}
                            Card2Status={Card2Status}
                            Card3Status={Card3Status}
                            Card4Status={Card4Status}
                            Card5Status={Card5Status}
                            Card6Status={Card6Status}
                            Card7Status={Card7Status}
                            Card8Status={Card8Status}

                />
                <ResearchTrending />

            </div>
        </div>
    )
}
