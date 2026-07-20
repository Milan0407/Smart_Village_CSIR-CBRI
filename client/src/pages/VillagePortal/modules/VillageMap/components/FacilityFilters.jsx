import { Search, Filter } from "lucide-react";

const FacilityFilters = ({
  searchTerm = "",
  onSearchChange,
  category = "all",
  onCategoryChange,
  categories = [],
  totalFacilities = 0,
}) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Search & Category */}
        <div className="flex flex-1 flex-col gap-4 md:flex-row">
          {/* Search */}
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) =>
                onSearchChange?.(e.target.value)
              }
              placeholder="Search facilities..."
              className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          {/* Category */}
          <div className="relative w-full md:w-64">
            <Filter
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <select
              value={category}
              onChange={(e) =>
                onCategoryChange?.(e.target.value)
              }
              className="w-full appearance-none rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            >
              <option value="all">
                All Categories
              </option>

              {categories.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Count */}
        <div className="rounded-lg bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
          {totalFacilities}{" "}
          {totalFacilities === 1
            ? "Facility"
            : "Facilities"}
        </div>
      </div>
    </section>
  );
};

export default FacilityFilters;