import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DevelopmentPlanForm from "../components/developmentPlan/DevelopmentPlanForm";

import {
  createDevelopmentPlan,
} from "../services/developmentPlan.service";

const CreateDevelopmentPlanPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (
    values
  ) => {
    try {
      setLoading(true);

      await createDevelopmentPlan(
        values
      );

      alert(
        "Development Plan created successfully."
      );

      navigate(
        "/admin/development-plans"
      );
    } catch (error) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
          "Failed to create Development Plan."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-slate-800">
          Create Development Plan
        </h1>

        <p className="text-slate-500 mt-2">
          Create a new development plan for a village.
        </p>

      </div>

      <DevelopmentPlanForm
        onSubmit={handleSubmit}
        loading={loading}
      />

    </div>
  );
};

export default CreateDevelopmentPlanPage;