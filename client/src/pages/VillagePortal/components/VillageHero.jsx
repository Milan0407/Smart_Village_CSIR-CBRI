import { MapPin } from "lucide-react";

const VillageHero = ({ village }) => {
  return (
    <section className="relative overflow-hidden rounded-3xl">

      <div
        className="
          h-[360px]
          bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')]
          bg-cover
          bg-center
        "
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex flex-col justify-center px-10 text-white">
          <p className="uppercase tracking-[3px] text-sm text-white/80">
            Smart Village Initiative
          </p>

          <h1 className="text-5xl font-bold mt-3">
            {village.name}
          </h1>

          <div className="flex items-center gap-2 mt-4 text-lg">
            <MapPin size={18} />

            <span>
              {village.district}, {village.state}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillageHero;