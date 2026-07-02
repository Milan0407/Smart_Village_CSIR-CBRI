import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import LaboratoryForm from "../components/laboratories/LaboratoryForm";

import {
  getLaboratoryById,
  updateLaboratory,
} from "../services/laboratory.service";

const EditLaboratoryPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(true);

  const [laboratory, setLaboratory] =
    useState(null);

  useEffect(() => {
    const loadLaboratory =
      async () => {
        try {
          const data =
            await getLaboratoryById(id);

          setLaboratory({
            ...data,

            researchAreas:
              data.researchAreas?.join(", ") ||
              "",

            contributions:
              data.contributions?.join(", ") ||
              "",
          });
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    loadLaboratory();
  }, [id]);

  const handleUpdate =
    async (formData) => {
      try {
        await updateLaboratory(id, {
          ...formData,

          researchAreas:
            formData.researchAreas
              ?.split(",")
              .map((item) =>
                item.trim()
              )
              .filter(Boolean),

          contributions:
            formData.contributions
              ?.split(",")
              .map((item) =>
                item.trim()
              )
              .filter(Boolean),
        });

        navigate(
          "/admin/laboratories"
        );
      } catch (error) {
        console.error(error);
      }
    };

  if (loading) {
    return (
      <div className="p-6">
        Loading...
      </div>
    );
  }

  if (!laboratory) {
    return (
      <div className="p-6">
        Laboratory not found
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Edit Laboratory
      </h1>

      <LaboratoryForm
        initialValues={laboratory}
        onSubmit={handleUpdate}
      />
    </div>
  );
};

export default EditLaboratoryPage;