import { useMemo, useState } from "react";
import {
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";

import DevelopmentPlanStats from "../components/developmentPlan/DevelopmentPlanStats";
import DevelopmentPlanFilters from "../components/developmentPlan/DevelopmentPlanFilters";
import DevelopmentPlanTable from "../components/developmentPlan/DevelopmentPlanTable";

import {
  getAllDevelopmentPlans,
  deleteDevelopmentPlan,
  togglePublishDevelopmentPlan,
} from "../services/developmentPlan.service";

import {
  getAllVillages,
} from "../services/village.service";

const EMPTY_LIST = [];

const DevelopmentPlanManagementPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");

  const [village, setVillage] =
    useState("ALL");

  const {
    data,
    isLoading: loading,
  } = useQuery({
    queryKey: ["admin-development-plans"],
    queryFn: async () => {
      const [plansData, villagesData] = await Promise.all([
        getAllDevelopmentPlans(),
        getAllVillages(),
      ]);

      return {
        plans: plansData,
        villages: villagesData,
      };
    },
  });

  const plans = data?.plans || EMPTY_LIST;
  const villages = data?.villages || EMPTY_LIST;

  const filteredPlans =
    useMemo(() => {
      return plans.filter((plan) => {

        const matchesSearch =
          plan.title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesVillage =
          village === "ALL" ||
          plan.village?._id ===
            village;

        return (
          matchesSearch &&
          matchesVillage
        );
      });
    }, [
      plans,
      search,
      village,
    ]);

  const handleEdit = (id) => {
    navigate(
      `/admin/development-plans/${id}/edit`
    );
  };

  const handleDelete =
    async (id) => {
      const confirmDelete =
        window.confirm(
          "Delete this Development Plan?"
        );

      if (!confirmDelete) return;

      try {
        await deleteDevelopmentPlan(
          id
        );

        queryClient.setQueryData(
          ["admin-development-plans"],
          (current) => ({
            ...current,
            plans: (current?.plans || []).filter(
              (plan) => plan._id !== id
            ),
          })
        );
      } catch (error) {
        console.error(error);

        alert(
          "Failed to delete Development Plan."
        );
      }
    };

  const handleTogglePublish =
    async (id) => {
      try {
        const updated =
          await togglePublishDevelopmentPlan(
            id
          );

        queryClient.setQueryData(
          ["admin-development-plans"],
          (current) => ({
            ...current,
            plans: (current?.plans || []).map((plan) =>
              plan._id === id ? updated : plan
            ),
          })
        );
      } catch (error) {
        console.error(error);

        alert(
          "Failed to update publish status."
        );
      }
    };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        Loading Development Plans...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            Development Plans
          </h1>

          <p className="text-slate-500 mt-2">
            Manage CSIR technology deployment sectors,
            technologies and publishing.
          </p>

        </div>

        <button
          onClick={() =>
            navigate(
              "/admin/development-plans/create"
            )
          }
          className="
            inline-flex
            items-center
            gap-2
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-5
            py-3
            rounded-lg
          "
        >
          <Plus size={18} />

          Add Development Plan
        </button>

      </div>

      {/* Statistics */}

      <DevelopmentPlanStats
        plans={plans}
      />

      {/* Filters */}

      <DevelopmentPlanFilters
        search={search}
        setSearch={setSearch}
        village={village}
        setVillage={setVillage}
        villages={villages}
      />

      {/* Table */}

      <DevelopmentPlanTable
        plans={filteredPlans}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onTogglePublish={
          handleTogglePublish
        }
      />

    </div>
  );
};

export default DevelopmentPlanManagementPage;
