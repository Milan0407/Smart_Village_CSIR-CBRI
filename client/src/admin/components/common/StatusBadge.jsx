const STATUS_CONFIG = {
  /* Development Plans */

  PLANNED: {
    label: "Planned",
    className:
      "bg-blue-100 text-blue-700",
  },

  IN_PROGRESS: {
    label: "In Progress",
    className:
      "bg-yellow-100 text-yellow-700",
  },

  COMPLETED: {
    label: "Completed",
    className:
      "bg-green-100 text-green-700",
  },

  ON_HOLD: {
    label: "On Hold",
    className:
      "bg-orange-100 text-orange-700",
  },

  CANCELLED: {
    label: "Cancelled",
    className:
      "bg-red-100 text-red-700",
  },

  /* Events */

  UPCOMING: {
    label: "Upcoming",
    className:
      "bg-indigo-100 text-indigo-700",
  },

  ONGOING: {
    label: "Ongoing",
    className:
      "bg-cyan-100 text-cyan-700",
  },
};

const StatusBadge = ({
  status,
}) => {
  const config =
    STATUS_CONFIG[status] || {
      label: status,
      className:
        "bg-slate-100 text-slate-700",
    };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold
        ${config.className}
      `}
    >
      {config.label}
    </span>
  );
};

export default StatusBadge;