import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GallerySection = ({
  images = [],
}) => {
  const [index, setIndex] =
    useState(-1);

  if (!images.length) {
    return (
      <section className="bg-white rounded-xl border shadow-sm p-8">
        <h2 className="text-3xl font-bold mb-2">
          Gallery
        </h2>

        <p className="text-slate-500">
          No images available.
        </p>
      </section>
    );
  }

  return (
    <>
      <section className="bg-white rounded-xl border shadow-sm p-8">

        <div className="mb-8">

          <h2 className="text-3xl font-bold">
            Village Gallery
          </h2>

          <p className="text-slate-500 mt-2">
            Explore photographs of the village.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {images.map((image, i) => (

            <button
              key={image._id || image.publicId || i}
              onClick={() =>
                setIndex(i)
              }
              className="
                overflow-hidden
                rounded-xl
                border
                group
                aspect-square
              "
            >

              <img
                src={image.url}
                alt={
                  image.originalName ||
                  "Village"
                }
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

            </button>

          ))}

        </div>

      </section>

      <Lightbox
        open={index >= 0}
        close={() =>
          setIndex(-1)
        }
        index={index}
        slides={images.map((image) => ({
          src: image.url,
        }))}
      />
    </>
  );
};

export default GallerySection;