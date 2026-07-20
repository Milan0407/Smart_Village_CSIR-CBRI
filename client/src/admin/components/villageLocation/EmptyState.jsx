import { MapPin } from "lucide-react";

const EmptyState = ({
  title = "No Data Found",
  description = "There is nothing to display.",
}) => {
  return (
    <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
        <MapPin
          size={28}
          className="text-blue-600"
        />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-slate-800">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {description}
      </p>
    </div>
  );
};

export default EmptyState;