import { useEffect, useMemo, useState } from "react";
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

const DevelopmentPlanManagementPage = () => {
  const navigate = useNavigate();

  const [plans, setPlans] = useState([]);
  const [villages, setVillages] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [village, setVillage] =
    useState("ALL");

  const [category, setCategory] =
    useState("ALL");

  const [status, setStatus] =
    useState("ALL");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);

      const [
        plansData,
        villagesData,
      ] = await Promise.all([
        getAllDevelopmentPlans(),
        getAllVillages(),
      ]);

      setPlans(plansData);

      setVillages(villagesData);
    } catch (error) {
      console.error(error);

      alert(
        "Failed to load Development Plans."
      );
    } finally {
      setLoading(false);
    }
  };

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

        const matchesCategory =
          category === "ALL" ||
          plan.category ===
            category;

        const matchesStatus =
          status === "ALL" ||
          plan.status === status;

        return (
          matchesSearch &&
          matchesVillage &&
          matchesCategory &&
          matchesStatus
        );
      });
    }, [
      plans,
      search,
      village,
      category,
      status,
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

        setPlans((prev) =>
          prev.filter(
            (plan) =>
              plan._id !== id
          )
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

        setPlans((prev) =>
          prev.map((plan) =>
            plan._id === id
              ? updated
              : plan
          )
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
            Manage village development projects,
            implementation progress,
            budgets and publishing.
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
        category={category}
        setCategory={setCategory}
        status={status}
        setStatus={setStatus}
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