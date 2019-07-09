import React from 'react';
import './ProductPageMenu.scss';
import { Link } from 'react-router-dom';

export default function ProductPageMenu() {
    return (
        <div className='ProductPageMenu'>
            <p className='ProductPageMenu-Title'>
                Starck 2019 Line
            </p>
            <div className='ProductPageMenu-Links'>
                <div className='ProductPageMenu-Category'>
                    <p className='ProductPageMenu-LinksTitle'>Premium</p>
                    <Link to='/silq-product-page'>
                        <p className='ProductPageMenu-Link'>SILQ</p>
                    </Link>
                </div>
               


                <div className='ProductPageMenu-Category'>
                    <p className='ProductPageMenu-LinksTitle'>Class</p>
                    <Link to='/series1-product-page'>
                        <p className='ProductPageMenu-Link'>Series 1</p>
                    </Link>
                    <Link to='/'>
                        <p className='ProductPageMenu-Link'>Gesture</p>
                    </Link>
                    <Link to='/'>
                        <p className='ProductPageMenu-Link'>Leap</p>
                    </Link>
                </div>
               


                <div className='ProductPageMenu-Category'>
                    <p className='ProductPageMenu-LinksTitle'>Utility</p>    
                    <Link to='/'>
                        <p className='ProductPageMenu-Link'>Amia</p>
                    </Link>
                    <Link to='/'>
                        <p className='ProductPageMenu-Link'>Cobi</p>
                    </Link>
                </div>
               
            </div>
            <p className='ProductPageMenu-Hook'>When it comes to office seating, our chairs deliver ergonomic performance with a contemporary design. From desk to conference, we have the seating solutions for your space.</p>
        </div>
    )
}
