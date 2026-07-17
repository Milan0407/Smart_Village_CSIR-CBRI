import { Search, Filter } from "lucide-react";

const DEFAULT_FILTERS = {
  search: "",
  type: "",
  status: "",
  page: 1,
};

const EventsFilters = ({
  filters = DEFAULT_FILTERS,
  onChange,
}) => {
  const handleSelectChange = (field, value) => {
    if (!onChange) return;

    onChange((prev) => ({
      ...prev,
      [field]: value,
      page: 1,
    }));
  };

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-2">
        <Filter
          className="text-blue-600"
          size={20}
        />

        <h2 className="text-lg font-semibold text-slate-900">
          Search & Filters
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-4">

        <div className="relative lg:col-span-2">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search events..."
            value={filters.search ?? ""}
            onChange={(e) =>
              handleSelectChange("search", e.target.value)
            }
            className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <select
          value={filters.type ?? ""}
          onChange={(e) =>
            handleSelectChange(
              "type",
              e.target.value
            )
          }
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="">All Types</option>
          <option value="EVENT">Events</option>
          <option value="ACHIEVEMENT">
            Achievements
          </option>
        </select>

        <select
          value={filters.status ?? ""}
          onChange={(e) =>
            handleSelectChange(
              "status",
              e.target.value
            )
          }
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="">All Status</option>
          <option value="UPCOMING">
            Upcoming
          </option>
          <option value="ONGOING">
            Ongoing
          </option>
          <option value="COMPLETED">
            Completed
          </option>
        </select>

      </div>
    </section>
  );
};

export default EventsFilters;
