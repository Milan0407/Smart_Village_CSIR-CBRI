import { Building2, MapPin } from "lucide-react";

import {
  getFacilityMarkerStyle,
  normalizeFacilityCategory,
  villageMarkerStyle,
} from "./markerStyles";

const Legend = ({
  facilityCount = 0,
  facilities = [],
}) => {
  const shownCategories = [
    ...new Set(
      facilities.map((facility) =>
        normalizeFacilityCategory(
          facility.category
        )
      )
    ),
  ];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Map Legend
        </h3>

        <p className="mt-1 text-sm text-slate-600">
          Understand what each marker on the map represents.
        </p>
      </div>

      <div className="space-y-4">
        {/* Village Marker */}
        <div className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${villageMarkerStyle.bg}`}
          >
            <MapPin
              size={20}
              className={villageMarkerStyle.text}
            />
          </div>

          <div>
            <p className="font-medium text-slate-800">
              Village Location
            </p>
            <p className="text-sm text-slate-500">
              Main location of the selected village.
            </p>
          </div>
        </div>

        {shownCategories.map((category) => {
          const style =
            getFacilityMarkerStyle(category);

          return (
            <div
              key={category}
              className="flex items-center gap-3"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${style.bg}`}
              >
                <Building2
                  size={20}
                  className={style.text}
                />
              </div>

              <div>
                <p className="font-medium text-slate-800">
                  {style.label}
                </p>
                <p className="text-sm text-slate-500">
                  Nearby facility marker.
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 border-t border-slate-200 pt-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-600">
            Total Facilities
          </span>

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
            {facilityCount}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Legend;
