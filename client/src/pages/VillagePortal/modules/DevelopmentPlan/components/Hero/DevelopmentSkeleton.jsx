const SkeletonCard = () => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 animate-pulse">

    <div className="flex justify-between items-start">

      <div className="space-y-3 flex-1">

        <div className="h-8 w-56 rounded bg-slate-200" />

        <div className="h-5 w-32 rounded bg-slate-200" />

      </div>

      <div className="h-10 w-24 rounded-full bg-slate-200" />

    </div>

    <div className="mt-8 space-y-3">

      <div className="h-4 rounded bg-slate-200" />

      <div className="h-4 w-5/6 rounded bg-slate-200" />

    </div>

    <div className="mt-8">

      <div className="h-3 rounded-full bg-slate-200" />

    </div>

    <div className="mt-8 h-36 rounded-xl bg-slate-200" />

  </div>
);

const DevelopmentSkeleton = () => {
  return (
    <div className="space-y-8">

      {[1, 2, 3].map((item) => (
        <SkeletonCard key={item} />
      ))}

    </div>
  );
};

export default DevelopmentSkeleton;
