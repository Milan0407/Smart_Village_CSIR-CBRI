const ObjectivesHero = ({
  data,
}) => {
  return (
    <section
      className="
        py-24
        bg-gradient-to-r
        from-blue-900
        to-blue-700
        text-white
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <h1
          className="
            text-5xl
            font-bold
            mb-6
          "
        >
          {data?.heading}
        </h1>

        <p
          className="
            text-xl
            max-w-3xl
          "
        >
          {data?.subHeading}
        </p>

      </div>
    </section>
  );
};

export default ObjectivesHero;