import { FileText } from "lucide-react";

const EmptyState = ({
  title = "No Data Found",
  description = "There is no data available.",
  buttonText,
  onAction,
}) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm py-20">

      <div className="flex flex-col items-center text-center">

        <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-6">

          <FileText
            size={38}
            className="text-slate-400"
          />

        </div>

        <h2 className="text-2xl font-semibold text-slate-800">
          {title}
        </h2>

        <p className="mt-3 text-slate-500 max-w-md">
          {description}
        </p>

        {buttonText && (
          <button
            onClick={onAction}
            className="
              mt-8
              px-6
              py-3
              rounded-lg
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-medium
            "
          >
            {buttonText}
          </button>
        )}

      </div>

    </div>
  );
};

export default EmptyState;