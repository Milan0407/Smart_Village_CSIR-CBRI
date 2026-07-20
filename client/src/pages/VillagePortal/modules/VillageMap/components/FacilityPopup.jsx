import { MapPin, Phone } from "lucide-react";

import DirectionsButton from "./DirectionsButton";

const FacilityPopup = ({ facility }) => {
  if (!facility) return null;

  const coordinates = facility?.location?.coordinates || [];

  const hasCoordinates = coordinates.length === 2;

  const latitude = hasCoordinates
    ? coordinates[1]
    : null;

  const longitude = hasCoordinates
    ? coordinates[0]
    : null;

  return (
    <div className="min-w-[220px] max-w-[280px] space-y-3">
      <div>
        <h3 className="text-base font-semibold text-slate-800">
          {facility.name}
        </h3>

        {facility.category && (
          <span className="mt-1 inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
            {facility.category}
          </span>
        )}
      </div>

      {facility.description && (
        <p className="text-sm leading-6 text-slate-600">
          {facility.description}
        </p>
        
      )}
      

      {facility.address && (
        <div className="flex items-start gap-2 text-sm text-slate-700">
          <MapPin
            size={16}
            className="mt-0.5 text-emerald-600"
          />

          <span>{facility.address}</span>
        </div>
      )}

      {facility.contactNumber && (
        <div className="flex items-center gap-2 text-sm text-slate-700">
          <Phone
            size={16}
            className="text-emerald-600"
          />

          <span>{facility.contactNumber}</span>
        </div>
      )}

      {hasCoordinates && (
  <div className="rounded-md bg-slate-100 p-2 text-xs text-slate-600">
    <p>
      <strong>Latitude:</strong> {latitude}
    </p>
    <p>
      <strong>Longitude:</strong> {longitude}
    </p>
  </div>
)}

      {hasCoordinates && (
  <DirectionsButton
    latitude={latitude}
    longitude={longitude}
    className="w-full"
  >
    Get Directions
  </DirectionsButton>
)}

    </div>
  );
};

export default FacilityPopup;