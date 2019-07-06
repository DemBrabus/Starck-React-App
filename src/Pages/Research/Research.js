import React, { Component } from 'react';
import './Research.scss';
import ResearchContainer from './ResearchComps/Container/ResearchContainer';

export default class Research extends Component {
        constructor(props){
            super(props); 
            this.state = {
                Card1: false,
                Card2: false,
                Card3: false,
                Card4: false,
                Card5: false,
                Card6: false,
                Card7: false,
                Card8: false,
            }
        }

            Card1Active = () => {
                this.setState((prevState) => {
                    return {Card1: !prevState.Card1}
                });
            }
            Card2Active = () => {
                this.setState((prevState) => {
                    return {Card2: !prevState.Card2}
                });
            }
            Card3Active = () => {
                this.setState((prevState) => {
                    return {Card3: !prevState.Card3}
                });
            }
            Card4Active = () => {
                this.setState((prevState) => {
                    return {Card4: !prevState.Card4}
                });
            }
            Card5Active = () => {
                this.setState((prevState) => {
                    return {Card5: !prevState.Card5}
                });
            }
            Card6Active = () => {
                this.setState((prevState) => {
                    return {Card6: !prevState.Card6}
                });
            }
            Card7Active = () => {
                this.setState((prevState) => {
                    return {Card7: !prevState.Card7}
                });
            }
            Card8Active = () => {
                this.setState((prevState) => {
                    return {Card8: !prevState.Card8}
                });
            }



    render() {
        return (
            <div className='Research'>
                <div className='Research-Wrapper'>

                    <div className='Research-TitleBlock'>
                        <p className='Research-Title'>360 Research</p>
                    </div>

                    <ResearchContainer  Card1Status={this.state.Card1}
                                        Card2Status={this.state.Card2}
                                        Card3Status={this.state.Card3}
                                        Card4Status={this.state.Card4}
                                        Card5Status={this.state.Card5}
                                        Card6Status={this.state.Card6}
                                        Card7Status={this.state.Card7}
                                        Card8Status={this.state.Card8}
                                        
                                        ToggleCard1={this.Card1Active}
                                        ToggleCard2={this.Card2Active}
                                        ToggleCard3={this.Card3Active}
                                        ToggleCard4={this.Card4Active}
                                        ToggleCard5={this.Card5Active}
                                        ToggleCard6={this.Card6Active}
                                        ToggleCard7={this.Card7Active}
                                        ToggleCard8={this.Card8Active}

                                        />

                </div>
            </div>
        )
    }
}

















 