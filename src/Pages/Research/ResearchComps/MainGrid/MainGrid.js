import React from 'react';
import './MainGrid.scss';

export default function MainGrid({ Card1Status, Card2Status, Card3Status, Card4Status, Card5Status, Card6Status, Card7Status, Card8Status, ToggleCard1, ToggleCard2, ToggleCard3, ToggleCard4, ToggleCard5, ToggleCard6, ToggleCard7, ToggleCard8 }) {



    let Card1Classes = 'Research-CardImage Research-CardImage1';
    if(Card1Status === true){
        Card1Classes = 'Research-CardImage Research-CardImage1 Research-CardActive'
    }

    let Card2Classes = 'Research-CardImage Research-CardImage2';
    if(Card2Status === true){
        Card2Classes = 'Research-CardImage Research-CardImage2 Research-CardActive'
    }

    let Card3Classes = 'Research-CardImage Research-CardImage3';
    if(Card3Status === true){
        Card3Classes = 'Research-CardImage Research-CardImage3 Research-CardActive'
    }

    let Card4Classes = 'Research-CardImage Research-CardImage4';
    if(Card4Status === true){
        Card4Classes = 'Research-CardImage Research-CardImage4 Research-CardActive'
    }

    let Card5Classes = 'Research-CardImage Research-CardImage5';
    if(Card5Status === true){
        Card5Classes = 'Research-CardImage Research-CardImage5 Research-CardActive'
    }

    let Card6Classes = 'Research-CardImage Research-CardImage6';
    if(Card6Status === true){
        Card6Classes = 'Research-CardImage Research-CardImage6 Research-CardActive'
    }

    let Card7Classes = 'Research-CardImage Research-CardImage7';
    if(Card7Status === true){
        Card7Classes = 'Research-CardImage Research-CardImage7 Research-CardActive'
    }

    let Card8Classes = 'Research-CardImage Research-CardImage8';
    if(Card8Status === true){
        Card8Classes = 'Research-CardImage Research-CardImage8 Research-CardActive'
    }



    return (
        <div className='MainGrid'>
            <div className='MainGrid-Wrapper'>

                <div className='MainGrid-Row'>
                    <div className='Research-Card' onMouseEnter={ToggleCard1} onMouseLeave={ToggleCard1}>
                        <div className={Card1Classes}></div>
                        <div className='Research-CardTextBox'>
                            <p className='Research-CardCategory'>Workplace</p>
                            <p className='Research-CardTitle'>Unleashing Team Creativity with NameLogo Flex</p>
                            <p className='Research-CardText'>How the Starck Flex Collection supports the day-to-day activities of a creative team.</p>
                            
                        </div>
                        <div className='Research-Card-Connect'>
                            <div className='Research-Card-ConnectItem'></div>
                            <div className='Research-Card-ConnectItem'></div>
                            <div className='Research-Card-ConnectItem'></div>
                            <div className='Research-Card-ConnectItem'></div>
                        </div>
                        <div className='Research-CardTextCover'></div>
                    </div>
                    <div className='Research-Card' onMouseEnter={ToggleCard2} onMouseLeave={ToggleCard2}>
                        <div className={Card2Classes}></div>
                        <div className='Research-CardTextBox'>
                            <p className='Research-CardCategory'>Workplace</p>
                            <p className='Research-CardTitle'>TED2019: “Bigger Than Us” Takeaways</p>
                            <p className='Research-CardText'>A digital double, tiny rockets, subvocal speech—TED speakers shared new approaches and big ideas about the future of humanity.</p>
                        </div>
                        <div className='Research-Card-Connect'>
                            <div className='Research-Card-ConnectItem'></div>
                            <div className='Research-Card-ConnectItem'></div>
                            <div className='Research-Card-ConnectItem'></div>
                            <div className='Research-Card-ConnectItem'></div>
                        </div>
                        <div className='Research-CardTextCover'></div>
                    </div>
                </div>



                <div className='MainGrid-Row'>
                    <div className='Research-Card' onMouseEnter={ToggleCard3} onMouseLeave={ToggleCard3}>
                        <div className={Card3Classes}></div>
                        <div className='Research-CardTextBox'>
                            <p className='Research-CardCategory'>Creativity</p>
                            <p className='Research-CardTitle'>The Future by the Future</p>
                            <p className='Research-CardText'>Twenty-three students present their ideas of what the future of work looks like to them.</p>
                        </div>
                        <div className='Research-Card-Connect'>
                            <div className='Research-Card-ConnectItem'></div>
                            <div className='Research-Card-ConnectItem'></div>
                            <div className='Research-Card-ConnectItem'></div>
                            <div className='Research-Card-ConnectItem'></div>
                        </div>
                        <div className='Research-CardTextCover'></div>
                    </div>
                    <div className='Research-Card' onMouseEnter={ToggleCard4} onMouseLeave={ToggleCard4}>
                        <div className={Card4Classes}></div>
                        <div className='Research-CardTextBox'>
                            <p className='Research-CardCategory'>Agile</p>
                            <p className='Research-CardTitle'>Top Six Podcasts of 2018</p>
                            <p className='Research-CardText'>We’re counting down the most popular 360 Real Time Podcasts of the year.</p>
                        </div>
                        <div className='Research-Card-Connect'>
                            <div className='Research-Card-ConnectItem'></div>
                            <div className='Research-Card-ConnectItem'></div>
                            <div className='Research-Card-ConnectItem'></div>
                            <div className='Research-Card-ConnectItem'></div>
                        </div>
                        <div className='Research-CardTextCover'></div>
                    </div>
                </div>



                <div className='MainGrid-Row'>
                    <div className='Research-Card' onMouseEnter={ToggleCard5} onMouseLeave={ToggleCard5}>
                        <div className={Card5Classes}></div>
                        <div className='Research-CardTextBox'>
                            <p className='Research-CardCategory'>Workplace</p>
                            <p className='Research-CardTitle'>TED-Inspired SILQ Winner Tells Stories with Music</p>
                            <p className='Research-CardText'>Spotify’s Angie Romero won a limited-edition TED-inspired SILQ chair. Now, she shares with us how she puts herself in a creative state of mind.</p>
                        </div>
                        <div className='Research-Card-Connect'>
                            <div className='Research-Card-ConnectItem'></div>
                            <div className='Research-Card-ConnectItem'></div>
                            <div className='Research-Card-ConnectItem'></div>
                            <div className='Research-Card-ConnectItem'></div>
                        </div>
                        <div className='Research-CardTextCover'></div>
                    </div>
                    <div className='Research-Card' onMouseEnter={ToggleCard6} onMouseLeave={ToggleCard6}>
                        <div className={Card6Classes}></div>
                        <div className='Research-CardTextBox'>
                            <p className='Research-CardCategory'>Creativity</p>
                            <p className='Research-CardTitle'>Design Thinking and Its Role in the Creative Process</p>
                            <p className='Research-CardText'>Thinking like a designer can transform how we develop products, services, processes and even strategy.</p>
                        </div>
                        <div className='Research-Card-Connect'>
                            <div className='Research-Card-ConnectItem'></div>
                            <div className='Research-Card-ConnectItem'></div>
                            <div className='Research-Card-ConnectItem'></div>
                            <div className='Research-Card-ConnectItem'></div>
                        </div>
                        <div className='Research-CardTextCover'></div>
                    </div>
                </div>

                

                <div className='MainGrid-Row'>
                    <div className='Research-Card' onMouseEnter={ToggleCard7} onMouseLeave={ToggleCard7}>
                        <div className={Card7Classes}></div>
                        <div className='Research-CardTextBox'>
                            <p className='Research-CardCategory'>Design Q + A</p>
                            <p className='Research-CardTitle'>Design is Beauty. Beauty is Democracy.</p>
                            <p className='Research-CardText'>Known as The Chairman, Italian designer Odo Fioravanti shares his design philosophy and explains how Cavatina brings a human touch to the workplace.</p>
                        </div>
                        <div className='Research-Card-Connect'>
                            <div className='Research-Card-ConnectItem'></div>
                            <div className='Research-Card-ConnectItem'></div>
                            <div className='Research-Card-ConnectItem'></div>
                            <div className='Research-Card-ConnectItem'></div>
                        </div>
                        <div className='Research-CardTextCover'></div>
                    </div>
                    <div className='Research-Card' onMouseEnter={ToggleCard8} onMouseLeave={ToggleCard8}>
                        <div className={Card8Classes}></div>
                        <div className='Research-CardTextBox'>
                            <p className='Research-CardCategory'>Workplace</p>
                            <p className='Research-CardTitle'>10 Things I Love at Work (and Want at Home)</p>
                            <p className='Research-CardText'>These days the workplace feels a lot more like home and I find myself coveting things at work I’d love to bring home with me.</p>
                        </div>
                        <div className='Research-Card-Connect'>
                            <div className='Research-Card-ConnectItem'></div>
                            <div className='Research-Card-ConnectItem'></div>
                            <div className='Research-Card-ConnectItem'></div>
                            <div className='Research-Card-ConnectItem'></div>
                        </div>
                        <div className='Research-CardTextCover'></div>
                    </div>
                </div>

            </div>
        </div>
    )
}
