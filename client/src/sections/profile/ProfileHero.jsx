const ProfileHero = ({
  data,
}) => {
  return (
    <section className="py-20 bg-slate-900 text-white">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <span
          className="
            uppercase
            tracking-widest
            text-blue-300
            font-semibold
          "
        >
          Leadership Message
        </span>

        <h1
          className="
            text-4xl
            md:text-5xl
            font-bold
            mt-4
          "
        >
          {data?.heading}
        </h1>

        <p
          className="
            text-lg
            text-slate-300
            mt-6
            max-w-3xl
            mx-auto
          "
        >
          {data?.subHeading}
        </p>

      </div>

    </section>
  );
};

export default ProfileHero;