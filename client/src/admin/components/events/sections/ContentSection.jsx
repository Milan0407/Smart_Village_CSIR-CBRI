import TextareaField from "../../common/form/TextareaField";

const ContentSection = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Event Content
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Add a summary and detailed description for this event.
        </p>
      </div>

      <div className="space-y-6">
        <TextareaField
          name="shortDescription"
          label="Short Description"
          rows={4}
          placeholder="Write a short summary..."
        />

        <TextareaField
          name="description"
          label="Full Description"
          rows={10}
          placeholder="Write the complete event details..."
        />
      </div>
    </div>
  );
};

export default ContentSection;