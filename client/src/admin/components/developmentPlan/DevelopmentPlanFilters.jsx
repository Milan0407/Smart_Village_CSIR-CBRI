import { Search } from "lucide-react";

const categories = [
  "ALL",
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

const statuses = [
  "ALL",
  "PLANNED",
  "IN_PROGRESS",
  "COMPLETED",
  "ON_HOLD",
  "CANCELLED",
];

const DevelopmentPlanFilters = ({
  search,
  setSearch,

  village,
  setVillage,

  category,
  setCategory,

  status,
  setStatus,

  villages = [],
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

        {/* Search */}

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-3 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search development plans..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full
              border
              rounded-lg
              pl-10
              pr-4
              py-2.5
            "
          />

        </div>

        {/* Village */}

        <select
          value={village}
          onChange={(e) =>
            setVillage(e.target.value)
          }
          className="border rounded-lg px-3 py-2.5"
        >
          <option value="ALL">
            All Villages
          </option>

          {villages.map((item) => (
            <option
              key={item._id}
              value={item._id}
            >
              {item.name.en}
            </option>
          ))}
        </select>

        {/* Category */}

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="border rounded-lg px-3 py-2.5"
        >
          {categories.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item.replaceAll("_", " ")}
            </option>
          ))}
        </select>

        {/* Status */}

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className="border rounded-lg px-3 py-2.5"
        >
          {statuses.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item.replaceAll("_", " ")}
            </option>
          ))}
        </select>

      </div>

    </div>
  );
};

export default DevelopmentPlanFilters;