const ObjectivesHero = ({
  data,
}) => {
  return (
<section
  className="
    relative
    min-h-[450px]
    md:min-h-[500px]
    flex
    items-center
    justify-center
    text-white
    overflow-hidden
  "
  style={{
    backgroundImage: data?.backgroundImage
      ? `url(${data.backgroundImage})`
      : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black/55" />

  <div
    className="
      relative
      z-10
      max-w-5xl
      mx-auto
      px-6
      text-center
    "
  >
    <span
      className="
        uppercase
        tracking-[4px]
        text-blue-300
        font-semibold
      "
    >
      CSIR SMART VILLAGE MISSION
    </span>

    <h1
      className="
        text-4xl
        md:text-6xl
        font-bold
        mt-4
      "
    >
      {data?.heading}
    </h1>

    <p
      className="
        text-lg
        md:text-xl
        text-slate-200
        mt-6
        max-w-3xl
        mx-auto
        leading-relaxed
      "
    >
      {data?.subHeading}
    </p>
  </div>
</section>
  );
};

export default ObjectivesHero;