import {
  useEffect,
  useState,
} from "react";

import {
  getAllMedia,
} from "../../services/media.service";

import {
  getAllSuccessStoryVillages,
} from "../../services/successStoryVillage.service";

const SuccessStoryForm = ({
  initialValues,
  onSubmit,
}) => {
  const [formData, setFormData] =
    useState(initialValues);

  const [media, setMedia] =
    useState([]);

  const [villages, setVillages] =
    useState([]);

  useEffect(() => {
    setFormData(initialValues);
  }, [initialValues]);

  useEffect(() => {
    const loadData =
      async () => {
        try {
          const [
            mediaData,
            villagesData,
          ] = await Promise.all([
            getAllMedia(),
            getAllSuccessStoryVillages(),
          ]);

          setMedia(mediaData);
          setVillages(villagesData);
        } catch (error) {
          console.error(error);
        }
      };

    loadData();
  }, []);

  const handleChange =
    (e) => {
      const {
        name,
        value,
      } = e.target;

      setFormData({
        ...formData,
        [name]:
          name === "beneficiaries"
            ? Number(value)
            : value,
      });
    };

  const handleGalleryChange =
    (e) => {
      const selectedValues =
        Array.from(
          e.target.selectedOptions
        ).map(
          (option) => option.value
        );

      setFormData({
        ...formData,
        galleryImages:
          selectedValues,
      });
    };

  const handleSubmit =
    (e) => {
      e.preventDefault();
      onSubmit(formData);
    };

  const imageMedia =
    media.filter(
      (item) =>
        item.resourceType ===
        "image"
    );

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <input
        name="slug"
        placeholder="Slug"
        value={formData.slug}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <div>
        <label className="block mb-2">
          Village
        </label>

        <select
          name="village"
          value={
            formData.village || ""
          }
          onChange={handleChange}
          className="w-full border p-3 rounded"
        >
          <option value="">
            Select Village
          </option>

          {villages.map(
            (village) => (
              <option
                key={village._id}
                value={village._id}
              >
                {village.name}
              </option>
            )
          )}
        </select>
      </div>

      <div>
        <label className="block mb-2">
          Featured Image
        </label>

        <select
          name="featuredImage"
          value={
            formData.featuredImage ||
            ""
          }
          onChange={handleChange}
          className="w-full border p-3 rounded"
        >
          <option value="">
            Select Image
          </option>

          {imageMedia.map(
            (item) => (
              <option
                key={item._id}
                value={item._id}
              >
                {item.originalName}
              </option>
            )
          )}
        </select>
      </div>

      <div>
        <label className="block mb-2">
          Gallery Images
        </label>

        <select
          multiple
          value={
            formData.galleryImages ||
            []
          }
          onChange={
            handleGalleryChange
          }
          className="w-full border p-3 rounded min-h-[160px]"
        >
          {imageMedia.map(
            (item) => (
              <option
                key={item._id}
                value={item._id}
              >
                {item.originalName}
              </option>
            )
          )}
        </select>

        <p className="text-sm text-gray-500 mt-1">
          Hold Ctrl / Cmd to
          select multiple
          images.
        </p>
      </div>

      <input
        name="videoUrl"
        placeholder="Video URL"
        value={
          formData.videoUrl || ""
        }
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <textarea
        name="summary"
        placeholder="Summary"
        value={
          formData.summary || ""
        }
        onChange={handleChange}
        rows="4"
        className="w-full border p-3 rounded"
      />

      <textarea
        name="story"
        placeholder="Story"
        value={
          formData.story || ""
        }
        onChange={handleChange}
        rows="10"
        className="w-full border p-3 rounded"
      />

      <textarea
        name="impact"
        placeholder="Impact"
        value={
          formData.impact || ""
        }
        onChange={handleChange}
        rows="4"
        className="w-full border p-3 rounded"
      />

      <input
        name="beneficiaries"
        type="number"
        placeholder="Beneficiaries"
        value={
          formData.beneficiaries ??
          0
        }
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <div>
        <label className="block mb-2">
          Status
        </label>

        <select
          name="status"
          value={
            formData.status ||
            "DRAFT"
          }
          onChange={handleChange}
          className="w-full border p-3 rounded"
        >
          <option value="DRAFT">
            Draft
          </option>
          <option value="PUBLISHED">
            Published
          </option>
          <option value="ARCHIVED">
            Archived
          </option>
        </select>
      </div>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={
            formData.isFeatured ||
            false
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              isFeatured:
                e.target.checked,
            })
          }
        />
        Featured Story
      </label>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Save Story
      </button>
    </form>
  );
};

export default SuccessStoryForm;