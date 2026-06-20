import { Link } from "react-router-dom";

const AboutQuickLinks = ({
  data,
}) => {
  return (
    <section className="py-24 bg-white">

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
            Quick Access
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
            md:grid-cols-3
            gap-8
          "
        >
          {data?.links?.map(
            (
              item,
              index
            ) => (
              <Link
                key={index}
                to={item.path}
                className="
                  bg-slate-50
                  rounded-2xl
                  p-8
                  text-center
                  hover:shadow-xl
                  transition
                  hover:-translate-y-2
                "
              >
                <div className="text-5xl mb-5">

                  {index === 0 &&
                    "🎯"}

                  {index === 1 &&
                    "👨‍💼"}

                  {index === 2 &&
                    "🏛️"}

                </div>

                <h3
                  className="
                    text-xl
                    font-bold
                    text-slate-900
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-slate-600
                    mt-3
                  "
                >
                  {item.description}
                </p>

                <div
                  className="
                    mt-5
                    text-blue-600
                    font-semibold
                  "
                >
                  View Details →
                </div>

              </Link>
            )
          )}
        </div>

      </div>

    </section>
  );
};

export default AboutQuickLinks;