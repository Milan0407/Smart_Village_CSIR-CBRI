import {
  useEffect,
  useState,
} from "react";

import {
  getAllMedia,
} from "../../services/media.service";

const SuccessStoryForm = ({
  initialValues,
  onSubmit,
}) => {
  const [formData,
    setFormData] =
    useState(
      initialValues
    );

    const [media,
  setMedia] =
  useState([]);

  const handleChange =
    (e) => {
      const {
        name,
        value,
      } = e.target;

      setFormData({
        ...formData,
        [name]: value,
      });
    };

    useEffect(() => {
  const loadMedia =
    async () => {
      const data =
        await getAllMedia();

      setMedia(data);
    };

  loadMedia();
}, []);

  const handleSubmit =
    (e) => {
      e.preventDefault();

      onSubmit(
        formData
      );
    };

  return (
    <form
      onSubmit={
        handleSubmit
      }
      className="space-y-4"
    >

      <input
        name="title"
        placeholder="Title"
        value={
          formData.title
        }
        onChange={
          handleChange
        }
        className="w-full border p-3 rounded"
      />

      <input
        name="slug"
        placeholder="Slug"
        value={
          formData.slug
        }
        onChange={
          handleChange
        }
        className="w-full border p-3 rounded"
      />

      <input
  name="villageName"
  placeholder="Village Name"
  value={
    formData.villageName
  }
  onChange={
    handleChange
  }
  className="w-full border p-3 rounded"
/>


<div>

  <label className="block mb-2">
    Featured Image
  </label>

  <select
    name="featuredImage"
    value={
      formData.featuredImage || ""
    }
    onChange={
      handleChange
    }
    className="w-full border p-3 rounded"
  >

    <option value="">
      Select Image
    </option>

    {media
      .filter(
        (item) =>
          item.resourceType ===
          "image"
      )
      .map(
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

      <textarea
        name="summary"
        placeholder="Summary"
        value={
          formData.summary
        }
        onChange={
          handleChange
        }
        rows="4"
        className="w-full border p-3 rounded"
      />

      <textarea
        name="story"
        placeholder="story"
        value={formData.story}
        onChange={
          handleChange
        }
        rows="10"
        className="w-full border p-3 rounded"
      />

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