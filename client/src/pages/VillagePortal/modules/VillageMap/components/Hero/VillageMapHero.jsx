import { Link } from "react-router-dom";
import { MapPin, Navigation, Building2 } from "lucide-react";
import SmartTextRenderer
  from "../../../../../../components/common/SmartTextRenderer";

const VillageMapHero = ({ villageLocation }) => {
  const village = villageLocation?.village;

  const villageName =
    village?.name?.en ||
    village?.name ||
    "Village";

  const overview =
    villageLocation?.overview ||
    "Explore the village location, nearby facilities, and navigate using the interactive map.";

  const facilitiesCount =
    villageLocation?.nearbyFacilities?.length ?? 0;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-700 text-white">
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="mb-5 flex flex-wrap items-center gap-2 text-sm text-emerald-100">
          <Link
            to="/"
            className="transition hover:text-white"
          >
            Home
          </Link>

          <span>/</span>

          <span>{villageName}</span>

          <span>/</span>

          <span className="font-medium text-white">
            Village Map
          </span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">

          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
              <MapPin size={16} />
              Interactive Village Map
            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              {villageName}
            </h1>

            <SmartTextRenderer
              text={overview}
              className="mt-5 max-w-3xl text-emerald-50 [&_*]:text-emerald-50"
            />

            {villageLocation?.googleMapsLink && (
              <a
                href={villageLocation.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-emerald-700 shadow transition hover:bg-emerald-50"
              >
                <Navigation size={18} />
                Open in Google Maps
              </a>
            )}
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white/20 p-3">
                <Building2 size={26} />
              </div>

              <div>
                <p className="text-sm text-emerald-100">
                  Nearby Facilities
                </p>

                <h2 className="text-3xl font-bold">
                  {facilitiesCount}
                </h2>
              </div>
            </div>

            <div className="mt-6 border-t border-white/20 pt-5 space-y-3 text-sm text-emerald-50">

              <div className="flex justify-between">
                <span>Village</span>

                <span className="font-medium">
                  {villageName}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Map Status</span>

                <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold">
                  Active
                </span>
              </div>

              <div className="flex justify-between">
                <span>Published</span>

                <span>
                  {villageLocation?.isPublished
                    ? "Yes"
                    : "No"}
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VillageMapHero;
