const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-28">

        <div className="max-w-3xl">

          <p className="uppercase tracking-widest text-blue-200 mb-4">
            CSIR-CBRI Roorkee
          </p>

          <h1 className="text-6xl font-bold leading-tight mb-6">
            Smart Village Management Portal
          </h1>

          <p className="text-xl text-blue-100 mb-10">
            Empowering rural communities through innovation,
            sustainable development, technology integration,
            and knowledge-driven transformation.
          </p>

          <div className="flex gap-4">

            <a
  href="#villages"
  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-slate-100 transition"
>
  Explore Villages
</a>

            <button className="border border-white px-6 py-3 rounded-lg">
              Learn More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;