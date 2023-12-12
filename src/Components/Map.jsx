/* componente que renderiza mapa com a localização, 
A localização têm caráter puramente ilustrativo e foi incorporada para enriquecer a experiência do projeto */

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function MapContainer () {
    // tamanho do mapa
    const mapStyle = {
        height: '400px',
        width: '600px'
    }
    // definir centro do mapa
    const defaultCenter = {
        lat: 38.72974260954039,
        lng: -9.153522421883666,
    }

    return (
        <LoadScript googleMapsApiKey="AIzaSyDwyvgiH-400qeQgWBD5daE2VC34siAPQs">
            <GoogleMap zoom={14} center={defaultCenter} mapContainerStyle={mapStyle}>
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    )
}

export default MapContainer;



// 38.72974260954039, -9.153522421883666
// AIzaSyBuCjayOslvEKH5T74yVawhhU5pEQG8I0s