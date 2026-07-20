import { useEffect, useState } from "react";

import MediaUploader from "../common/MediaUploader";
import { getAllVillages } from "../../services/village.service";

const defaultValues = {
  village: "",
  category: "CENTRAL",
  schemeName: "",
  shortDescription: "",
  detailedDescription: "",
  featuredImage: null,
  beneficiariesCount: 0,
  officialWebsiteUrl: "",
  displayOrder: 0,
  published: true,
};

const normalizeValues = (data = {}) => ({
  ...defaultValues,
  ...data,
  village: data.village?._id ?? data.village ?? "",
  category: data.category ?? "CENTRAL",
  schemeName: data.schemeName ?? "",
  shortDescription: data.shortDescription ?? "",
  detailedDescription: data.detailedDescription ?? "",
  featuredImage: data.featuredImage ?? null,
  beneficiariesCount: data.beneficiariesCount ?? 0,
  officialWebsiteUrl: data.officialWebsiteUrl ?? "",
  displayOrder: data.displayOrder ?? 0,
  published: data.published ?? true,
});

const PoliciesSchemeForm = ({
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
      beneficiariesCount: Number(
        values.beneficiariesCount || 0
      ),
      displayOrder: Number(
        values.displayOrder || 0
      ),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800">
          Policy or Scheme Details
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Configure village-level policy and scheme information.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Village
            </label>

            <select
              value={values.village}
              onChange={(e) =>
                handleChange("village", e.target.value)
              }
              disabled={villagesLoading}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
            >
              <option value="">
                {villagesLoading
                  ? "Loading villages..."
                  : "Select village"}
              </option>

              {villages.map((village) => (
                <option
                  key={village._id}
                  value={village._id}
                >
                  {village.name?.en || village.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Category
            </label>

            <select
              value={values.category}
              onChange={(e) =>
                handleChange("category", e.target.value)
              }
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
            >
              <option value="CENTRAL">
                Central Government
              </option>
              <option value="STATE">
                State Government
              </option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Scheme Name
            </label>

            <input
              type="text"
              value={values.schemeName}
              onChange={(e) =>
                handleChange("schemeName", e.target.value)
              }
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              placeholder="Enter scheme name"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Short Description
            </label>

            <textarea
              value={values.shortDescription}
              onChange={(e) =>
                handleChange(
                  "shortDescription",
                  e.target.value
                )
              }
              rows={3}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              placeholder="Short summary for listings."
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Detailed Description
            </label>

            <textarea
              value={values.detailedDescription}
              onChange={(e) =>
                handleChange(
                  "detailedDescription",
                  e.target.value
                )
              }
              rows={8}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              placeholder="Detailed scheme description, eligibility, and benefits."
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Beneficiaries Count
            </label>

            <input
              type="number"
              min="0"
              value={values.beneficiariesCount}
              onChange={(e) =>
                handleChange(
                  "beneficiariesCount",
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Display Order
            </label>

            <input
              type="number"
              value={values.displayOrder}
              onChange={(e) =>
                handleChange(
                  "displayOrder",
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Official Website URL
            </label>

            <input
              type="url"
              value={values.officialWebsiteUrl}
              onChange={(e) =>
                handleChange(
                  "officialWebsiteUrl",
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              placeholder="https://example.gov.in"
            />
          </div>

          <div className="md:col-span-2">
            <MediaUploader
              label="Featured Image"
              value={values.featuredImage}
              onChange={(media) =>
                handleChange("featuredImage", media)
              }
            />
          </div>

          <label className="flex items-center gap-3 rounded-lg border border-slate-200 p-4">
            <input
              type="checkbox"
              checked={values.published}
              onChange={(e) =>
                handleChange(
                  "published",
                  e.target.checked
                )
              }
              className="h-4 w-4 rounded border-slate-300"
            />

            <span>
              <span className="block font-medium text-slate-800">
                Published
              </span>
              <span className="text-sm text-slate-500">
                Show this scheme on the public village portal.
              </span>
            </span>
          </label>
        </div>
      </section>

      <div className="flex justify-end gap-4">
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-blue-600 px-6 py-2.5 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading
            ? "Saving..."
            : "Save Policy or Scheme"}
        </button>
      </div>
    </form>
  );
};

export default PoliciesSchemeForm;
