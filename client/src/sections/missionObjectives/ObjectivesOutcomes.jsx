const ObjectivesOutcomes = ({
  data,
}) => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-5xl mx-auto px-6">

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

        <div className="space-y-4">

          {data?.items?.map(
            (
              item,
              index
            ) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-4
                  p-5
                  bg-slate-50
                  rounded-xl
                "
              >
                <div
                  className="
                    w-8
                    h-8
                    rounded-full
                    bg-blue-600
                    text-white
                    flex
                    items-center
                    justify-center
                    font-semibold
                  "
                >
                  ✓
                </div>

                <span
                  className="
                    text-lg
                    text-slate-700
                  "
                >
                  {item}
                </span>

              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
};

export default ObjectivesOutcomes;