import React from 'react';
import './PurchaseBar.scss';

export default function PurchaseBar() {
    return (
        <div className='PurchaseBar'>
            <div className='PurchaseBar-Wrapper'>

                <div className='PurchaseBar-TopRow'>
                    <p className='PurchaseBar-Title'>Purchase Options</p>
                    <div className='PurchaseBar-Button'>
                        <p className='PurchaseBar-ButtonText'>Contact Us</p>
                        <div className='PurchaseBar-ButtonIcon'></div>
                    </div>
                </div>
                <div className='PurchaseBar-BottomRow'>

                    <div className='PurchaseBar-Phone'>
                        <div className='PurchaseBar-PhoneIcon'></div>
                        <p className='PurchaseBar-PhoneText'>888 - 753 - 9999</p>
                    </div>

                    <div className='PurchaseBar-Store'>
                        <div className='PurchaseBar-StoreIcon'></div>
                        <p className='PurchaseBar-StoreText'>Starck Store</p>
                    </div>

                    <div className='PurchaseBar-Dealer'>
                        <div className='PurchaseBar-DealerIcon'></div>
                        <p className='PurchaseBar-DealerText'>Find a Dealer</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
