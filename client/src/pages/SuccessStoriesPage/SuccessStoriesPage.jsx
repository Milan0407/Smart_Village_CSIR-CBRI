import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Link } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import {
  getPublishedSuccessStoryVillages,
} from "../../services/successStory.service";

import {
  getPageBySlug,
} from "../../services/cms.service";
const SuccessStoriesPage = () => {
  const [villages, setVillages] = useState([]);
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadData = async () => {
      try {
        const [
          villagesData,
          successStoriesPage,
        ] = await Promise.all([
          getPublishedSuccessStoryVillages(),
          getPageBySlug("success-stories"),
        ]);

        setVillages(villagesData || []);
        setPageData(successStoriesPage || null);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        // Trigger entrance animations after elements load
        setTimeout(() => setAnimate(true), 50);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, 0);
    }
  }, [loading]);

  const videoVillages = useMemo(() => {
    return villages.filter((village) => {
      const video = village.video;

      if (!video) return false;

      if (
        video.type === "YOUTUBE" &&
        (video.embedUrl || video.url)
      ) {
        return true;
      }

      if (
        video.type === "UPLOAD" &&
        (video.media?.url || video.url)
      ) {
        return true;
      }

      if (
        video.type === "EXTERNAL" &&
        video.url
      ) {
        return true;
      }

      return false;
    });
  }, [villages]);

  // Autoplay effect for the horizontal video slider
  useEffect(() => {
    if (loading || videoVillages.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        const cardWidth = 390; // approx card width + gap
        if (scrollLeft + clientWidth >= scrollWidth - 15) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          sliderRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [loading, videoVillages, isHovered]);

  const heroSection =
    pageData?.sections?.find(
      (section) =>
        section.sectionType ===
        "SUCCESS_STORIES_HERO"
    );

  const heroEyebrow =
    heroSection?.subtitle ||
    "CSIR Smart Village Mission";

  const heroTitle =
    heroSection?.title ||
    "Success Stories";

  const heroDescription =
    heroSection?.content?.description ||
    "Discover how innovation, science, community participation, and sustainable development initiatives are transforming villages under the CSIR Smart Village Mission.";

  const heroImage =
    heroSection?.content?.backgroundImage ||
    heroSection?.content?.heroImage?.url ||
    "";

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    const scrollAmount = 390;

    sliderRef.current.scrollBy({
      left:
        direction === "left"
          ? -scrollAmount
          : scrollAmount,
      behavior: "smooth",
    });
  };

  if (loading) {
    return <SuccessStoriesSkeleton />;
  }

  return (
    <MainLayout>
      <div className="bg-slate-50/50 min-h-screen">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden min-h-[420px] md:min-h-[480px] flex items-center bg-slate-900">
          {heroImage ? (
            <>
              <img
                src={heroImage}
                alt={heroTitle}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/45" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-900" />
          )}

          <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-24 text-white w-full">
            <div className={`max-w-4xl transition-all duration-700 ease-out transform ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1 w-8 bg-blue-400 rounded-full"></span>
                <p className="uppercase tracking-[0.22em] text-xs md:text-sm text-blue-200 font-bold">
                  {heroEyebrow}
                </p>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-normal text-white">
                {heroTitle}
              </h1>

              <p className="mt-6 text-base md:text-lg text-slate-200 leading-relaxed max-w-2xl">
                {heroDescription}
              </p>
            </div>
          </div>
        </section>

        {/* VIDEO SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10">
            <div className="max-w-3xl">
              <p className="text-xs font-bold tracking-[0.16em] uppercase text-blue-700 mb-2">
                Village Impact Videos
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-normal mt-3">
                Watch transformation stories from participating villages
              </h2>
              <p className="text-slate-600 mt-2 text-sm md:text-base leading-relaxed">
                A quick visual look at how CSIR Smart Village initiatives are improving rural infrastructure, livelihoods and sustainability.
              </p>
            </div>

            {videoVillages.length > 1 && (
              <div className="flex items-center gap-3 shrink-0 self-end">
                <button
                  type="button"
                  onClick={() => scrollSlider("left")}
                  className="group h-11 w-11 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:shadow hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 active:scale-95 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  aria-label="Scroll Left"
                >
                  <svg className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => scrollSlider("right")}
                  className="group h-11 w-11 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:shadow hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 active:scale-95 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  aria-label="Scroll Right"
                >
                  <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {videoVillages.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-12 text-center max-w-lg mx-auto flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">No Video Stories Available</h3>
              <p className="text-sm text-slate-500">Transformative videos from participating villages are under preparation and will be uploaded soon.</p>
            </div>
          ) : (
            <div
              ref={sliderRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth"
            >
              {videoVillages.map((village) => (
                <div
                  key={village._id}
                  className="w-[300px] sm:w-[350px] md:w-[380px] shrink-0 snap-start rounded-xl overflow-hidden border border-slate-200/80 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-video bg-black overflow-hidden relative group/video">
                      {renderVillageVideoPreview(village)}
                    </div>

                    <div className="p-5">
                      <span className="text-[10px] font-bold text-blue-600 tracking-wider uppercase mb-1 block">
                        CSIR Smart Village
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight hover:text-blue-800 transition-colors">
                        {village.name}
                      </h3>

                      <p className="mt-2 text-slate-600 text-sm leading-relaxed line-clamp-3">
                        {village.shortDescription ||
                          "Success stories and impact highlights from this village."}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <Link
                      to={`/success-stories/${village.slug}`}
                      className="group/link inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors outline-none focus-visible:underline"
                    >
                      Explore this village
                      <span className="inline-block transform group-hover/link:translate-x-1 transition-transform duration-200 ml-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* VILLAGE CARDS */}
        <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-bold tracking-[0.16em] uppercase text-blue-700 mb-2">
              Explore Village Success Stories
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-normal mt-3">
              Browse village-specific transformation journeys
            </h2>
            <p className="text-slate-600 mt-2 text-sm md:text-base leading-relaxed">
              Explore initiatives, outcomes and stories emerging from each village under the CSIR Smart Village Mission.
            </p>
          </div>

          {villages.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-12 text-center max-w-lg mx-auto flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">No Villages Registered</h3>
              <p className="text-sm text-slate-500">There are currently no active success stories or villages registered in this portal.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {villages.map((village) => {
                const imageUrl =
                  village.coverImage?.url ||
                  village.bannerImage?.url ||
                  "";

                return (
                  <Link
                    key={village._id}
                    to={`/success-stories/${village.slug}`}
                    className="group flex flex-col h-full justify-between rounded-xl overflow-hidden border border-slate-200/80 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    <div>
                      <div className="relative h-56 bg-slate-100 overflow-hidden">
                        {imageUrl ? (
                          <img
                            src={imageUrl}
                            alt={village.name}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-blue-50 to-slate-150 flex items-center justify-center text-blue-900/20 text-sm">
                            No Cover Image
                          </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                          <span className="text-[10px] font-bold text-blue-300 tracking-wider uppercase mb-1 block">
                            PARTICIPATING VILLAGE
                          </span>
                          <h3 className="text-xl font-bold leading-tight tracking-tight">
                            {village.name}
                          </h3>
                        </div>
                      </div>

                      <div className="p-5">
                        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                          {village.shortDescription ||
                            "Explore success stories, initiatives and outcomes from this village."}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <div className="inline-flex items-center text-sm font-semibold text-blue-700 group-hover:text-blue-900 transition-colors">
                        View stories
                        <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200 ml-1">
                          →
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </MainLayout>
  );
};

/* PULSING SKELETON LOADER FOR A PREMIUM INITIAL LOAD */
const SuccessStoriesSkeleton = () => {
  return (
    <MainLayout>
      <div className="bg-slate-50 min-h-screen">
        {/* HERO SKELETON */}
        <div className="relative min-h-[460px] md:min-h-[520px] bg-slate-900 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full animate-pulse">
            <div className="h-4 w-36 bg-slate-800 rounded mb-4"></div>
            <div className="h-12 w-2/3 bg-slate-800 rounded mb-6"></div>
            <div className="h-4 w-1/2 bg-slate-800 rounded mb-2"></div>
            <div className="h-4 w-1/3 bg-slate-800 rounded"></div>
          </div>
        </div>

        {/* VIDEOS CAROUSEL SKELETON */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="h-4 w-28 bg-slate-200 rounded mb-3 animate-pulse"></div>
          <div className="h-8 w-2/3 bg-slate-200 rounded mb-4 animate-pulse"></div>
          <div className="h-4 w-1/2 bg-slate-200 rounded mb-10 animate-pulse"></div>

          <div className="flex gap-6 overflow-hidden">
            {[1, 2, 3].map((n) => (
              <div key={n} className="w-[300px] sm:w-[350px] md:w-[380px] shrink-0 border border-slate-200/80 rounded-xl bg-white p-5 animate-pulse">
                <div className="aspect-video bg-slate-200 rounded-lg mb-4"></div>
                <div className="h-5 w-2/3 bg-slate-200 rounded mb-3"></div>
                <div className="h-4 w-full bg-slate-200 rounded mb-2"></div>
                <div className="h-4 w-4/5 bg-slate-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* VILLAGES GRID SKELETON */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="h-4 w-32 bg-slate-200 rounded mb-3 animate-pulse"></div>
          <div className="h-8 w-1/2 bg-slate-200 rounded mb-8 animate-pulse"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="border border-slate-200 rounded-xl bg-white overflow-hidden animate-pulse">
                <div className="h-56 bg-slate-200"></div>
                <div className="p-6">
                  <div className="h-5 w-1/2 bg-slate-200 rounded mb-4"></div>
                  <div className="h-4 w-full bg-slate-200 rounded mb-2"></div>
                  <div className="h-4 w-3/4 bg-slate-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

function renderVillageVideoPreview(village) {
  const video = village.video;

  if (!video) {
    return (
      <div className="w-full h-full bg-slate-200" />
    );
  }

  // YOUTUBE
  if (video.type === "YOUTUBE") {
    const embedUrl =
      video.embedUrl ||
      getEmbedUrl(video.url);

    if (!embedUrl) {
      return (
        <div className="w-full h-full bg-slate-200" />
      );
    }

    return (
      <iframe
        src={embedUrl}
        title={village.name}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  // UPLOAD
  if (video.type === "UPLOAD") {
    const uploadedVideoUrl =
      video.media?.url ||
      video.url ||
      "";

    if (!uploadedVideoUrl) {
      return (
        <div className="w-full h-full bg-slate-200" />
      );
    }

    return (
      <video
        controls
        className="w-full h-full object-cover"
      >
        <source src={uploadedVideoUrl} />
        Your browser does not support the video tag.
      </video>
    );
  }

  // EXTERNAL
  if (
    video.type === "EXTERNAL" &&
    video.url
  ) {
    const previewImage =
      village.bannerImage?.url ||
      village.coverImage?.url ||
      "";

    return (
      <div className="relative w-full h-full bg-slate-100 flex items-center justify-center">
        {previewImage ? (
          <img
            src={previewImage}
            alt={village.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : null}

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 text-center px-6">
          <p className="text-white text-lg font-semibold mb-4">
            External Village Video
          </p>

          <a
            href={video.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-5 py-3 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100 transition"
          >
            Watch Video
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-slate-200" />
  );
}

function getEmbedUrl(url = "") {
  if (!url) return "";

  if (url.includes("youtube.com/watch?v=")) {
    const videoId =
      url
        .split("v=")[1]
        ?.split("&")[0];

    return `https://www.youtube.com/embed/${videoId}`;
  }

  if (url.includes("youtube.com/shorts/")) {
    const videoId =
      url
        .split("youtube.com/shorts/")[1]
        ?.split("?")[0];

    return `https://www.youtube.com/embed/${videoId}`;
  }

  if (url.includes("youtu.be/")) {
    const videoId =
      url
        .split("youtu.be/")[1]
        ?.split("?")[0];

    return `https://www.youtube.com/embed/${videoId}`;
  }

  return url;
}

export default SuccessStoriesPage;