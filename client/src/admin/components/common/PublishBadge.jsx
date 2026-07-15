const PublishBadge = ({
  published,
}) => {
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

        ${
          published
            ? "bg-emerald-100 text-emerald-700"
            : "bg-slate-100 text-slate-600"
        }
      `}
    >
      {published
        ? "Published"
        : "Draft"}
    </span>
  );
};

export default PublishBadge;