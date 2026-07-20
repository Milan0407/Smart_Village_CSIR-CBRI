import {
  FileText,
  SearchX,
} from "lucide-react";

const EmptyState = ({
  title = "No Schemes Found",
  description = "Policies and schemes will appear here once published.",
}) => {
  return (
    <div className="mx-auto max-w-[1000px] rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="relative">
          <FileText
            size={44}
            className="text-blue-600"
          />
          <SearchX
            size={22}
            className="absolute -right-3 -top-2 text-emerald-600"
          />
        </div>
      </div>

      <h2 className="mt-6 text-2xl font-bold text-slate-900">
        {title || "No schemes available."}
      </h2>

      <p className="mx-auto mt-3 max-w-md text-slate-500">
        {description}
      </p>
    </div>
  );
};

export default EmptyState;
