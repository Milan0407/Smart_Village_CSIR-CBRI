import {
  useEffect,
  useState,
} from "react";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  getPublicVideos,
} from "../../services/video.service";

const VideoSection = () => {
  const [videos, setVideos] =
    useState([]);

  useEffect(() => {
    loadVideos();
  }, []);

const loadVideos = async () => {
  try {
    const data =
      await getPublicVideos();

    console.log(
      "VIDEOS LOADED",
      data
    );

    setVideos(data);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">

          <p
            className="
              text-blue-600
              uppercase
              tracking-widest
            "
          >
            Smart Village Media
          </p>

          <h2
            className="
              text-4xl
              font-bold
              text-slate-900
              mt-3
            "
          >
            Videos & Documentaries
          </h2>

          <p
            className="
              mt-4
              text-slate-600
              max-w-3xl
              mx-auto
            "
          >
            Explore CSIR Smart Village
            initiatives, success stories,
            technology demonstrations,
            and rural transformation
            journeys.
          </p>

        </div>

        <Swiper
  modules={[
    Autoplay,
    Navigation,
    Pagination,
  ]}
  observer={true}
  observeParents={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  loop={videos.length > 3}
  navigation={true}
  pagination={{
    clickable: true,
  }}
  spaceBetween={24}
  breakpoints={{
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
>

          {videos.map(
            (video) => (
              <SwiperSlide
                key={video._id}
              >

                <div
                  className="
                    bg-white
                    rounded-2xl
                    overflow-hidden
                    shadow-lg
                    hover:shadow-2xl
                    transition
                    duration-300
                    cursor-pointer
                    h-full
                  "
                >

                 <a
  href={video.youtubeUrl}
  target="_blank"
  rel="noreferrer"
  className="relative block overflow-hidden"
>

                    <img
                      src={
                        video.thumbnailUrl
                      }
                      alt={
                        video.title
                      }
                      className="
                        w-full
                        h-44
                        object-cover
                        transition-transform
                        duration-500
                        hover:scale-110
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        bg-black/30
                      "
                    >
                      <div
                        className="
                          w-12
                          h-12
                          rounded-full
                          bg-white
                          flex
                          items-center
                          justify-center
                          shadow-lg
                          text-blue-600
                          font-bold
                        "
                      >
                        ▶
                      </div>
                    </div>

                  </a>

                  <div className="p-4">

                    <h3
                      className="
                        text-lg
                        font-bold
                        mb-3
                        text-slate-900
                        line-clamp-2
                      "
                    >
                      {video.title}
                    </h3>

                    <p
                      className="
                        text-slate-600
                        line-clamp-2
                        text-sm
                      "
                    >
                      {
                        video.description
                      }
                    </p>

                    <a
                      href={
                        video.youtubeUrl
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-block
                        mt-4
                        text-blue-600
                        font-semibold
                        hover:text-blue-800
                      "
                    >
                      Watch Video →
                    </a>

                  </div>

                </div>

              </SwiperSlide>
            )
          )}

        </Swiper>

      </div>

    </section>
  );
};

export default VideoSection;