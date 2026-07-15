import {
  CalendarDays,
  PlayCircle,
  Clock3,
  CheckCircle2,
} from "lucide-react";

import {
  formatDate,
  formatStatus,
} from "../../../../../utils/formatters";

const TimelineItem = ({
  icon,
  title,
  value,
}) => (
  <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50">

    <div className="text-blue-600 mt-1">
      {icon}
    </div>

    <div>

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <p className="mt-1 font-semibold text-slate-800">
        {value || "-"}
      </p>

    </div>

  </div>
);

const TimelineSection = ({ plan }) => {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">

      <div className="flex items-center gap-3 mb-8">

        <div className="w-11 h-11 rounded-xl bg-indigo-100 flex items-center justify-center">

          <CalendarDays
            className="text-indigo-600"
            size={22}
          />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Project Timeline
          </h2>

          <p className="text-slate-500">
            Important milestones of the project
          </p>

        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-5">

        <TimelineItem
          icon={<PlayCircle size={20} />}
          title="Start Date"
          value={formatDate(plan.startDate)}
        />

        <TimelineItem
          icon={<Clock3 size={20} />}
          title="Target Completion"
          value={formatDate(plan.targetDate)}
        />

        <TimelineItem
          icon={<CheckCircle2 size={20} />}
          title="Completion Date"
          value={formatDate(plan.completedDate)}
        />

        <TimelineItem
          icon={<CalendarDays size={20} />}
          title="Current Status"
          value={formatStatus(plan.status)}
        />

      </div>

    </section>
  );
};

export default TimelineSection;