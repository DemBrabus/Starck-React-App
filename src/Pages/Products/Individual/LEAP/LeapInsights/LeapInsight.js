import React, { Component } from 'react';
import './LeapInsight.scss';

export default class LeapInsight extends Component {
    constructor(props){
        super(props)
        this.state = {
            ActiveTab: 'spine',
        }
    }

        render() {
        const ToggleWhoWeAre = () => {
            this.setState({ActiveTab: 'spine'});
        }

        const ToggleOurHeritage = () => {
            this.setState({ActiveTab: 'lowerBack'});
        }

        const ToggleOurValues = () => {
            this.setState({ActiveTab: 'posture'});
        }



         let Card1Classes = 'AboutTabs-Card AboutTabs-Card1';
        if(this.state.ActiveTab === 'spine'){
            Card1Classes = 'AboutTabs-Card AboutTabs-Card1 AboutTabs-CardActive';
        }

        let Card2Classes = 'AboutTabs-Card AboutTabs-Card2';
        if(this.state.ActiveTab === 'lowerBack'){
            Card2Classes = 'AboutTabs-Card AboutTabs-Card2 AboutTabs-CardActive';
        }

        let Card3Classes = 'AboutTabs-Card AboutTabs-Card3';
        if(this.state.ActiveTab === 'posture'){
            Card3Classes = 'AboutTabs-Card AboutTabs-Card3 AboutTabs-CardActive';
        }

        

        let Tab1Classes = 'AboutTabs-TabText';
        if(this.state.ActiveTab === 'spine'){
            Tab1Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
        }

        let Tab2Classes = 'AboutTabs-TabText';
        if(this.state.ActiveTab === 'lowerBack'){
            Tab2Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
        }

        let Tab3Classes = 'AboutTabs-TabText';
        if(this.state.ActiveTab === 'posture'){
            Tab3Classes = 'AboutTabs-TabText AboutTabs-TabTextActive';
        }

        




        return (
            <div className='LeapInsights'>

                <div className='AboutTabs-Wrapper'>

                <p className='AboutTabs-Title'>Insights</p>

                <div className='LeapInsightsTabs-Tabs'>
                    <div className='LeapInsightsTabs-Tab AboutTabs-Tab1' onClick={ToggleWhoWeAre}>
                        <p className={Tab1Classes}>Spine</p>
                    </div>
                    <div className='LeapInsightsTabs-Tab AboutTabs-Tab2' onClick={ToggleOurHeritage}>
                        <p className={Tab2Classes}>Lower Back</p>
                    </div>
                    <div className='LeapInsightsTabs-Tab AboutTabs-Tab3' onClick={ToggleOurValues}>
                        <p className={Tab3Classes}>Posture</p>
                    </div>
                    
                </div>

                <div className='AboutTabs-CardContainer'>
                    <div className={Card1Classes}>
                        

                        <div className='AboutTabs-TextBox'>
                            <p className='LeapInsightsTabs-TextBoxTitle'>The spine doesn’t move as a single unit.</p>
                            <p className='LeapInsightsTabs-TextBoxText'>When you recline, your upper spine moves backward and your lower spine arches forward.</p>

                            <p className='LeapInsightsTabs-TextBoxTitle'>Each individual’s spine motion is unique.</p>
                            <p className='LeapInsightsTabs-TextBoxText'>Even for people of identical size, age, and gender, each spine moves differently.</p>
                        </div>

                        <div className='AboutTabs-Image LeapInsightsTabs-Image1'></div>

                        
                    </div>

                    <div className={Card2Classes}>

                        <div className='AboutTabs-TextBox'>

                            
                            <p className='AboutTabs-TextBoxText'>Your lower back requires firm, constant support while your upper back requires more support as you recline.</p>

                        </div>

                        <div className='AboutTabs-Image LeapInsightsTabs-Image2'></div>
                        
                    </div>

                    <div className={Card3Classes}>
                        
                        <div className='AboutTabs-TextBox'>
                            <p className='AboutTabs-TextBoxText'>Vision and reach impact your posture. When you recline in traditional chairs, the distance between you and your work can increase, which in turn can strain your eyes, arms and neck.</p>
                        </div>

                        <div className='AboutTabs-Image LeapInsightsTabs-Image3'></div>
                        
                    </div>

                </div>

            </div>

            </div>
        )
    }
}
