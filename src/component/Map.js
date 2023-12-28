import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, } from 'react-leaflet';

import './map.css'

const Map = () => {
    return (
        <div className='mapDiv'>
            <MapContainer className='mapContainer' center={[41.725234, 13.342061]} zoom={16} style={{ height: '400px', width: '400px' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='© OpenStreetMap contributors'
                />
                <Marker position={[51.505, -0.09]}>

                </Marker>
            </MapContainer>


        </div>


    );
};

export default Map;