import React from 'react';
import './Dealer.scss';
import Scroll from '../../Recycled/Scroll/Scroll';
import { GoogleMap, withScriptjs, withGoogleMap  } from 'react-google-maps';



function Map(){
    return( 
    
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat: 39.961178, lng: -82.998795}}
                    
        />
    )
    
}


    const WrapperMap = withScriptjs(withGoogleMap(Map));


export default function Dealer() {
    return (
        <div className='Dealer'>
           <div className='Dealer-Wrapper'>

                <div className='Dealer-TitleBlock'>
                    <p className='Dealer-Title'>Find A Dealer</p>
                </div>

                <div className='Dealer-Content'>
                    <div className='Dealer-CardWrap'>
                        <Scroll>


                        <div className='Dealer-Card'>
                            <div className='Dealer-CardLeft'>
                                <p className='Dealer-Card-Title'>Waldners Business Environments</p>

                                <p className='Dealer-Card-Text'>215 Lexington Avenue 9th Floor</p>
                                <p className='Dealer-Card-Text'>New York</p>
                                <p className='Dealer-Card-Text'>10016-6023</p>

                                <p className='Dealer-Card-Text'>Phone: 212 888 9999</p>
                                <p className='Dealer-Card-Text'>Fax: 212 888 9999</p>

                            </div>
                            <div className='Dealer-CardRight'>

                                <p className='Dealer-Card-Text'>Authorized Starck Dealer, GSA</p>
                                <div className='Dealer-Card-Button'>
                                    Get Directions
                                </div>
                            </div>
                        </div>
                        <div className='Dealer-Card'>
                            <div className='Dealer-CardLeft'>
                                <p className='Dealer-Card-Title'>Empire Office Inc.</p>

                                <p className='Dealer-Card-Text'>105 Madison Avenue 15 th Floor</p>
                                <p className='Dealer-Card-Text'>New York</p>
                                <p className='Dealer-Card-Text'>10016-8810</p>

                                <p className='Dealer-Card-Text'>Phone: 212 607 5500</p>
                                <p className='Dealer-Card-Text'>Fax: 212 607 5654</p>

                            </div>
                            <div className='Dealer-CardRight'>

                                <p className='Dealer-Card-Text'>Authorized Starck Dealer, GSA</p>
                                <div className='Dealer-Card-Button'>
                                    Get Directions
                                </div>
                            </div>
                        </div>
                        <div className='Dealer-Card'>
                            <div className='Dealer-CardLeft'>
                                <p className='Dealer-Card-Title'>AFD Contract Furniture Inc.</p>

                                <p className='Dealer-Card-Text'>AFD Contract Furniture Inc.
                                                                810 Seventh Avenue</p>
                                <p className='Dealer-Card-Text'>New York</p>
                                <p className='Dealer-Card-Text'>10019-5818</p>

                                <p className='Dealer-Card-Text'>Phone: 212 721 7100</p>
                                <p className='Dealer-Card-Text'>Fax: 212 721 7175</p>

                            </div>
                            <div className='Dealer-CardRight'>

                                <p className='Dealer-Card-Text'>Authorized Starck Dealer, GSA</p>
                                <div className='Dealer-Card-Button'>
                                    Get Directions
                                </div>
                            </div>
                        </div>
                        <div className='Dealer-Card'>
                            <div className='Dealer-CardLeft'>
                                <p className='Dealer-Card-Title'>Concepts Office Furnishings</p>

                                <p className='Dealer-Card-Text'>280 North Midland Avenue Building J </p>
                                <p className='Dealer-Card-Text'>Unit #204</p>
                                <p className='Dealer-Card-Text'>Saddle Brook</p>
                                <p className='Dealer-Card-Text'>07663-5708</p>

                                <p className='Dealer-Card-Text'>Phone: 201 727 9110</p>
                                <p className='Dealer-Card-Text'>Fax: 201 727 9112</p>

                            </div>
                            <div className='Dealer-CardRight'>

                                <p className='Dealer-Card-Text'>Authorized Starck Dealer, GSA</p>
                                <div className='Dealer-Card-Button'>
                                    Get Directions
                                </div>
                            </div>
                        </div>
                        <div className='Dealer-Card'>
                            <div className='Dealer-CardLeft'>
                                <p className='Dealer-Card-Title'>Waldners Business Environments</p>

                                <p className='Dealer-Card-Text'>215 Lexington Avenue 9th Floor</p>
                                <p className='Dealer-Card-Text'>New York</p>
                                <p className='Dealer-Card-Text'>10016-6023</p>

                                <p className='Dealer-Card-Text'>Phone: 212 888 9999</p>
                                <p className='Dealer-Card-Text'>Fax: 212 888 9999</p>

                            </div>
                            <div className='Dealer-CardRight'>

                                <p className='Dealer-Card-Text'>Authorized Starck Dealer, GSA</p>
                                <div className='Dealer-Card-Button'>
                                    Get Directions
                                </div>
                            </div>
                        </div>
                        <div className='Dealer-Card'>
                            <div className='Dealer-CardLeft'>
                                <p className='Dealer-Card-Title'>Empire Office Inc.</p>

                                <p className='Dealer-Card-Text'>105 Madison Avenue 15 th Floor</p>
                                <p className='Dealer-Card-Text'>New York</p>
                                <p className='Dealer-Card-Text'>10016-8810</p>

                                <p className='Dealer-Card-Text'>Phone: 212 607 5500</p>
                                <p className='Dealer-Card-Text'>Fax: 212 607 5654</p>

                            </div>
                            <div className='Dealer-CardRight'>

                                <p className='Dealer-Card-Text'>Authorized Starck Dealer, GSA</p>
                                <div className='Dealer-Card-Button'>
                                    Get Directions
                                </div>
                            </div>
                        </div>
                        <div className='Dealer-Card'>
                            <div className='Dealer-CardLeft'>
                                <p className='Dealer-Card-Title'>AFD Contract Furniture Inc.</p>

                                <p className='Dealer-Card-Text'>AFD Contract Furniture Inc.
                                                                810 Seventh Avenue</p>
                                <p className='Dealer-Card-Text'>New York</p>
                                <p className='Dealer-Card-Text'>10019-5818</p>

                                <p className='Dealer-Card-Text'>Phone: 212 721 7100</p>
                                <p className='Dealer-Card-Text'>Fax: 212 721 7175</p>

                            </div>
                            <div className='Dealer-CardRight'>

                                <p className='Dealer-Card-Text'>Authorized Starck Dealer, GSA</p>
                                <div className='Dealer-Card-Button'>
                                    Get Directions
                                </div>
                            </div>
                        </div>
                        <div className='Dealer-Card'>
                            <div className='Dealer-CardLeft'>
                                <p className='Dealer-Card-Title'>Concepts Office Furnishings</p>

                                <p className='Dealer-Card-Text'>280 North Midland Avenue Building J </p>
                                <p className='Dealer-Card-Text'>Unit #204</p>
                                <p className='Dealer-Card-Text'>Saddle Brook</p>
                                <p className='Dealer-Card-Text'>07663-5708</p>

                                <p className='Dealer-Card-Text'>Phone: 201 727 9110</p>
                                <p className='Dealer-Card-Text'>Fax: 201 727 9112</p>

                            </div>
                            <div className='Dealer-CardRight'>

                                <p className='Dealer-Card-Text'>Authorized Starck Dealer, GSA</p>
                                <div className='Dealer-Card-Button'>
                                    Get Directions
                                </div>
                            </div>
                        </div>
                        </Scroll>
                    </div>

                    <div className='Dealer-Map'>
                       <WrapperMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCs0Ihg3HbUUw-Ub47aH9uqTPdwpPPHQGc`}
                       loadingElement={<div style={{height: "100%"}} />}
                       containerElement={<div style={{height: "100%"}} />}
                       mapElement={<div style={{height: "100%"}} />}
                       />
                    </div>
                </div>

           </div>
        </div>
    )
}
