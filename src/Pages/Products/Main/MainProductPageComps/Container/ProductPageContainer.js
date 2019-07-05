import React from 'react';
import './ProductPageContainer.scss';
import ProductPageMenu from '../Menu/ProductPageMenu';
import CardHolder from '../CardHolder/CardHolder';

export default function ProductPageContainer() {
    return (
        <div className='ProductPageContainer'>
            <div className='ProductPageContainer-Wrapper'>

                <ProductPageMenu />
                <CardHolder />

            </div>
        </div>
    )
}
