import { useCallback, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";

import {
  getPoliciesSchemesByVillage,
} from "../../../../services/village.service";

import EmptyState from "./components/EmptyState";
import PolicyDetailsModal from "./components/PolicyDetailsModal";
import PolicySection from "./components/PolicySection";
import PolicySkeleton from "./components/PolicySkeleton";

const PoliciesPage = () => {
  const { village } = useOutletContext();
  const [selectedScheme, setSelectedScheme] =
    useState(null);
  const [activeCategory, setActiveCategory] =
    useState("CENTRAL");

  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: [
      "policies-schemes",
      village?.slug,
    ],
    queryFn: () =>
      getPoliciesSchemesByVillage(village.slug),
    enabled: !!village?.slug,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });

  const {
    centralSchemes,
    stateSchemes,
    hasSchemes,
  } = useMemo(() => {
    const central = data?.centralSchemes || [];
    const state = data?.stateSchemes || [];

    return {
      centralSchemes: central,
      stateSchemes: state,
      hasSchemes:
        central.length > 0 ||
        state.length > 0,
    };
  }, [data]);

  const closeModal = useCallback(() => {
    setSelectedScheme(null);
  }, []);

  const activeSchemes =
    activeCategory === "CENTRAL"
      ? centralSchemes
      : stateSchemes;

  const activeTitle =
    activeCategory === "CENTRAL"
      ? "Central Government Schemes"
      : "State Government Schemes";

  if (isLoading) {
    return (
      <div className="space-y-8">
        <Header />
        <PolicySkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-white p-12 text-center">
        <h2 className="text-xl font-semibold text-red-600">
          Failed to load Policies & Schemes
        </h2>

        <p className="mt-3 text-slate-500">
          Please try again after some time.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <Header />

      {!hasSchemes ? (
        <EmptyState
          title="No schemes available."
          description="Government schemes available for this village will appear here once published."
        />
      ) : (
        <>
          <div className="mx-auto flex min-h-[92px] max-w-[1000px] flex-wrap items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <button
              type="button"
              onClick={() => setActiveCategory("CENTRAL")}
              className={`min-h-14 rounded-xl px-6 py-4 text-base font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
                activeCategory === "CENTRAL"
                  ? "bg-blue-700 text-white shadow-sm"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              Central Government Schemes
              <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-xs">
                {centralSchemes.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("STATE")}
              className={`min-h-14 rounded-xl px-6 py-4 text-base font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
                activeCategory === "STATE"
                  ? "bg-blue-700 text-white shadow-sm"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              State Government Schemes
              <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-xs">
                {stateSchemes.length}
              </span>
            </button>
          </div>

          <PolicySection
            title={activeTitle}
            schemes={activeSchemes}
            onOpenScheme={setSelectedScheme}
          />
        </>
      )}

      <PolicyDetailsModal
        open={Boolean(selectedScheme)}
        scheme={selectedScheme}
        onClose={closeModal}
      />
    </div>
  );
};

const Header = () => (
  <section className="mx-auto max-w-[1000px] rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
    <div className="max-w-3xl">
      <h1 className="mt-2 text-3xl font-bold text-slate-900">
        Policies & Schemes
      </h1>

      <p className="mt-4 text-lg leading-8 text-slate-600">
        Government welfare schemes available for this village.
      </p>
    </div>
  </section>
);

export default PoliciesPage;
