import InputField from "../../common/form/InputField";
import TextareaField from "../../common/form/TextareaField";

const SeoSection = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900">
          SEO
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Improve search engine visibility.
        </p>
      </div>

      <div className="space-y-5">
        <InputField
          name="seoTitle"
          label="Meta Title"
          placeholder="Enter meta title"
        />

        <TextareaField
          name="seoDescription"
          label="Meta Description"
          rows={4}
          placeholder="Enter meta description"
        />

        <InputField
          name="seoKeywords"
          label="Keywords"
          placeholder="health, education, village..."
        />
      </div>
    </div>
  );
};

export default SeoSection;