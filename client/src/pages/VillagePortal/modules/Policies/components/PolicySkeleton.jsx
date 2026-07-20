const SkeletonCard = () => (
  <div className="border-b border-slate-200 px-5 py-5 last:border-b-0 md:px-7">
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex-1 space-y-3">
        <div className="h-6 w-3/4 animate-pulse rounded bg-slate-200" />
        <div className="flex gap-3">
          <div className="h-7 w-40 animate-pulse rounded-full bg-slate-200" />
          <div className="h-7 w-36 animate-pulse rounded-full bg-slate-200" />
        </div>
      </div>

      <div className="h-10 w-10 animate-pulse rounded-full bg-slate-200" />
    </div>
  </div>
);

const PolicySkeleton = () => {
  return (
    <div className="space-y-10">
      {[1, 2].map((section) => (
        <section key={section} className="space-y-5">
          <div className="mx-auto h-8 w-72 max-w-[1000px] animate-pulse rounded bg-slate-200" />

          <div className="mx-auto max-w-[1000px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {[1, 2, 3].map((item) => (
              <SkeletonCard key={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default PolicySkeleton;
