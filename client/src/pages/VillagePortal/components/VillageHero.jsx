import { Link } from "react-router-dom";
import {
  MapPin,
  ArrowRight,
  Building2,
  Landmark,
} from "lucide-react";

const VillageHero = ({
  village,
  profile,
}) => {
  const heroImage =
    profile?.heroImage?.url ||
    village?.coverImage ||
    "https://placehold.co/1600x600";

  const title =
    profile?.heroTitle ||
    village?.name?.en ||
    "Village";

  const subtitle =
    profile?.heroSubtitle ||
    "CSIR Smart Village";

  return (
    <>
      <section className="relative h-[520px]">

        {/* Background */}

        <img
          src={heroImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />

        {/* Content */}

        <div className="relative z-10 max-w-7xl mx-auto h-full px-6">

          <div className="flex items-center h-full">

            <div className="max-w-3xl text-white">

              <span className="inline-flex items-center bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm mb-6">

                CSIR Smart Village

              </span>

              <h1 className="text-5xl font-bold leading-tight">

                {title}

              </h1>

              <h2 className="mt-3 text-2xl text-slate-200">

                {subtitle}

              </h2>

              <div className="flex items-center gap-2 mt-5">

                <MapPin size={18} />

                <span>

                  {village?.district},{" "}
                  {village?.state?.name}

                </span>

              </div>

              <p className="mt-8 text-lg leading-8 text-slate-200">

                {profile?.overview}

              </p>

              <div className="flex gap-4 mt-10">

                <Link
                  to={`/village/${village.slug}`}
                  className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-medium flex items-center gap-2"
                >
                  Explore Village
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to={`/village/${village.slug}/development-plan`}
                  className="border border-white hover:bg-white hover:text-slate-900 transition px-6 py-3 rounded-lg font-medium"
                >
                  Development Plan
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Quick Info */}

      <section className="bg-white shadow-sm border-b">

        <div className="max-w-7xl mx-auto px-6 py-6 grid md:grid-cols-4 gap-6">

          <div>

            <p className="text-sm text-slate-500">

              State

            </p>

            <p className="font-semibold">

              {village?.state?.name}

            </p>

          </div>

          <div>

            <p className="text-sm text-slate-500">

              District

            </p>

            <p className="font-semibold">

              {village?.district}

            </p>

          </div>

          <div>

            <p className="text-sm text-slate-500">

              Block

            </p>

            <p className="font-semibold">

              {village?.block}

            </p>

          </div>

          <div>

            <p className="text-sm text-slate-500">

              Gram Panchayat

            </p>

            <p className="font-semibold">

              {village?.gramPanchayat}

            </p>

          </div>

        </div>

      </section>
    </>
  );
};

export default VillageHero;