import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Autoplay,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const AboutGallery = ({
  data,
}) => {
  return (
    <section className="pt-10 pb-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">



        <Swiper
          modules={[
            Autoplay,
            Pagination,
          ]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },

            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {data?.images?.map(
            (
              image,
              index
            ) => (
              <SwiperSlide
                key={index}
              >
                <div
                  className="
                    rounded-2xl
                    overflow-hidden
                    shadow-lg
                  "
                >
                  <img
                    src={
                      image.imageUrl
                    }
                    alt="Gallery"
                    className="
                      w-full
                      h-[300px]
                      object-cover
                    "
                  />
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>

      </div>

    </section>
  );
};

export default AboutGallery;