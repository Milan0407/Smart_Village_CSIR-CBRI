const statusStyles = {
  PLANNED: "bg-slate-100 text-slate-700",
  IN_PROGRESS: "bg-blue-100 text-blue-700",
  DEPLOYED: "bg-cyan-100 text-cyan-700",
  COMPLETED: "bg-emerald-100 text-emerald-700",
  ON_HOLD: "bg-amber-100 text-amber-700",
  CANCELLED: "bg-red-100 text-red-700",
};

const ProgressBar = ({ value = 0 }) => {
  const progress = Math.min(Math.max(Number(value) || 0, 0), 100);

  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-600">Progress</span>
        <span className="font-semibold text-blue-700">{progress}%</span>
      </div>

      <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

const TechnologyCard = ({ technology }) => {
  const image =
    technology.image?.url ||
    "https://placehold.co/800x500?text=CSIR+Technology";
  const status = technology.status || "PLANNED";

  return (
    <article className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="grid gap-0 md:grid-cols-[220px_1fr]">
        <div className="h-52 overflow-hidden bg-slate-100 md:h-full">
          <img
            src={image}
            alt={technology.technologyName}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                {technology.labName}
              </p>

              <h4 className="mt-1 text-xl font-bold text-slate-900">
                {technology.technologyName}
              </h4>
            </div>

            <span
              className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[status] || statusStyles.PLANNED}`}
            >
              {status.replaceAll("_", " ")}
            </span>
          </div>

          {technology.description && (
            <p className="mt-4 leading-7 text-slate-600">
              {technology.description}
            </p>
          )}

          <div className="mt-5">
            <ProgressBar value={technology.progress} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default TechnologyCard;
export { ProgressBar };
