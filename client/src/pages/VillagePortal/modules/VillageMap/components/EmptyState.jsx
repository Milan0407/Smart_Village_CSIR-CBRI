import { MapPinned } from "lucide-react";

const EmptyState = ({
  title = "No Data Available",
  description = "There is currently no information to display.",
}) => {
  return (
    <section className="flex min-h-[320px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8">
      <div className="max-w-md text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
          <MapPinned
            size={40}
            className="text-emerald-600"
          />
        </div>

        <h2 className="mt-6 text-2xl font-bold text-slate-900">
          {title}
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {description}
        </p>
      </div>
    </section>
  );
};

export default EmptyState;