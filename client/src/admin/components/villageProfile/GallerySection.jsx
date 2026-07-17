const createGalleryItem = (sortOrder = 0) => ({
  image: "",
  caption: "",
  sortOrder,
});

export default function GallerySection({
  formData,
  media,
  setFormData,
}) {
  const imageMedia = media.filter(
    (item) => item.resourceType === "image"
  );

  const mediaById = new Map(
    imageMedia.map((item) => [item._id, item])
  );

  const updateGallery = (galleryImages) => {
    setFormData((prev) => ({
      ...prev,
      galleryImages,
    }));
  };

  const addImage = () => {
    updateGallery([
      ...formData.galleryImages,
      createGalleryItem(formData.galleryImages.length),
    ]);
  };

  const updateImage = (index, key, value) => {
    const updated = formData.galleryImages.map((item, itemIndex) =>
      itemIndex === index
        ? {
            ...item,
            [key]: key === "sortOrder" ? Number(value) : value,
          }
        : item
    );

    updateGallery(updated);
  };

  const removeImage = (index) => {
    updateGallery(
      formData.galleryImages.filter((_, i) => i !== index)
    );
  };

  const moveImage = (index, direction) => {
    const nextIndex = index + direction;

    if (
      nextIndex < 0 ||
      nextIndex >= formData.galleryImages.length
    ) {
      return;
    }

    const updated = [...formData.galleryImages];
    const [item] = updated.splice(index, 1);
    updated.splice(nextIndex, 0, item);

    updateGallery(
      updated.map((galleryItem, itemIndex) => ({
        ...galleryItem,
        sortOrder: itemIndex,
      }))
    );
  };

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            Village Gallery
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Add Cloudinary images with captions and display order.
          </p>
        </div>

        <button
          type="button"
          onClick={addImage}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          + Add Image
        </button>
      </div>

      {formData.galleryImages.length === 0 ? (
        <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
          <p className="text-sm font-medium text-slate-700">
            No gallery images selected.
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Add images to show them on the public Village Information page.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {formData.galleryImages.map((item, index) => {
            const selectedMedia = mediaById.get(item.image);
            const previewUrl =
              selectedMedia?.url || selectedMedia?.secureUrl;

            return (
              <div
                key={`${item.image || "gallery"}-${index}`}
                className="grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 lg:grid-cols-[140px_1fr_auto]"
              >
                <div className="aspect-video overflow-hidden rounded-lg border bg-white">
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt={selectedMedia?.originalName || "Gallery preview"}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xs font-medium text-slate-400">
                      Preview
                    </div>
                  )}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Image
                    </label>

                    <select
                      value={item.image}
                      onChange={(e) =>
                        updateImage(index, "image", e.target.value)
                      }
                      className="w-full rounded border px-3 py-2"
                    >
                      <option value="">
                        Select Image
                      </option>

                      {imageMedia.map((mediaItem) => (
                        <option
                          key={mediaItem._id}
                          value={mediaItem._id}
                        >
                          {mediaItem.originalName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Sort Order
                    </label>

                    <input
                      type="number"
                      value={item.sortOrder}
                      onChange={(e) =>
                        updateImage(index, "sortOrder", e.target.value)
                      }
                      className="w-full rounded border px-3 py-2"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium">
                      Caption
                    </label>

                    <input
                      type="text"
                      value={item.caption}
                      onChange={(e) =>
                        updateImage(index, "caption", e.target.value)
                      }
                      className="w-full rounded border px-3 py-2"
                      placeholder="Short image caption"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 lg:flex-col lg:items-stretch lg:justify-center">
                  <button
                    type="button"
                    onClick={() => moveImage(index, -1)}
                    disabled={index === 0}
                    className="rounded border bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Up
                  </button>

                  <button
                    type="button"
                    onClick={() => moveImage(index, 1)}
                    disabled={index === formData.galleryImages.length - 1}
                    className="rounded border bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Down
                  </button>

                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="rounded bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
