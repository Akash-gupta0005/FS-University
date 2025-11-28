import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MapBox = () => {
    const mapContainerRef = useRef();
    const mapRef = useRef();

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiaXRzLWFrYXNoODA1NSIsImEiOiJjbWFxaWduOGUwMGQ5Mm5zZXBxaTBiNjZ4In0.qlKlD-6KKJVJl4oYn0mNUg';

        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            center: [78.559802,27.120254], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });
        new mapboxgl.Marker({ color: 'black', rotation: 45 })
            .setLngLat([78.559802,27.120254])
            .addTo(mapRef.current);
    });

    return (
        <div className="container-fluid" style={{ height: '720px' }} ref={mapContainerRef}>

        </div>
    );
};

export default MapBox;