import { Controller, useFormContext } from "react-hook-form";

import MediaUploader from "../../common/MediaUploader";

const FeaturedImageSection = () => {
  const { control } = useFormContext();

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Featured Image
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Upload the primary image for this event.
        </p>
      </div>

      <Controller
        name="featuredImage"
        control={control}
        render={({ field }) => (
          <MediaUploader
            label="Featured Image"
            multiple={false}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
    </div>
  );
};

export default FeaturedImageSection;