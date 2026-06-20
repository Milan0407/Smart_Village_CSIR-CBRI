import { Link }
  from "react-router-dom";

const AboutPreview = ({
  data = {},
}) => {
  const {
    heading =
      "About Smart Village Mission",

    description =
      "Transforming rural communities through innovation, sustainability, and technology-driven development.",

    buttonText =
      "Learn More",

    buttonLink =
      "/about",
  } = data;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <span className="text-blue-700 font-semibold uppercase tracking-wider">
          About
        </span>

        <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-6">
          {heading}
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed mb-10">
          {description}
        </p>

        <Link
          to={buttonLink}
          className="
            inline-flex
            items-center
            justify-center
            px-8
            py-4
            bg-blue-900
            text-white
            rounded-xl
            hover:bg-blue-800
            transition
          "
        >
          {buttonText}
        </Link>

      </div>
    </section>
  );
};

export default AboutPreview;