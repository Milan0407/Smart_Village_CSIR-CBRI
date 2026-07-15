import CheckboxField from "../../common/form/CheckboxField";

const PublishSection = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Publishing
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Configure publishing settings.
        </p>
      </div>

      <div className="space-y-4">
        <CheckboxField
          name="isFeatured"
          label="Featured Event"
          description="Display this event in featured sections."
        />

        <CheckboxField
          name="published"
          label="Publish Immediately"
          description="Make this event visible on the public website."
        />
      </div>
    </div>
  );
};

export default PublishSection;