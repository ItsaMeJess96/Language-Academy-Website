/* componente que renderiza mapa com a localização, 
A localização têm caráter puramente ilustrativo e foi incorporada para enriquecer a experiência do projeto */

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function MapContainer () {
    // tamanho do mapa
    const mapStyle = {
        height: '300px',
        width: '300px'
    }
    // definir centro do mapa
    const defaultCenter = {
        lat: 38.72974260954039,
        lng: -9.153522421883666,
    }

    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap zoom={14} center={defaultCenter} mapContainerStyle={mapStyle}>
                <Marker position={defaultCenter} key='marker'/>
            </GoogleMap>
        </LoadScript>
    )
}

export default MapContainer;
