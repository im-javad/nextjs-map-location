import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { LatLngExpression } from "leaflet";

const Map = () => {
  const starterPosition: LatLngExpression = [35.7001447, 51.3763083];
  const firstPostion: LatLngExpression = [35.7721635, 51.4148872];
  const secondPostion: LatLngExpression = [35.7032943, 51.3418557];
  const thirdPostion: LatLngExpression = [35.7480739, 51.3338092];

  return (
    <MapContainer
      center={starterPosition}
      zoom={11}
      style={{
        height: "500px",
        width: "1000px",
        position: "absolute",
        transform: "translate(-50% , -50%)",
        top: "50%",
        left: "50%",
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={firstPostion}>
        <Popup>
          The first posstion <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={secondPostion}>
        <Popup>
          The second posstion <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={thirdPostion}>
        <Popup>
          The third posstion <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
