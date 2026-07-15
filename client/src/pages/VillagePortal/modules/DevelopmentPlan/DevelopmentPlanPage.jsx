import { useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";

import useDevelopmentPlans from "../../../../hooks/useDevelopmentPlans";

import PlanCard from "./components/PlanCard";

import DevelopmentHero from "./components/Hero/DevelopmentHero";
import DevelopmentStats from "./components/Hero/DevelopmentStats";
import DevelopmentFilters from "./components/Hero/DevelopmentFilters";
import DevelopmentSkeleton from "./components/Hero/DevelopmentSkeleton";

const DevelopmentPlanPage = () => {
  const { village } = useOutletContext();

  const {
    plans,
    loading,
    error,
  } = useDevelopmentPlans(village.slug);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  const filteredPlans = useMemo(() => {
    let data = [...plans];

    // Search
    if (search.trim()) {
      const keyword = search.toLowerCase();

      data = data.filter(
        (plan) =>
          plan.title.toLowerCase().includes(keyword) ||
          plan.description
            ?.toLowerCase()
            .includes(keyword)
      );
    }

    // Category
    if (category) {
      data = data.filter(
        (plan) => plan.category === category
      );
    }

    // Status
    if (status) {
      data = data.filter(
        (plan) => plan.status === status
      );
    }

    // Sorting
    switch (sortBy) {
      case "progress":
        data.sort(
          (a, b) => b.progress - a.progress
        );
        break;

      case "budget":
        data.sort(
          (a, b) => b.budget - a.budget
        );
        break;

      case "targetDate":
        data.sort(
          (a, b) =>
            new Date(a.targetDate) -
            new Date(b.targetDate)
        );
        break;

      default:
        data.sort(
          (a, b) =>
            new Date(b.createdAt) -
            new Date(a.createdAt)
        );
    }

    return data;
  }, [
    plans,
    search,
    category,
    status,
    sortBy,
  ]);

if (loading) {
  return (
    <>
      <DevelopmentHero village={village} />

      <DevelopmentSkeleton />
    </>
  );
}

  if (error) {
    return (
      <div className="bg-white rounded-2xl border border-red-200 p-12 text-center">
        <h2 className="text-xl font-semibold text-red-600">
          Failed to load Development Plans
        </h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <DevelopmentHero village={village} />

      <DevelopmentStats plans={plans} />

      <DevelopmentFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        status={status}
        setStatus={setStatus}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

  <p className="text-slate-600">
    Showing{" "}
    <span className="font-semibold">
      {filteredPlans.length}
    </span>{" "}
    project{filteredPlans.length !== 1 ? "s" : ""}
  </p>

  {(search || category || status) && (
    <button
      onClick={() => {
        setSearch("");
        setCategory("");
        setStatus("");
        setSortBy("latest");
      }}
      className="font-medium text-blue-600 transition hover:text-blue-700"
    >
      Clear Filters
    </button>
  )}

</div>

      {filteredPlans.length === 0 ? (
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center">

          <h2 className="text-2xl font-bold text-slate-700">
            No Development Plans Found
          </h2>

          <p className="mt-3 text-slate-500">
            Try changing the search or filter options.
          </p>

        </div>
      ) : (
        <div className="grid gap-6">

          {filteredPlans.map((plan) => (
            <PlanCard
              key={plan._id}
              plan={plan}
            />
          ))}

        </div>
      )}

    </div>
  );
};

export default DevelopmentPlanPage;