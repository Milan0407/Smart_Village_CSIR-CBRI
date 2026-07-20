import { Navigation } from "lucide-react";

const DirectionsButton = ({
  latitude,
  longitude,
  className = "",
  children = "Get Directions",
}) => {
  if (
    latitude === undefined ||
    latitude === null ||
    longitude === undefined ||
    longitude === null
  ) {
    return null;
  }

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  return (
    <a
      href={directionsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-emerald-700 ${className}`}
    >
      <Navigation size={16} />
      {children}
    </a>
  );
};

export default DirectionsButton;