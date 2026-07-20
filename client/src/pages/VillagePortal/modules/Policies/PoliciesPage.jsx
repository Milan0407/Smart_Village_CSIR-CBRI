import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";

import {
  getPoliciesSchemesByVillage,
} from "../../../../services/village.service";

import EmptyState from "./components/EmptyState";
import PolicySection from "./components/PolicySection";
import PolicySkeleton from "./components/PolicySkeleton";

const PoliciesPage = () => {
  const { village } = useOutletContext();

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
          <PolicySection
            title="Central Government Schemes"
            schemes={centralSchemes}
          />

          <PolicySection
            title="State Government Schemes"
            schemes={stateSchemes}
          />
        </>
      )}
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
