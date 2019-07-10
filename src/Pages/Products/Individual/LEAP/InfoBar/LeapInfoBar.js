import React, { Component } from 'react';
import './LeapInfoBar.scss';

export default class LeapInfoBar extends Component {
        constructor(props){
        super(props)
        this.state = {
            ImagesTab: false,
            MaterialsTab: false,
            DocumentsTab: false,
        }
    }



    render() {

        const ToggleImagesTab = () => {
          this.setState((prevState) => {
            return {ImagesTab: !prevState.ImagesTab}
          });
        }
        const CloseImagesTab = () => {
        this.setState({ImagesTab: false});
        }

            const ToggleMaterialsTab = () => {
            this.setState((prevState) => {
                return {MaterialsTab: !prevState.MaterialsTab}
            });
            }
            const CloseMaterialsTab = () => {
            this.setState({MaterialsTab: false});
            }

        const ToggleDocumentsTab = () => {
          this.setState((prevState) => {
            return {DocumentsTab: !prevState.DocumentsTab}
          });
        }
        const CloseDocumentsTab = () => {
        this.setState({DocumentsTab: false});
        }
       
    console.log(this.state.InfoActiveTab);


        let ImagesCardClasses = 'InfoBar-ImagesCard';
        if(this.state.ImagesTab === true){
            ImagesCardClasses = 'InfoBar-ImagesCard ActiveCard';
        }

        let MaterialsCardClasses = 'InfoBar-MaterialsCard';
        if(this.state.MaterialsTab === true){
            MaterialsCardClasses = 'InfoBar-MaterialsCard ActiveCard';
        }

        let DocumentsCardClasses = 'InfoBar-DocumentsCard';
        if(this.state.DocumentsTab === true){
            DocumentsCardClasses = 'InfoBar-DocumentsCard ActiveCard';
        }

        let ImagesTab = 'InfoBar-Text';
        if(this.state.ImagesTab === true){
            ImagesTab = 'InfoBar-Text ActiveTab';
        }

        let MaterialsTab = 'InfoBar-Text';
        if(this.state.MaterialsTab === true){
            MaterialsTab = 'InfoBar-Text ActiveTab';
        }

        let DocumentsTab = 'InfoBar-Text';
        if(this.state.DocumentsTab === true){
            DocumentsTab = 'InfoBar-Text ActiveTab';
        }


        const ImagesTabClick = () => {
            ToggleImagesTab();
            CloseMaterialsTab();
            CloseDocumentsTab();
        }

        const MaterialsTabClick = () => {
            CloseImagesTab();
            ToggleMaterialsTab();
            CloseDocumentsTab();
        }

        const DocumentsTabClick = () => {
            CloseImagesTab();
            CloseMaterialsTab();
            ToggleDocumentsTab();
        }


        return (
            <div className='LeapInfoBar'>


                <div className='InfoBar-Menu'>
                    <div className='InfoBar-Wrapper'>
                        <div className='InfoBar-Item' onClick={ImagesTabClick}>
                            <div className='InfoBar-Icon'></div>
                            <p className={ImagesTab}>Images</p>
                            <div className='InfoBar-Arrow'></div>
                        </div>

                        <div className='InfoBar-Item' onClick={MaterialsTabClick}>
                            <div className='InfoBar-Icon'></div>
                            <p className={MaterialsTab}>Materials</p>
                            <div className='InfoBar-Arrow'></div>
                        </div>

                        <div className='InfoBar-Item' onClick={DocumentsTabClick}>
                            <div className='InfoBar-Icon'></div>
                            <p className={DocumentsTab}>Documents</p>
                            <div className='InfoBar-Arrow'></div>
                        </div>
                    </div>
                </div>
                
                <div className={ImagesCardClasses}>
                    <div className='InfoBar-ImagesCard-Wrapper'>
                        <div className='InfoBar-ImagesCard-Row'>
                            <div className='InfoBar-ImagesCard-Image LeapInfoBar-ImagesCard-Image1'></div>
                            <div className='InfoBar-ImagesCard-Image LeapInfoBar-ImagesCard-Image2'></div>
                            <div className='InfoBar-ImagesCard-Image LeapInfoBar-ImagesCard-Image3'></div>
                            <div className='InfoBar-ImagesCard-Image LeapInfoBar-ImagesCard-Image4'></div>
                        </div>
                        <div className='InfoBar-ImagesCard-Row'>
                            <div className='InfoBar-ImagesCard-Image LeapInfoBar-ImagesCard-Image5'></div>
                            <div className='InfoBar-ImagesCard-Image LeapInfoBar-ImagesCard-Image6'></div>
                            <div className='InfoBar-ImagesCard-Image LeapInfoBar-ImagesCard-Image7'></div>
                            <div className='InfoBar-ImagesCard-Image LeapInfoBar-ImagesCard-Image8'></div>
                        </div>
                    </div>
                </div>

                <div className={MaterialsCardClasses}>
                    <div className='InfoBar-MaterialsCard-Wrapper'>
                        <div className='InfoBar-MaterialsCard-Row'>
                            <div className='InfoBar-MaterialsCard-Image LeapInfoBar-MaterialsCard-Image1'>
                                <div className='InfoBar-MaterialsCard-Image-TextBox'>
                                    <p className='InfoBar-MaterialsCard-Image-TextBox-Text'>
                                        5G51 Sable
                                    </p>
                                </div>
                            </div>
                            <div className='InfoBar-MaterialsCard-Image LeapInfoBar-MaterialsCard-Image2'>
                                <div className='InfoBar-MaterialsCard-Image-TextBox'>
                                    <p className='InfoBar-MaterialsCard-Image-TextBox-Text'>
                                        5G64 Alpine
                                    </p>
                                </div>
                            </div>
                            <div className='InfoBar-MaterialsCard-Image LeapInfoBar-MaterialsCard-Image3'>
                                <div className='InfoBar-MaterialsCard-Image-TextBox'>
                                    <p className='InfoBar-MaterialsCard-Image-TextBox-Text'>
                                        5G10 Grape
                                    </p>
                                </div>
                            </div>
                            <div className='InfoBar-MaterialsCard-Image LeapInfoBar-MaterialsCard-Image4'>
                                <div className='InfoBar-MaterialsCard-Image-TextBox'>
                                    <p className='InfoBar-MaterialsCard-Image-TextBox-Text'>
                                        5G05 Burgundy
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='InfoBar-MaterialsCard-Row'>
                            <div className='InfoBar-MaterialsCard-Image LeapInfoBar-MaterialsCard-Image5'>
                                <div className='InfoBar-MaterialsCard-Image-TextBox'>
                                    <p className='InfoBar-MaterialsCard-Image-TextBox-Text'>
                                        5G08 Navy
                                    </p>
                                </div>
                            </div>
                            <div className='InfoBar-MaterialsCard-Image LeapInfoBar-MaterialsCard-Image6'>
                                <div className='InfoBar-MaterialsCard-Image-TextBox'>
                                    <p className='InfoBar-MaterialsCard-Image-TextBox-Text'>
                                        5G61 Cyan
                                    </p>
                                </div>
                            </div>
                            <div className='InfoBar-MaterialsCard-Image LeapInfoBar-MaterialsCard-Image7'>
                                <div className='InfoBar-MaterialsCard-Image-TextBox'>
                                    <p className='InfoBar-MaterialsCard-Image-TextBox-Text'>
                                        5G62 Atlantic
                                    </p>
                                </div>
                            </div>
                            <div className='InfoBar-MaterialsCard-Image LeapInfoBar-MaterialsCard-Image8'>
                                <div className='InfoBar-MaterialsCard-Image-TextBox'>
                                    <p className='InfoBar-MaterialsCard-Image-TextBox-Text'>
                                        5G08 New Black
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={DocumentsCardClasses}>
                    <div className='InfoBar-DocumentsCard-Wrapper'>
                        <div className='InfoBar-DocumentsCard-Row'>
                            <div className='InfoBar-DocumentsCard-Image LeapInfoBar-DocumentsCard-Image1'>
                                <div className='InfoBar-MaterialsCard-Image-TextBox'>
                                    <p className='InfoBar-MaterialsCard-Image-TextBox-Text'>
                                        Download Chair Specs PDF
                                    </p>
                                </div>
                            </div>
                            <div className='InfoBar-DocumentsCard-Image InfoBar-DocumentsCard-Image2'>

                            </div>
                            <div className='InfoBar-DocumentsCard-Image InfoBar-DocumentsCard-Image3'>

                            </div>
                            <div className='InfoBar-DocumentsCard-Image InfoBar-DocumentsCard-Image4'>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}