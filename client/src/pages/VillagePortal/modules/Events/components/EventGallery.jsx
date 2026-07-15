import { useState } from "react";
import { ImageIcon } from "lucide-react";

import EventLightbox from "./EventLightbox";

const EventGallery = ({ images = [] }) => {
  const [selectedIndex, setSelectedIndex] =
    useState(0);

  const [isOpen, setIsOpen] =
    useState(false);

  if (!images.length) return null;

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const showPrevious = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <section className="rounded-2xl bg-white p-8 shadow-sm">

        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
            <ImageIcon size={24} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Event Gallery
            </h2>

            <p className="text-slate-500">
              Photos captured during the event.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => openLightbox(index)}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative overflow-hidden">

                <img
                  src={image.url}
                  alt={
                    image.caption ||
                    `Gallery Image ${index + 1}`
                  }
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/40 group-hover:opacity-100">

                  <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">
                    View Image
                  </span>

                </div>

              </div>

              {image.caption && (
                <div className="border-t border-slate-200 bg-white p-4">
                  <p className="text-sm text-slate-600">
                    {image.caption}
                  </p>
                </div>
              )}
            </button>
          ))}

        </div>

      </section>

      <EventLightbox
        images={images}
        currentIndex={selectedIndex}
        isOpen={isOpen}
        onClose={closeLightbox}
        onPrevious={showPrevious}
        onNext={showNext}
      />
    </>
  );
};

export default EventGallery;