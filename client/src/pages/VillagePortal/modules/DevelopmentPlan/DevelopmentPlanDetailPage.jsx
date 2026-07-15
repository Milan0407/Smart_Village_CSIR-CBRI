import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { useDevelopmentPlan } from "../../../../hooks/useDevelopmentPlans";

import ProjectHeader from "./components/ProjectHeader";
import ProjectSidebar from "./components/ProjectSidebar";
import OverviewSection from "./components/OverviewSection";
import ObjectivesSection from "./components/ObjectivesSection";
import TimelineSection from "./components/TimelineSection";
import FinancialSection from "./components/FinancialSection";
import SDGSection from "./components/SDGSection";
import DocumentsSection from "./components/DocumentsSection";

const DevelopmentPlanDetailPage = () => {
  const { slug, id } = useParams();

  const {
    plan,
    loading,
    error,
  } = useDevelopmentPlan(id);

  if (loading) {
    return (
      <div className="bg-white rounded-xl p-8">
        Loading Development Plan...
      </div>
    );
  }

  if (error || !plan) {
    return (
      <div className="bg-white rounded-xl p-8">
        Development Plan not found.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <Link
        to={`/village/${slug}/development-plan`}
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
      >
        <ArrowLeft size={18} />
        Back to Development Plans
      </Link>

      <ProjectHeader plan={plan} />

      <div className="grid grid-cols-12 gap-8">

       <main className="col-span-12 lg:col-span-8 space-y-6">

  <OverviewSection plan={plan} />
  <ObjectivesSection plan={plan} />
  <TimelineSection plan={plan} />
  <FinancialSection plan={plan} />
  <SDGSection plan={plan} />
  <DocumentsSection plan={plan} />
  {/* Next sections will come here */}

</main>

        <aside className="col-span-4">

          <ProjectSidebar plan={plan} />

        </aside>

      </div>

    </div>
  );
};

export default DevelopmentPlanDetailPage;