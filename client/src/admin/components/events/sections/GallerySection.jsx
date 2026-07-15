import { Controller, useFormContext } from "react-hook-form";

import MediaUploader from "../../common/MediaUploader";

const GallerySection = () => {
  const { control } = useFormContext();

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Gallery Images
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Upload one or more images for the event gallery.
        </p>
      </div>

      <Controller
        name="gallery"
        control={control}
        render={({ field }) => (
          <MediaUploader
            label="Gallery Images"
            multiple
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
    </div>
  );
};

export default GallerySection;