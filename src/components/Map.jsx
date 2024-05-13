/* eslint-disable react/prop-types */
import "leaflet/dist/leaflet.css";
import { MapContainer,TileLayer } from "react-leaflet"
import Pin from "./Pin";


const Map = ({gyms}) => {
  return (
    <MapContainer
    center={[51.5072,-0.1276]}
    zoom={12} 
    scrollWheelZoom={false}
    className="map ">
        <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {gyms.map(item => (
          <Pin key={item.id} item={item} />
        ))}
    </MapContainer>
  )
}

export default Map