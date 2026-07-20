import { Search } from "lucide-react";

const VillageLocationFilters = ({
  search,
  setSearch,
  village,
  setVillage,
  villages = [],
}) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        {/* Search */}

        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search by village..."
            className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Village Filter */}

        <select
          value={village}
          onChange={(e) =>
            setVillage(e.target.value)
          }
          className="rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="ALL">
            All Villages
          </option>

          {villages.map((item) => (
            <option
              key={item._id}
              value={item._id}
            >
              {item.name?.en || item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default VillageLocationFilters;