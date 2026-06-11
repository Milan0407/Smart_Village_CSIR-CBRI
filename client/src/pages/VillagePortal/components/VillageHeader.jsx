import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const VillageHeader = () => {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div>
          <h1 className="text-xl font-bold text-slate-900">
            Smart Village Management Portal
          </h1>

          <p className="text-sm text-slate-500">
            CSIR-CBRI Roorkee
          </p>
        </div>

        <Link
          to="/#villages"
          className="
            flex items-center gap-2
            px-4 py-2
            rounded-lg
            border
            hover:bg-slate-50
          "
        >
          <ArrowLeft size={18} />
          Back to Villages
        </Link>

      </div>
    </header>
  );
};

export default VillageHeader;