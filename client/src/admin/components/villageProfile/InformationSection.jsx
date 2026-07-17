export default function InformationSection({
  formData,
  handleChange,
}) {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          About Village
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Manage the public About Village section.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Heading
          </label>

          <input
            type="text"
            name="aboutHeading"
            value={formData.aboutHeading}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2"
            placeholder="About Village"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Subtitle
          </label>

          <input
            type="text"
            name="aboutSubtitle"
            value={formData.aboutSubtitle}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2"
            placeholder="Enter a short supporting line"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            About Description
          </label>

          <textarea
            name="overview"
            rows={7}
            value={formData.overview}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2"
            placeholder="Describe the village profile, people, priorities and local context"
          />
        </div>
      </div>
    </div>
  );
}
