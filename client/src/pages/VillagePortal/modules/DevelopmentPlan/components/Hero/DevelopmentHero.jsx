import { FolderKanban } from "lucide-react";

const DevelopmentHero = ({ village }) => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 text-white">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]" />

      <div className="relative px-8 py-12 lg:px-12 lg:py-16">

        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur">

            <FolderKanban size={18} />

            Development Projects

          </div>

          <h1 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight">

            Development Plans for{" "}

            <span className="text-yellow-300">

              {village?.name?.en || village?.name}

            </span>

          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">

            Explore ongoing, completed and upcoming development
            initiatives that are transforming the village through
            sustainable infrastructure, agriculture, education,
            healthcare and digital innovation.

          </p>

        </div>

      </div>

    </section>
  );
};

export default DevelopmentHero;