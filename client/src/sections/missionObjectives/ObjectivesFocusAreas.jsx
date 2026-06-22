const ObjectivesFocusAreas = ({
  data,
}) => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <span
            className="
              text-blue-600
              uppercase
              tracking-widest
              font-semibold
            "
          >
            Focus Areas
          </span>

          <h2
            className="
              text-4xl
              font-bold
              mt-3
            "
          >
            {data?.heading}
          </h2>

        </div>

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {data?.items?.map(
            (
              item,
              index
            ) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-2xl
                  p-8
                  shadow-sm
                  hover:shadow-xl
                  transition
                "
              >
                <div
                  className="
                    text-5xl
                    font-bold
                    text-blue-100
                    mb-4
                  "
                >
                  {String(
                    index + 1
                  ).padStart(2, "0")}
                </div>

                <h3
                  className="
                    text-xl
                    font-bold
                    text-slate-900
                    mb-3
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-slate-600
                  "
                >
                  {item.description}
                </p>

              </div>
            )
          )}
        </div>

      </div>

    </section>
  );
};

export default ObjectivesFocusAreas;