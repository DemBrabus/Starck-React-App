import React from 'react';
import './MobileFooter.scss';

export default function MobileFooter({ ToggleFooterTab1, ToggleFooterTab2, ToggleFooterTab3, ToggleFooterTab4, FooterTab1Status, FooterTab2Status, FooterTab3Status, FooterTab4Status,}) {


    let FooterLinks1Classes = 'MobileFooter-TabLinks';
        if(FooterTab1Status === true){
            FooterLinks1Classes = 'MobileFooter-TabLinks MobileFooterLinks-Open'
        }

    let FooterLinks2Classes = 'MobileFooter-TabLinks';
        if(FooterTab2Status === true){
            FooterLinks2Classes = 'MobileFooter-TabLinks MobileFooterLinks-Open'
        }

    let FooterLinks3Classes = 'MobileFooter-TabLinks';
        if(FooterTab3Status === true){
            FooterLinks3Classes = 'MobileFooter-TabLinks MobileFooterLinks-Open'
        }

    let FooterLinks4Classes = 'MobileFooter-TabLinks';
        if(FooterTab4Status === true){
            FooterLinks4Classes = 'MobileFooter-TabLinks MobileFooterLinks-Open'
        }

   


    return (
        <div className='MobileFooter'>

            

            <div className='MobileFooter-Wrapper'>

                <div className='MobileFooter-Tab MobileFooter-Tab1'onClick={ToggleFooterTab1}>
                    <p className='MobileFooter-AdditionSymbol'>+</p>
                    <p className='MobileFooter-TabTitle'>Corporate Information</p>
                </div>
                    <div className={FooterLinks1Classes}>
                        <ul className='MobileFooter-TabLinksList'>
                            <li className='MobileFooter-TabLinksListItem'>Careers</li>
                            <li className='MobileFooter-TabLinksListItem'>Diversity + Inclusion</li>
                            <li className='MobileFooter-TabLinksListItem'>Community Relations</li>
                            <li className='MobileFooter-TabLinksListItem'>Starck Foundation</li>
                            <li className='MobileFooter-TabLinksListItem'>Supplies</li>
                            <li className='MobileFooter-TabLinksListItem'>Supplier Diversity</li>
                            <li className='MobileFooter-TabLinksListItem'>Marketplace</li>
                        </ul>
                    </div>

                <div className='MobileFooter-Tab MobileFooter-Tab1' onClick={ToggleFooterTab2}>
                    <p className='MobileFooter-AdditionSymbol'>+</p>
                    <p className='MobileFooter-TabTitle'>Customer Care</p>
                </div>
                    <div className={FooterLinks2Classes}>
                        <ul className='MobileFooter-TabLinksList'>
                            <li className='MobileFooter-TabLinksListItem'>Site Feedback</li>
                            <li className='MobileFooter-TabLinksListItem'>FAQ's</li>
                            <li className='MobileFooter-TabLinksListItem'>User Manuals</li>
                            <li className='MobileFooter-TabLinksListItem'>Warranty</li>
                            <li className='MobileFooter-TabLinksListItem'>Tech Support</li>
                            <li className='MobileFooter-TabLinksListItem'>Notifications</li>
                            <li className='MobileFooter-TabLinksListItem'>Rocky Recalls</li>
                        </ul>
                    </div>

                <div className='MobileFooter-Tab MobileFooter-Tab1' onClick={ToggleFooterTab3}>
                    <p className='MobileFooter-AdditionSymbol'>+</p>
                    <p className='MobileFooter-TabTitle'>Legal Notice</p>
                </div>
                    <div className={FooterLinks3Classes}>
                        <ul className='MobileFooter-TabLinksList'>
                            <li className='MobileFooter-TabLinksListItem'>Terms of Use</li>
                            <li className='MobileFooter-TabLinksListItem'>Privacy Policy</li>
                            <li className='MobileFooter-TabLinksListItem'>Supply Chain</li>
                        </ul>
                    </div>

                <div className='MobileFooter-Tab MobileFooter-Tab1' onClick={ToggleFooterTab4}>
                    <p className='MobileFooter-AdditionSymbol'>+</p>
                    <p className='MobileFooter-TabTitle'>Connect With Us</p>
                </div>
                    <div className={FooterLinks4Classes}>
                        <ul className='MobileFooter-TabLinksList'>
                            <li className='MobileFooter-TabLinksListItem'>FaceBook</li>
                            <li className='MobileFooter-TabLinksListItem'>Instagram</li>
                            <li className='MobileFooter-TabLinksListItem'>Pintrest</li>
                            <li className='MobileFooter-TabLinksListItem'>LinkedIn</li>
                        </ul>
                    </div>

                <div className='MobileFooter-Tab MobileFooter-Tab1'>
                    <p className='MobileFooter-AdditionSymbol'>+</p>
                    <p className='MobileFooter-TabTitle'>Contact Us</p>
                </div>

            </div>

        </div>
    )
}
