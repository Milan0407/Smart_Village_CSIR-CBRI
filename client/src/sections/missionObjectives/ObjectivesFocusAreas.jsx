const ObjectivesFocusAreas = ({
  data,
}) => {
  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2
            className="
              text-4xl
              font-bold
              text-slate-900
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
                  p-8
                  rounded-2xl
                  shadow-sm
                  hover:shadow-lg
                  transition
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold
                    text-blue-700
                    mb-4
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-slate-600
                  "
                >
                  {
                    item.description
                  }
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