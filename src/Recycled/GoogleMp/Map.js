import React from 'react';
import './Map.scss';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';




const WrappedMap = withScriptjs(withGoogleMap(Map));



export default function Map() {
    return (
        <div className='Map'>
            
        </div>
    )
}
