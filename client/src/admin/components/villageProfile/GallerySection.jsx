export default function GallerySection({
  formData,
  media,
  setFormData,
}) {
  const imageMedia = media.filter(
    (item) => item.resourceType === "image"
  );

  const addImage = () => {
    setFormData((prev) => ({
      ...prev,
      galleryImages: [
        ...prev.galleryImages,
        "",
      ],
    }));
  };

  const updateImage = (
    index,
    value
  ) => {
    const updated = [...formData.galleryImages];

    updated[index] = value;

    setFormData((prev) => ({
      ...prev,
      galleryImages: updated,
    }));
  };

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      galleryImages:
        prev.galleryImages.filter(
          (_, i) => i !== index
        ),
    }));
  };

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Gallery
        </h2>

        <button
          type="button"
          onClick={addImage}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          + Add Image
        </button>
      </div>

      {formData.galleryImages.length === 0 ? (
        <p className="text-sm text-gray-500">
          No gallery images selected.
        </p>
      ) : (
        <div className="space-y-4">
          {formData.galleryImages.map(
            (imageId, index) => (
              <div
                key={index}
                className="flex items-center gap-4"
              >
                <select
                  value={imageId}
                  onChange={(e) =>
                    updateImage(
                      index,
                      e.target.value
                    )
                  }
                  className="flex-1 rounded border px-3 py-2"
                >
                  <option value="">
                    Select Image
                  </option>

                  {imageMedia.map((item) => (
                    <option
                      key={item._id}
                      value={item._id}
                    >
                      {item.originalName}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  onClick={() =>
                    removeImage(index)
                  }
                  className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}