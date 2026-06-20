const AboutHistory = ({
  data,
}) => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">

          <span
            className="
              text-blue-600
              uppercase
              tracking-widest
              font-semibold
            "
          >
            Journey
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

        <div className="relative">

          <div
            className="
              absolute
              left-6
              top-0
              bottom-0
              w-1
              bg-blue-200
            "
          />

          <div className="space-y-12">

            {data?.timeline?.map(
              (item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    gap-8
                    items-start
                  "
                >
                  <div
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-blue-600
                      text-white
                      flex
                      items-center
                      justify-center
                      font-bold
                      z-10
                    "
                  >
                    {index + 1}
                  </div>

                  <div
                    className="
                      bg-white
                      rounded-2xl
                      shadow-sm
                      p-6
                      flex-1
                    "
                  >
                    <h3
                      className="
                        text-blue-700
                        font-bold
                        text-xl
                      "
                    >
                      {item.year}
                    </h3>

                    <p
                      className="
                        mt-2
                        font-semibold
                        text-slate-800
                      "
                    >
                      {item.title}
                    </p>

                    <p
                      className="
                        mt-3
                        text-slate-600
                      "
                    >
                      {item.description}
                    </p>

                  </div>

                </div>
              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutHistory;