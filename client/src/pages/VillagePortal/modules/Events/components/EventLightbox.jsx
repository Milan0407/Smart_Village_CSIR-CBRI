import { useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const EventLightbox = ({
  images = [],
  currentIndex = 0,
  isOpen,
  onClose,
  onPrevious,
  onNext,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowLeft":
          onPrevious();
          break;

        case "ArrowRight":
          onNext();
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, onPrevious, onNext]);

  if (!isOpen || !images.length) return null;

  const image = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close */}

      <button
        onClick={onClose}
        className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
      >
        <X size={26} />
      </button>

      {/* Previous */}

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-6 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
        >
          <ChevronLeft size={34} />
        </button>
      )}

      {/* Image */}

      <div
        className="mx-20 max-h-[90vh] max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.url}
          alt={image.caption || "Gallery"}
          className="max-h-[80vh] w-auto rounded-xl object-contain shadow-2xl"
        />

        {image.caption && (
          <p className="mt-4 text-center text-white/90">
            {image.caption}
          </p>
        )}

        <p className="mt-2 text-center text-sm text-white/70">
          {currentIndex + 1} / {images.length}
        </p>
      </div>

      {/* Next */}

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-6 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
        >
          <ChevronRight size={34} />
        </button>
      )}
    </div>
  );
};

export default EventLightbox;