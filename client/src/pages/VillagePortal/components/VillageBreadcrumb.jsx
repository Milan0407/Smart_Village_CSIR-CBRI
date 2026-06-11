import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getVillageBySlug } from "../../../data/villages";

const PAGE_NAMES = {
  info: "Village Information",
  "development-plan": "Development Plan",
  "current-affairs": "Current Affairs",
  events: "Events & Achievements",
  "traditional-food": "Traditional Food",
  map: "Village Map",
  policies: "Policies & Schemes",
  "knowledge-hub": "Knowledge Hub",
  indicators: "Development Indicators",
  "technology-mapping": "Technology Mapping",
  feedback: "Feedback & Activities",
};

const VillageBreadcrumb = () => {
  const location = useLocation();
  const { slug } = useParams();
  const village = getVillageBySlug(slug);

  const currentPage =
    location.pathname.split("/").pop();

  return (
    <nav
      className="flex items-center gap-2 text-sm text-slate-500"
      aria-label="Breadcrumb"
    >
      <Link
        to="/"
        className="flex items-center gap-1 hover:text-primary"
      >
        <Home size={16} />
        Home
      </Link>

      <ChevronRight size={14} />

      <span>
  {village?.name}
</span>

      <ChevronRight size={14} />

      <span className="font-medium text-slate-900">
  {PAGE_NAMES[currentPage] || "Page"}
</span>
    </nav>
  );
};

export default VillageBreadcrumb;