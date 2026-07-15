const statusConfig = {
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
};

const StatusBadge = ({
  status,
}) => {
  const config =
    statusConfig[status] || {
      label: status,
      className:
        "bg-slate-100 text-slate-700",
    };

  return (
    <span
      className={`
        inline-flex
        items-center
        px-3
        py-1
        rounded-full
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