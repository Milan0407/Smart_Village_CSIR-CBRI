import {
  MapPin,
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
    village?.name?.en ||
    profile?.heroTitle ||
    "Village";

  return (
    <>
      <section className="relative min-h-[420px] overflow-hidden bg-slate-950 sm:min-h-[460px] lg:min-h-[500px]">

        {/* Background */}

        <img
          src={heroImage}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/18 via-transparent to-slate-950/35" />

        {/* Content */}

        <div className="relative z-10 mx-auto min-h-[420px] max-w-7xl px-6 py-6 sm:min-h-[460px] lg:min-h-[500px]">

          <div className="absolute right-6 top-6 rounded-full border border-white/25 bg-slate-950/45 px-4 py-2 text-white shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold">

              <MapPin size={18} />

              <span>

                {[village?.district, village?.state?.name]
                  .filter(Boolean)
                  .join(", ")}

              </span>

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
