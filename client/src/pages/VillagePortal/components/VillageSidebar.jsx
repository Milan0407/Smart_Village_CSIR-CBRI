import {
  Home,
  ClipboardList,
  Newspaper,
  Trophy,
  UtensilsCrossed,
  Map,
  FileText,
  BookOpen,
  BarChart3,
  Lightbulb,
  MessageSquare,
} from "lucide-react";

import { NavLink, useParams } from "react-router-dom";

const VillageSidebar = () => {
  const { slug } = useParams();

  const links = [
    {
      label: "Village Information",
      path: "info",
      icon: Home,
    },
    {
      label: "Development Plan",
      path: "development-plan",
      icon: ClipboardList,
    },
    {
      label: "Current Affairs",
      path: "current-affairs",
      icon: Newspaper,
    },
    {
      label: "Events & Achievements",
      path: "events",
      icon: Trophy,
    },
    {
      label: "Traditional Food",
      path: "traditional-food",
      icon: UtensilsCrossed,
    },
    {
      label: "Village Map",
      path: "map",
      icon: Map,
    },
    {
      label: "Policies & Schemes",
      path: "policies",
      icon: FileText,
    },
    {
      label: "Knowledge Hub",
      path: "knowledge-hub",
      icon: BookOpen,
    },
    {
      label: "Development Indicators",
      path: "indicators",
      icon: BarChart3,
    },
    {
      label: "Technology Mapping",
      path: "technology-mapping",
      icon: Lightbulb,
    },
    {
      label: "Feedback",
      path: "feedback",
      icon: MessageSquare,
    },
  ];

  return (
    <aside className="bg-white rounded-xl border shadow-sm p-4 h-fit">
      <h2 className="font-bold text-lg mb-4">
        Village Modules
      </h2>

      <div className="space-y-2">
        {links.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={`/village/${slug}/${item.path}`}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition-all ${
                  isActive
? "bg-[#448a61] text-white shadow-md"
                    : "hover:bg-slate-100 text-slate-700"
                }`
              }
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
};

export default VillageSidebar;