import { FileText } from "lucide-react";

const OverviewSection = ({ plan }) => {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">

      <div className="flex items-center gap-3 mb-6">

        <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">

          <FileText
            className="text-blue-600"
            size={22}
          />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Project Overview
          </h2>

          <p className="text-slate-500">
            General information about the project
          </p>

        </div>

      </div>

      <div className="space-y-6">

        <div>

          <h3 className="text-lg font-semibold text-slate-800 mb-3">
            Description
          </h3>

          <p className="text-slate-600 leading-8">
            {plan.description}
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="rounded-xl bg-slate-50 p-5">

            <p className="text-sm text-slate-500">
              Category
            </p>

            <p className="mt-2 text-lg font-semibold text-slate-800">
              {plan.category.replaceAll("_", " ")}
            </p>

          </div>

          <div className="rounded-xl bg-slate-50 p-5">

            <p className="text-sm text-slate-500">
              Current Status
            </p>

            <p className="mt-2 text-lg font-semibold text-slate-800">
              {plan.status.replaceAll("_", " ")}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default OverviewSection;