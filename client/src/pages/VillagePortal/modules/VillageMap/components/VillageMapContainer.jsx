import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

import FacilityPopup from "./FacilityPopup";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const VillageMapContainer = ({
  villageLocation,
  facilities,
}) => {
const villageCoordinates =
  villageLocation?.village?.location?.coordinates ?? [];

  const center =
    villageCoordinates.length === 2
      ? [
          villageCoordinates[1],
          villageCoordinates[0],
        ]
      : [20.5937, 78.9629];

  const zoom =
    villageLocation?.zoomLevel ?? 14;

  const displayedFacilities =
    facilities ??
    villageLocation?.nearbyFacilities ??
    [];

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-4">
        <h2 className="text-xl font-semibold text-slate-800">
          Village Map
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Explore the village and nearby facilities.
        </p>
      </div>

      <div className="h-[600px] w-full">
        <MapContainer
          center={center}
          zoom={zoom}
          scrollWheelZoom
          className="h-full w-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Village Marker */}
          <Marker
            position={center}
            icon={markerIcon}
          >
            <Popup>
              <div className="space-y-2">
                <h3 className="font-semibold text-slate-800">
                  {villageLocation?.village?.name?.en ||
                    villageLocation?.village?.name}
                </h3>
                  <p className="text-sm">
      Lat: {center[0]}
    </p>

    <p className="text-sm">
      Lng: {center[1]}
      </p>

                {villageLocation?.overview && (
                  <p className="text-sm text-slate-600">
                    {villageLocation.overview}
                  </p>
                )}
              </div>
            </Popup>
          </Marker>

          {/* Nearby Facility Markers */}
          {displayedFacilities.map((facility) => {
            const coordinates =
              facility?.location?.coordinates ?? [];

            if (coordinates.length !== 2) {
              return null;
            }

            return (
              <Marker
                key={facility._id}
                position={[
                  coordinates[1],
                  coordinates[0],
                ]}
                icon={markerIcon}
              >
                <Popup>
                  <FacilityPopup
                    facility={facility}
                  />
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </section>
  );
};

export default VillageMapContainer;