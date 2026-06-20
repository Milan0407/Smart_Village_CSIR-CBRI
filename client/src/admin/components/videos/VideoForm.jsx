import {
  useState,
} from "react";

const VideoForm = ({
  initialData = {},
  onSubmit,
  loading = false,
}) => {

  const [formData,
    setFormData] =
    useState({
      title:
        initialData.title || "",

      youtubeUrl:
        initialData.youtubeUrl || "",

      description:
        initialData.description || "",

      displayOrder:
        initialData.displayOrder || 0,

      isActive:
        initialData.isActive ?? true,
    });

const handleChange = (
  e
) => {
  const {
    name,
    value,
    type,
    checked,
  } = e.target;

  setFormData(
    (prev) => ({
      ...prev,

      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
          ? Number(value)
          : value,
    })
  );
};

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      await onSubmit(
        formData
      );
    };

  return (

    <form
      onSubmit={
        handleSubmit
      }
      className="space-y-6"
    >

      <div>

        <label className="block mb-2 font-medium">
          Title
        </label>

        <input
          type="text"
          name="title"
          value={
            formData.title
          }
          onChange={
            handleChange
          }
          className="
            w-full
            border
            rounded-lg
            p-3
          "
          required
        />

      </div>

      <div>

        <label className="block mb-2 font-medium">
          YouTube URL
        </label>

        <input
          type="url"
          name="youtubeUrl"
          value={
            formData.youtubeUrl
          }
          onChange={
            handleChange
          }
          className="
            w-full
            border
            rounded-lg
            p-3
          "
          required
        />

      </div>

      <div>

        <label className="block mb-2 font-medium">
          Description
        </label>

        <textarea
          rows="4"
          name="description"
          value={
            formData.description
          }
          onChange={
            handleChange
          }
          className="
            w-full
            border
            rounded-lg
            p-3
          "
        />

      </div>

      <div>

        <label className="block mb-2 font-medium">
          Display Order
        </label>

        <input
          type="number"
          name="displayOrder"
          value={
            formData.displayOrder
          }
          onChange={
            handleChange
          }
          className="
            w-full
            border
            rounded-lg
            p-3
          "
        />

      </div>

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          name="isActive"
          checked={
            formData.isActive
          }
          onChange={
            handleChange
          }
        />

        <label>
          Active
        </label>

      </div>

      <button
        type="submit"
        disabled={
          loading
        }
        className="
          px-6
          py-3
          bg-blue-600
          text-white
          rounded-lg
        "
      >
        {loading
          ? "Saving..."
          : "Save Video"}
      </button>

    </form>
  );
};

export default VideoForm;