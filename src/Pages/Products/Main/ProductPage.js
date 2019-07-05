import React from 'react';
import './ProductPage.scss';
import ProductPageIntro from './MainProductPageComps/Intro/ProductPageIntro';
import ProductPageContainer from './MainProductPageComps/Container/ProductPageContainer';

export default function ProductPage() {
    return (
        <div className='ProductPage'>
            <div className='ProductPage-Wrapper'>
                <div className='ProductPage-TitleBlock'>
                    <p className='ProductPage-Title'>Our Chairs</p>
                </div>

                <ProductPageIntro />
                <ProductPageContainer />



            </div>
        </div>
    )
}
