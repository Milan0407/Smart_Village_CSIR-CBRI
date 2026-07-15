import { Search } from "lucide-react";

const DevelopmentFilters = ({
  search,
  setSearch,
  category,
  setCategory,
  status,
  setStatus,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

      <div className="grid gap-5 lg:grid-cols-4">

        {/* Search */}

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full
              rounded-xl
              border
              border-slate-300
              pl-11
              pr-4
              py-3
              focus:border-blue-500
              focus:outline-none
            "
          />

        </div>

        {/* Category */}

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="
            rounded-xl
            border
            border-slate-300
            px-4
            py-3
            focus:border-blue-500
            focus:outline-none
          "
        >

          <option value="">
            All Categories
          </option>

          <option value="AGRICULTURE">
            Agriculture
          </option>

          <option value="INFRASTRUCTURE">
            Infrastructure
          </option>

          <option value="EDUCATION">
            Education
          </option>

          <option value="HEALTH">
            Health
          </option>

          <option value="WATER">
            Water
          </option>

          <option value="ENERGY">
            Energy
          </option>

          <option value="DIGITAL">
            Digital
          </option>

          <option value="SANITATION">
            Sanitation
          </option>

          <option value="SKILL_DEVELOPMENT">
            Skill Development
          </option>

          <option value="OTHER">
            Other
          </option>

        </select>

        {/* Status */}

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className="
            rounded-xl
            border
            border-slate-300
            px-4
            py-3
            focus:border-blue-500
            focus:outline-none
          "
        >

          <option value="">
            All Status
          </option>

          <option value="PLANNED">
            Planned
          </option>

          <option value="IN_PROGRESS">
            In Progress
          </option>

          <option value="COMPLETED">
            Completed
          </option>

          <option value="ON_HOLD">
            On Hold
          </option>

        </select>

        {/* Sort */}

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
          className="
            rounded-xl
            border
            border-slate-300
            px-4
            py-3
            focus:border-blue-500
            focus:outline-none
          "
        >

          <option value="latest">
            Latest First
          </option>

          <option value="progress">
            Progress
          </option>

          <option value="budget">
            Budget
          </option>

          <option value="targetDate">
            Target Date
          </option>

        </select>

      </div>

    </div>
  );
};

export default DevelopmentFilters;