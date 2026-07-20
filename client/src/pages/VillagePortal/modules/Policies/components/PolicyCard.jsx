import {
  ChevronDown,
  ExternalLink,
  ShieldCheck,
  Users,
} from "lucide-react";

const categoryLabels = {
  CENTRAL: "Central Government",
  STATE: "State Government",
};

const PolicyCard = ({
  scheme,
  isOpen,
  onToggle,
}) => {
  const imageUrl = scheme.featuredImage?.url;
  const officialUrl = scheme.officialWebsiteUrl;

  return (
    <article className="border-b border-slate-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full flex-col gap-4 px-5 py-5 text-left transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-700 md:flex-row md:items-center md:justify-between md:px-7"
      >
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold text-slate-900 md:text-xl">
            {scheme.schemeName}
          </h3>

          <div className="mt-3 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-700">
              <ShieldCheck size={15} />
              {categoryLabels[scheme.category] ||
                scheme.category}
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
              <Users size={16} />
              {Number(
                scheme.beneficiariesCount || 0
              ).toLocaleString()}{" "}
              Beneficiaries
            </span>
          </div>
        </div>

        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700">
          <ChevronDown
            size={20}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[1200px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid gap-6 px-5 pb-7 md:grid-cols-[280px_1fr] md:px-7">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={scheme.featuredImage?.alt || scheme.schemeName}
                loading="lazy"
                className="h-60 w-full object-cover"
              />
            ) : (
              <div className="flex h-60 w-full items-center justify-center bg-gradient-to-br from-blue-50 to-emerald-50 px-6 text-center text-sm font-semibold text-slate-600">
                Policies & Schemes
              </div>
            )}
          </div>

          <div className="space-y-5">
            <p className="text-base leading-7 text-slate-700">
              {scheme.shortDescription}
            </p>

            <div className="space-y-4 text-base leading-8 text-slate-700">
              {(scheme.detailedDescription || "")
                .split("\n")
                .filter(Boolean)
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                <Users size={17} />
                {Number(
                  scheme.beneficiariesCount || 0
                ).toLocaleString()}{" "}
                Beneficiaries
              </span>

              {officialUrl ? (
                <a
                  href={officialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800"
                >
                  Visit Official Scheme
                  <ExternalLink size={16} />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-200 px-5 py-3 text-sm font-bold text-slate-500 shadow-sm"
                >
                  Visit Official Scheme
                  <ExternalLink size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PolicyCard;
