import { useEffect, useState } from "react";

import {
  getAllVillages,
} from "../../services/village.service";

const categories = [
  "INFRASTRUCTURE",
  "WATER",
  "ENERGY",
  "HEALTH",
  "EDUCATION",
  "AGRICULTURE",
  "DIGITAL",
  "SANITATION",
  "SKILL_DEVELOPMENT",
  "OTHER",
];

const BasicInformationSection = ({
  values,
  onChange,
}) => {
  const [villages, setVillages] =
    useState([]);

  useEffect(() => {
    loadVillages();
  }, []);

  const loadVillages =
    async () => {
      try {
        const data =
          await getAllVillages();

        setVillages(data);
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">

      <h2 className="text-xl font-semibold mb-6">
        Basic Information
      </h2>

      <div className="grid grid-cols-2 gap-6">

        {/* Village */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Village
          </label>

          <select
            value={values.village}
            onChange={(e) =>
              onChange(
                "village",
                e.target.value
              )
            }
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">
              Select Village
            </option>

            {villages.map(
              (village) => (
                <option
                  key={
                    village._id
                  }
                  value={
                    village._id
                  }
                >
                  {village.name.en}
                </option>
              )
            )}
          </select>
        </div>

        {/* Category */}

        <div>
          <label className="block text-sm font-medium mb-2">
            Category
          </label>

          <select
            value={values.category}
            onChange={(e) =>
              onChange(
                "category",
                e.target.value
              )
            }
            className="w-full border rounded-lg px-3 py-2"
          >
            {categories.map(
              (
                category
              ) => (
                <option
                  key={
                    category
                  }
                  value={
                    category
                  }
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

      </div>

      {/* Title */}

      <div className="mt-6">

        <label className="block text-sm font-medium mb-2">
          Title
        </label>

        <input
          type="text"
          value={values.title}
          onChange={(e) =>
            onChange(
              "title",
              e.target.value
            )
          }
          className="w-full border rounded-lg px-3 py-2"
          placeholder="Enter project title"
        />

      </div>

      {/* Description */}

      <div className="mt-6">

        <label className="block text-sm font-medium mb-2">
          Description
        </label>

        <textarea
          rows={5}
          value={
            values.description
          }
          onChange={(e) =>
            onChange(
              "description",
              e.target.value
            )
          }
          className="w-full border rounded-lg px-3 py-2"
          placeholder="Enter development plan description..."
        />

      </div>

    </div>
  );
};

export default BasicInformationSection;