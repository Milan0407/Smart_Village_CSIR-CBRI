import {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Building2,
  MapPin,
  Phone,
} from "lucide-react";

import DirectionsButton from "./DirectionsButton";
import { getFacilityMarkerStyle } from "./markerStyles";

const FacilityCard = ({
  facility,
  onSelect,
}) => {
  const descriptionRef = useRef(null);
  const [isDescriptionOpen, setIsDescriptionOpen] =
    useState(false);
  const [canExpandDescription, setCanExpandDescription] =
    useState(false);
  const [descriptionHeight, setDescriptionHeight] =
    useState(0);

  useEffect(() => {
    const description = descriptionRef.current;

    if (!description) {
      setCanExpandDescription(false);
      return undefined;
    }

    const measureDescription = () => {
      setDescriptionHeight(
        description.scrollHeight
      );

      if (isDescriptionOpen) {
        return;
      }

      setCanExpandDescription(
        description.scrollHeight >
          description.clientHeight + 1
      );
    };

    measureDescription();
    window.addEventListener(
      "resize",
      measureDescription
    );

    return () =>
      window.removeEventListener(
        "resize",
        measureDescription
      );
  }, [facility?.description, isDescriptionOpen]);

  if (!facility) return null;

  const markerStyle =
    getFacilityMarkerStyle(facility.category);

  const coordinates =
    facility?.location?.coordinates || [];

  const hasCoordinates =
    coordinates.length === 2;

  const latitude = hasCoordinates
    ? coordinates[1]
    : null;

  const longitude = hasCoordinates
    ? coordinates[0]
    : null;


  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`rounded-lg p-3 ${markerStyle.bg} ${markerStyle.text}`}
          >
            <Building2 size={22} />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800">
              {facility.name}
            </h3>

            {facility.category && (
              <span
                className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${markerStyle.bg} ${markerStyle.text}`}
              >
                {facility.category}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      {facility.description && (
        <div className="mt-4">
          <div
            className="overflow-hidden transition-all duration-300 ease-out"
            style={{
              maxHeight: isDescriptionOpen
                ? `${descriptionHeight}px`
                : "4.5rem",
            }}
          >
            <p
              ref={descriptionRef}
              className="overflow-hidden text-sm leading-6 text-slate-600"
              style={{
                display: isDescriptionOpen
                  ? "block"
                  : "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp:
                  isDescriptionOpen ? "unset" : 3,
              }}
            >
              {facility.description}
            </p>
          </div>

          {canExpandDescription && (
            <button
              type="button"
              onClick={() =>
                setIsDescriptionOpen(
                  (current) => !current
                )
              }
              className="mt-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-900"
              aria-expanded={isDescriptionOpen}
            >
              {isDescriptionOpen
                ? "Read Less"
                : "Read More"}
            </button>
          )}
        </div>
      )}

      {/* Address */}
      {facility.address && (
        <div className="mt-5 flex items-start gap-2 text-sm text-slate-700">
          <MapPin
            size={18}
            className="mt-0.5 text-emerald-600"
          />

          <span>{facility.address}</span>
        </div>
      )}

      {/* Contact */}
      {facility.contactNumber && (
        <div className="mt-3 flex items-center gap-2 text-sm text-slate-700">
          <Phone
            size={18}
            className="text-emerald-600"
          />

          <span>{facility.contactNumber}</span>
        </div>
      )}

      {/* Footer */}
      <div className="mt-6 flex flex-wrap gap-3">

        {typeof onSelect === "function" && (
          <button
            onClick={() => onSelect(facility)}
            className="rounded-lg border border-emerald-600 px-4 py-2 text-sm font-medium text-emerald-600 transition hover:bg-emerald-50"
          >
            View on Map
          </button>
        )}

         {hasCoordinates && (
  <DirectionsButton
    latitude={latitude}
    longitude={longitude}
  >
    Directions
  </DirectionsButton>
)}

      </div>
    </div>
  );
};

export default FacilityCard;
