import { useState } from "react";

const facilityCategories = [
  "EDUCATION",
  "HEALTHCARE",
  "BANK",
  "POLICE",
  "TRANSPORT",
  "GOVERNMENT",
  "MARKET",
  "RELIGIOUS",
  "OTHER",
];

const emptyFacility = {
  name: "",
  category: "OTHER",
  description: "",
  address: "",
  contactNumber: "",
  location: {
    type: "Point",
    coordinates: [0, 0], // [longitude, latitude]
  },
  displayOrder: 0,
};

const NearbyFacilityModal = ({
  initialValue,
  onClose,
  onSubmit,
  saving = false,
}) => {
  const [values, setValues] = useState({
    ...emptyFacility,
    ...initialValue,
    location: {
      ...emptyFacility.location,
      ...(initialValue?.location || {}),
      coordinates:
        initialValue?.location?.coordinates ??
        [0, 0],
    },
  });

  const handleChange = (field, value) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCoordinateChange = (
    index,
    value
  ) => {
    const coordinates = [
      ...values.location.coordinates,
    ];

    coordinates[index] =
      value === ""
        ? ""
        : Number(value);

    setValues((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        coordinates,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      ...values,
      displayOrder: Number(
        values.displayOrder
      ),
      location: {
        type: "Point",
        coordinates: [
          Number(
            values.location.coordinates[0]
          ),
          Number(
            values.location.coordinates[1]
          ),
        ],
      },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-900/50 p-4">
      <form
        onSubmit={handleSubmit}
        className="my-8 w-full max-w-3xl rounded-xl bg-white p-6 shadow-xl"
      >
        <h2 className="text-2xl font-semibold text-slate-800">
          {initialValue?._id
            ? "Edit Nearby Facility"
            : "Add Nearby Facility"}
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Enter the facility details that
          will appear on the public village
          map.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {/* Facility Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Facility Name
            </label>

            <input
              type="text"
              required
              value={values.name}
              onChange={(e) =>
                handleChange(
                  "name",
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              placeholder="Primary Health Centre"
            />
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Category
            </label>

            <select
              value={values.category}
              onChange={(e) =>
                handleChange(
                  "category",
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              {facilityCategories.map(
                (category) => (
                  <option
                    key={category}
                    value={category}
                  >
                    {category.replaceAll(
                      "_",
                      " "
                    )}
                  </option>
                )
              )}
            </select>
          </div>

          {/* Contact */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Contact Number
            </label>

            <input
              type="text"
              value={values.contactNumber}
              onChange={(e) =>
                handleChange(
                  "contactNumber",
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              placeholder="+91 9876543210"
            />
          </div>

          {/* Display Order */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Display Order
            </label>

            <input
              type="number"
              min="0"
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

          {/* Longitude */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Longitude
            </label>

            <input
              type="number"
              step="any"
              required
              value={
                values.location.coordinates[0]
              }
              onChange={(e) =>
                handleCoordinateChange(
                  0,
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              placeholder="77.7064"
            />
          </div>

          {/* Latitude */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Latitude
            </label>

            <input
              type="number"
              step="any"
              required
              value={
                values.location.coordinates[1]
              }
              onChange={(e) =>
                handleCoordinateChange(
                  1,
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              placeholder="30.3165"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Address
            </label>

            <input
              type="text"
              value={values.address}
              onChange={(e) =>
                handleChange(
                  "address",
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              placeholder="Village Main Road"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Description
            </label>

            <textarea
              rows={4}
              value={values.description}
              onChange={(e) =>
                handleChange(
                  "description",
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              placeholder="Short description about the facility..."
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-300 px-5 py-2.5 hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving
              ? "Saving..."
              : initialValue?._id
              ? "Update Facility"
              : "Add Facility"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NearbyFacilityModal;