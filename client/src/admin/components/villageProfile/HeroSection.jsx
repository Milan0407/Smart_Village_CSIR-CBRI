export default function HeroSection({
  formData,
  villages,
  media,
  handleChange,
}) {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Hero Section
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Village */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Village
          </label>

          <select
            name="village"
            value={formData.village}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2"
            required
          >
            <option value="">
              Select Village
            </option>

            {villages.map((village) => (
              <option
                key={village._id}
                value={village._id}
              >
                {village.name?.en}
              </option>
            ))}
          </select>
        </div>

        {/* Hero Image */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Hero Image
          </label>

          <select
            name="heroImage"
            value={formData.heroImage}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2"
          >
            <option value="">
              Select Image
            </option>

            {media
              .filter(
                (item) =>
                  item.resourceType === "image"
              )
              .map((item) => (
                <option
                  key={item._id}
                  value={item._id}
                >
                  {item.originalName}
                </option>
              ))}
          </select>
        </div>

        {/* Hero Title */}

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Hero Title
          </label>

          <input
            type="text"
            name="heroTitle"
            value={formData.heroTitle}
            onChange={handleChange}
            placeholder="Enter hero title"
            className="w-full rounded-md border px-3 py-2"
            required
          />
        </div>

        {/* Hero Subtitle */}

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Hero Subtitle
          </label>

          <textarea
            rows={3}
            name="heroSubtitle"
            value={formData.heroSubtitle}
            onChange={handleChange}
            placeholder="Enter hero subtitle"
            className="w-full rounded-md border px-3 py-2"
          />
        </div>

        {/* Publish */}

        <div className="flex items-center gap-3">
          <input
            id="isPublished"
            type="checkbox"
            name="isPublished"
            checked={formData.isPublished}
            onChange={handleChange}
          />

          <label
            htmlFor="isPublished"
            className="text-sm font-medium"
          >
            Published
          </label>
        </div>

        {/* Sort Order */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Sort Order
          </label>

          <input
            type="number"
            name="sortOrder"
            value={formData.sortOrder}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2"
          />
        </div>
      </div>
    </div>
  );
}