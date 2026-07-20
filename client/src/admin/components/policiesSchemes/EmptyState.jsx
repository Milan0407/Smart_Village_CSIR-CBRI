import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyState = () => {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-16 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
        <FileText
          size={40}
          className="text-slate-500"
        />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-slate-800">
        No Policies or Schemes Found
      </h2>

      <p className="mt-3 text-slate-500">
        Create the first village policy or scheme entry.
      </p>

      <Link
        to="/admin/policies-schemes/create"
        className="mt-8 inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Create Policy or Scheme
      </Link>
    </div>
  );
};

export default EmptyState;
