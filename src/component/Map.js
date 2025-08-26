import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import './map.css';

const Map = () => {
    const position = [41.725234, 13.342061];
    return (
        <div className='mapDiv'>
            <MapContainer className='mapContainer' center={position} zoom={16}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='© OpenStreetMap contributors'
                />
                <Marker position={position} />
            </MapContainer>
        </div>
    );
};

export default Map;
