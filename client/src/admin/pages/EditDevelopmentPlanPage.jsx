import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import DevelopmentPlanForm from "../components/developmentPlan/DevelopmentPlanForm";

import {
  getDevelopmentPlanById,
  updateDevelopmentPlan,
} from "../services/developmentPlan.service";

const EditDevelopmentPlanPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [loading, setLoading] =
    useState(true);

  const [plan, setPlan] =
    useState(null);

  useEffect(() => {
    loadDevelopmentPlan();
  }, []);

  const loadDevelopmentPlan =
    async () => {
      try {
        const data =
          await getDevelopmentPlanById(
            id
          );

        setPlan(data);
      } catch (error) {
        console.error(error);

        alert(
          "Unable to load Development Plan."
        );
      } finally {
        setLoading(false);
      }
    };

  const handleSubmit = async (
    values
  ) => {
    try {
      setLoading(true);

      await updateDevelopmentPlan(
        id,
        values
      );

      alert(
        "Development Plan updated successfully."
      );

      navigate(
        "/admin/development-plans"
      );
    } catch (error) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
          "Update failed."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Edit Development Plan
        </h1>

        <p className="text-slate-500 mt-2">
          Update an existing development plan.
        </p>

      </div>

      <DevelopmentPlanForm
        initialValues={plan}
        onSubmit={handleSubmit}
      />

    </div>
  );
};

export default EditDevelopmentPlanPage;