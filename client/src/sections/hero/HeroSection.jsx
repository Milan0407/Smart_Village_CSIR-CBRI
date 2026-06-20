import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSection = ({
  data = {},
}) => {
  const {
    heading =
      "Smart Village Management Portal",

    subHeading =
      "Empowering Rural Communities Through Technology and Sustainable Development",

    buttonText =
      "Explore Villages",

    buttonLink =
      "/villages",

    backgroundImage,

    heroImages = [],
  } = data;

  return (
    <section
      className="
        relative
        w-full
        h-[550px]
        overflow-hidden
      "
    >
      {heroImages.length > 0 ? (

        <Swiper
          modules={[
            Autoplay,
            Pagination,
            Navigation,
          ]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
          className="
            absolute
            inset-0
            w-full
            h-full
          "
        >
          {heroImages.map(
            (image) => (
              <SwiperSlide
                key={image._id}
              >
                <img
                  src={image.url}
                  alt={
                    image.originalName
                  }
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />
              </SwiperSlide>
            )
          )}
        </Swiper>

      ) : backgroundImage ? (

        <img
          src={backgroundImage}
          alt="Hero"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />

      ) : null}

      {/* Dark Overlay */}
      <div
  className="
    absolute
    inset-0
    bg-black/45
    z-10
    pointer-events-none
  "
/>

      {/* Content Card */}
      <div
  className="
    absolute
    inset-0
    z-20
    flex
    items-center
    pointer-events-none
  "
>
        <div
          className="
            max-w-7xl
            mx-auto
            w-full
            px-6
          "
        >
          <div
  className="
    max-w-xl
    bg-black/20
    rounded-2xl
    p-8
    text-white
    shadow-xl
  "
>
            <p
              className="
                uppercase
                tracking-[0.25em]
                text-blue-200
                text-sm
                mb-4
              "
            >
              CSIR-CBRI Roorkee
            </p>

            <h1
              className="
                text-4xl
                text-4xl md:text-5xl
                font-bold
                leading-tight
                mb-6
              "
            >
              {heading}
            </h1>

            <p
              className="
                text-lg
                md:text-xl
                text-slate-100
                mb-8
              "
            >
              {subHeading}
            </p>

            <a
              href={buttonLink}
              className="
                inline-flex
                items-center
                px-6
                py-3
                bg-white
                text-blue-900
                font-semibold
                rounded-lg
                hover:bg-slate-100
                transition
              "
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;