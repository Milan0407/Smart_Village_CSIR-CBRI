import { useEffect, useState } from "react";

import { getAllVillages } from "../../services/village.service";

const defaultValues = {
  village: "",
  overview: "",
  zoomLevel: 14,
  googleMapsLink: "",
  isPublished: true,
};

const normalizeValues = (data = {}) => ({
  ...defaultValues,
  ...data,
  village: data.village?._id ?? data.village ?? "",
  overview: data.overview ?? "",
  zoomLevel: Number(data.zoomLevel ?? 14),
  googleMapsLink: data.googleMapsLink ?? "",
  isPublished: data.isPublished ?? true,
});

const VillageLocationForm = ({
  initialValues,
  onSubmit,
  loading = false,
}) => {
  const [values, setValues] = useState(() =>
    normalizeValues(initialValues)
  );

  const [villages, setVillages] = useState([]);
  const [villagesLoading, setVillagesLoading] =
    useState(true);

  useEffect(() => {
    setValues(normalizeValues(initialValues));
  }, [initialValues]);

  useEffect(() => {
    const loadVillages = async () => {
      try {
        const data = await getAllVillages();
        setVillages(data);
      } catch (error) {
        console.error(error);
        alert("Failed to load villages.");
      } finally {
        setVillagesLoading(false);
      }
    };

    loadVillages();
  }, []);

  const handleChange = (field, value) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit?.({
      ...values,
      zoomLevel: Number(values.zoomLevel),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">
          Village Location
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Configure village map settings.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm font-medium">
              Village
            </label>

            <select
              value={values.village}
              disabled={villagesLoading}
              onChange={(e) =>
                handleChange(
                  "village",
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5"
              required
            >
              <option value="">
                {villagesLoading
                  ? "Loading villages..."
                  : "Select Village"}
              </option>

              {villages.map((village) => (
                <option
                  key={village._id}
                  value={village._id}
                >
                  {village.name?.en ||
                    village.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Zoom Level
            </label>

            <input
              type="number"
              min={1}
              max={20}
              value={values.zoomLevel}
              onChange={(e) =>
                handleChange(
                  "zoomLevel",
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium">
              Google Maps Link
            </label>

            <input
              type="url"
              value={values.googleMapsLink}
              onChange={(e) =>
                handleChange(
                  "googleMapsLink",
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5"
              placeholder="https://maps.google.com/..."
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium">
              Overview
            </label>

            <textarea
              rows={5}
              value={values.overview}
              onChange={(e) =>
                handleChange(
                  "overview",
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5"
              placeholder="Village location overview..."
            />
          </div>

          <label className="flex items-center gap-3 rounded-lg border border-slate-200 p-4">
            <input
              type="checkbox"
              checked={values.isPublished}
              onChange={(e) =>
                handleChange(
                  "isPublished",
                  e.target.checked
                )
              }
            />

            <span>
              <span className="block font-medium">
                Published
              </span>

              <span className="text-sm text-slate-500">
                Show on public portal.
              </span>
            </span>
          </label>

        </div>
      </section>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-blue-600 px-6 py-2.5 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading
            ? "Saving..."
            : "Save Village Location"}
        </button>
      </div>
    </form>
  );
};

export default VillageLocationForm;