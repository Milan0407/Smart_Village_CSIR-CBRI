import { useEffect, useState } from "react";

import BasicInformationSection from "./BasicInformationSection";
import ObjectivesSection from "./ObjectivesSection";
import FinancialSection from "./FinancialSection";
import TimelineSection from "./TimelineSection";
import PublishSection from "./PublishSection";

const defaultValues = {
  village: "",

  title: "",
  category: "OTHER",
  description: "",

  objectives: [""],

  budget: 0,
  fundingAgency: "",
  implementingAgency: "",

  status: "PLANNED",
  priority: "MEDIUM",
  progress: 0,

  beneficiaries: 0,
  sdgGoals: [],

  startDate: "",
  targetDate: "",
  completedDate: "",

  isPublished: true,
};

const normalizeDate = (value) => {
  if (!value) return "";

  return String(value).split("T")[0];
};

const normalizeValues = (data = {}) => ({
  ...defaultValues,
  ...data,

  title: data.title ?? "",

  description: data.description ?? "",

  village:
    data.village?._id ??
    data.village ??
    "",

  objectives:
    data.objectives?.length
      ? data.objectives
      : [""],

  budget: data.budget ?? 0,

  fundingAgency:
    data.fundingAgency ?? "",

  implementingAgency:
    data.implementingAgency ?? "",

  progress:
    data.progress ?? 0,

  beneficiaries:
    data.beneficiaries ?? 0,

  sdgGoals:
    data.sdgGoals ?? [],

  startDate:
    normalizeDate(data.startDate),

  targetDate:
    normalizeDate(data.targetDate),

  completedDate:
    normalizeDate(
      data.completedDate
    ),

  isPublished:
    data.isPublished ?? true,
});

const DevelopmentPlanForm = ({
  initialValues,
  onSubmit,
  loading = false,
}) => {

  const [values, setValues] =
    useState(
      normalizeValues(
        initialValues
      )
    );

  useEffect(() => {
    setValues(
      normalizeValues(
        initialValues
      )
    );
  }, [initialValues]);

  const handleChange = (
    field,
    value
  ) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit?.(values);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <BasicInformationSection
        values={values}
        onChange={handleChange}
      />

      <ObjectivesSection
        values={values}
        setValues={setValues}
      />

      <FinancialSection
        values={values}
        onChange={handleChange}
      />

      <TimelineSection
        values={values}
        onChange={handleChange}
      />

      <PublishSection
        values={values}
        onChange={handleChange}
      />

      <div className="flex justify-end gap-4 pt-4">

        <button
          type="button"
          className="
            px-6
            py-2.5
            rounded-lg
            border
            border-slate-300
            hover:bg-slate-100
          "
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="
            px-6
            py-2.5
            rounded-lg
            bg-blue-600
            hover:bg-blue-700
            text-white
            disabled:opacity-50
          "
        >
          {loading
            ? "Saving..."
            : "Save Development Plan"}
        </button>

      </div>
    </form>
  );
};

export default DevelopmentPlanForm;