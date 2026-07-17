import { useMemo, useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const GallerySkeleton = () => (
  <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
    <div className="mb-8 space-y-3">
      <div className="h-9 w-56 animate-pulse rounded bg-slate-200" />
      <div className="h-4 w-80 max-w-full animate-pulse rounded bg-slate-200" />
    </div>

    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="aspect-square animate-pulse rounded-xl bg-slate-200"
        />
      ))}
    </div>
  </section>
);

const normalizeGalleryItem = (item, index) => {
  const image = item?.image || item;

  return {
    id: item?._id || image?._id || image?.publicId || index,
    image,
    caption: item?.caption || image?.caption || "",
    sortOrder:
      item?.sortOrder === undefined
        ? index
        : Number(item.sortOrder),
  };
};

const GallerySection = ({
  images = [],
  loading = false,
}) => {
  const [index, setIndex] =
    useState(-1);

  const galleryItems = useMemo(() => {
    return images
      .map(normalizeGalleryItem)
      .filter((item) => item.image?.url || item.image?.secureUrl)
      .sort((a, b) => a.sortOrder - b.sortOrder);
  }, [images]);

  if (loading) {
    return <GallerySkeleton />;
  }

  if (!galleryItems.length) {
    return (
      <section className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center shadow-sm">
        <h2 className="text-3xl font-bold text-slate-950">
          Village Gallery
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-slate-500">
          Gallery images will appear here once they are added from the CMS.
        </p>
      </section>
    );
  }

  return (
    <>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-950">
            Village Gallery
          </h2>

          <p className="mt-2 text-slate-500">
            Explore photographs of the village, activities and local development work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {galleryItems.map((item, itemIndex) => {
            const imageUrl =
              item.image.url || item.image.secureUrl;
            const title =
              item.caption ||
              item.image.originalName ||
              "Village gallery image";

            return (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  setIndex(itemIndex)
                }
                className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-100 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                  <img
                    src={imageUrl}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                {item.caption ? (
                  <div className="border-t border-slate-200 bg-white p-3">
                    <p className="line-clamp-2 text-sm font-medium leading-5 text-slate-700">
                      {item.caption}
                    </p>
                  </div>
                ) : null}
              </button>
            );
          })}
        </div>
      </section>

      <Lightbox
        open={index >= 0}
        close={() =>
          setIndex(-1)
        }
        index={index}
        plugins={[Captions]}
        slides={galleryItems.map((item) => ({
          src: item.image.url || item.image.secureUrl,
          title:
            item.caption ||
            item.image.originalName ||
            "Village gallery image",
          description: item.caption || "",
        }))}
      />
    </>
  );
};

export default GallerySection;
