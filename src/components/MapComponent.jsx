import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapComponent = ({ city, lat, lng }) => {
  let position;
  const formattedPosition = `${lat.toFixed(2)}, ${lng.toFixed(2)}`;
  if (lat == 0 && lng == 0) {
    return <h1 className="InitialDataFetching">fetching data...</h1>;
  } else {
    position = [lat, lng];
  }

  return (
    <MapContainer
      className="MapContainer"
      center={position}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Tooltip>{formattedPosition}</Tooltip>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
