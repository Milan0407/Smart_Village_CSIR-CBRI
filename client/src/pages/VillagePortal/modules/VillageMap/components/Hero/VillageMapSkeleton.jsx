const VillageMapSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Hero Skeleton */}
      <section className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-700">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 h-4 w-56 rounded bg-white/20" />

          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
            {/* Left Content */}
            <div>
              <div className="mb-5 h-8 w-40 rounded-full bg-white/20" />

              <div className="mb-4 h-12 w-80 rounded bg-white/20" />

              <div className="space-y-3">
                <div className="h-4 w-full max-w-2xl rounded bg-white/20" />
                <div className="h-4 w-11/12 rounded bg-white/20" />
                <div className="h-4 w-3/4 rounded bg-white/20" />
              </div>

              <div className="mt-8 h-12 w-56 rounded-lg bg-white/20" />
            </div>

            {/* Stats Card */}
            <div className="rounded-2xl bg-white/10 p-6">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-white/20" />

                <div className="flex-1">
                  <div className="mb-2 h-3 w-28 rounded bg-white/20" />
                  <div className="h-8 w-16 rounded bg-white/20" />
                </div>
              </div>

              <div className="space-y-4 border-t border-white/20 pt-5">
                <div className="flex justify-between">
                  <div className="h-3 w-20 rounded bg-white/20" />
                  <div className="h-3 w-24 rounded bg-white/20" />
                </div>

                <div className="flex justify-between">
                  <div className="h-3 w-20 rounded bg-white/20" />
                  <div className="h-3 w-16 rounded bg-white/20" />
                </div>

                <div className="flex justify-between">
                  <div className="h-3 w-20 rounded bg-white/20" />
                  <div className="h-3 w-12 rounded bg-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Skeleton */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="h-[500px] w-full rounded-2xl border border-slate-200 bg-slate-200" />

        {/* Facility Cards Skeleton */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <div className="mb-4 h-5 w-40 rounded bg-slate-200" />

              <div className="space-y-3">
                <div className="h-3 w-full rounded bg-slate-200" />
                <div className="h-3 w-5/6 rounded bg-slate-200" />
                <div className="h-3 w-2/3 rounded bg-slate-200" />
              </div>

              <div className="mt-5 h-10 w-36 rounded-lg bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VillageMapSkeleton;