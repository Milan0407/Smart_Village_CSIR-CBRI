const SkeletonCard = () => (
  <div className="animate-pulse rounded-2xl bg-white p-6 shadow-sm">
    <div className="mb-4 h-6 w-24 rounded bg-slate-200"></div>

    <div className="mb-3 h-10 w-16 rounded bg-slate-200"></div>

    <div className="h-4 w-24 rounded bg-slate-200"></div>
  </div>
);

const EventCardSkeleton = () => (
  <div className="animate-pulse overflow-hidden rounded-2xl bg-white shadow-sm">
    <div className="h-56 bg-slate-200"></div>

    <div className="space-y-4 p-6">
      <div className="h-6 w-20 rounded bg-slate-200"></div>

      <div className="h-7 w-3/4 rounded bg-slate-200"></div>

      <div className="h-4 w-full rounded bg-slate-200"></div>

      <div className="h-4 w-5/6 rounded bg-slate-200"></div>

      <div className="mt-6 h-5 w-28 rounded bg-slate-200"></div>
    </div>
  </div>
);

const EventsSkeleton = () => {
  return (
    <div className="space-y-10">

      {/* Hero */}

      <div className="animate-pulse rounded-3xl bg-slate-200 h-72"></div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>

      {/* Cards */}

      <div className="grid gap-8 lg:grid-cols-3">
        <EventCardSkeleton />
        <EventCardSkeleton />
        <EventCardSkeleton />
      </div>

    </div>
  );
};

export default EventsSkeleton;