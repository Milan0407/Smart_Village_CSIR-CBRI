import {
  ShieldCheck,
  Users,
  ArrowRight,
} from "lucide-react";

const categoryLabels = {
  CENTRAL: "Central Government",
  STATE: "State Government",
};

const PolicyCard = ({
  scheme,
  onOpen,
}) => {
  const imageUrl = scheme.featuredImage?.url;
  const hasMoreContent =
    Boolean(scheme.detailedDescription) ||
    String(scheme.shortDescription || "").length > 220;

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen();
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={handleKeyDown}
      aria-label={`Read more about ${scheme.schemeName}`}
      className="group grid cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 md:grid-cols-[280px_minmax(0,1fr)]"
    >
      <div
        className="flex h-48 items-center justify-center border-b border-slate-100 bg-slate-50 p-3 md:h-full md:min-h-[250px] md:border-b-0 md:border-r"
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={scheme.featuredImage?.alt || scheme.schemeName}
            loading="lazy"
            className="h-full w-full object-contain object-center transition duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 to-emerald-50 px-6 text-center text-sm font-semibold text-slate-600">
            Policies & Schemes
          </div>
        )}
      </div>

      <div className="flex min-h-[250px] flex-col p-5 sm:p-6">
        <h3 className="line-clamp-2 text-lg font-bold leading-snug text-slate-950">
          {scheme.schemeName}
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-blue-700">
            <ShieldCheck size={14} />
            {categoryLabels[scheme.category] ||
              scheme.category}
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            <Users size={14} />
            {Number(
              scheme.beneficiariesCount || 0
            ).toLocaleString()}{" "}
            Beneficiaries
          </span>
        </div>

        <p className="mt-4 line-clamp-4 text-sm leading-6 text-slate-600">
          {scheme.shortDescription}
        </p>

        {hasMoreContent && (
          <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-blue-700 transition group-hover:text-blue-900">
            Read More
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </span>
        )}
      </div>
    </article>
  );
};

export default PolicyCard;
