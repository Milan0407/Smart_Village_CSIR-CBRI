const AboutHero = ({
  data,
}) => {
  return (
    <section className="pt-8 pb-20 bg-white">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <span
          className="
            text-blue-600
            uppercase
            tracking-widest
            font-semibold
          "
        >
          About Us
        </span>

        <h1
          className="
            text-4xl
            md:text-5xl
            font-bold
            text-slate-900
            mt-4
          "
        >
          {data?.heading}
        </h1>

        <p
          className="
            text-lg
            text-slate-600
            mt-6
            max-w-3xl
            mx-auto
            leading-relaxed
          "
        >
          {data?.description}
        </p>

        <div
          className="
            w-32
            h-1
            bg-blue-600
            mx-auto
            mt-8
            rounded-full
          "
        />

      </div>

    </section>
  );
};

export default AboutHero;