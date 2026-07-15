import { CalendarX } from "lucide-react";

const EmptyState = ({ onReset }) => {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center shadow-sm">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
        <CalendarX
          size={40}
          className="text-blue-600"
        />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-slate-900">
        No Events Found
      </h2>

      <p className="mx-auto mt-3 max-w-md text-slate-500">
        No events or achievements match your current
        search and filters.
      </p>

      <button
        onClick={onReset}
        className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default EmptyState;