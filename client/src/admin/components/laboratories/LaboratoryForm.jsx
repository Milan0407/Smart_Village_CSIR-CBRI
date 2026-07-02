import {
  useEffect,
  useState,
} from "react";

import {
  getAllMedia,
} from "../../services/media.service";

const LaboratoryForm = ({
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

  useEffect(() => {
    const loadMedia =
      async () => {
        const data =
          await getAllMedia();

        setMedia(data);
      };

    loadMedia();
  }, []);

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
        name="name"
        placeholder="Laboratory Name"
        value={
          formData.name
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

      <select
        name="type"
        value={
          formData.type
        }
        onChange={
          handleChange
        }
        className="w-full border p-3 rounded"
      >
        <option value="">
          Select Type
        </option>

        <option value="NODAL">
          Nodal
        </option>

        <option value="PARTICIPATING">
          Participating
        </option>
      </select>

      <div>

        <label className="block mb-2">
          Hero Image
        </label>

        <select
          name="heroImage"
          value={
            formData.heroImage || ""
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

      <input
        name="directorName"
        placeholder="Director Name"
        value={
          formData.directorName
        }
        onChange={
          handleChange
        }
        className="w-full border p-3 rounded"
      />

      <textarea
        name="overview"
        placeholder="Overview"
        rows="5"
        value={
          formData.overview
        }
        onChange={
          handleChange
        }
        className="w-full border p-3 rounded"
      />

      <textarea
        name="researchAreas"
        placeholder="Research Areas (comma separated)"
        rows="4"
        value={
          formData.researchAreas
        }
        onChange={
          handleChange
        }
        className="w-full border p-3 rounded"
      />

      <textarea
        name="contributions"
        placeholder="Contributions (comma separated)"
        rows="4"
        value={
          formData.contributions
        }
        onChange={
          handleChange
        }
        className="w-full border p-3 rounded"
      />

      <input
        name="address"
        placeholder="Address"
        value={
          formData.address
        }
        onChange={
          handleChange
        }
        className="w-full border p-3 rounded"
      />

      <input
        name="phone"
        placeholder="Phone"
        value={
          formData.phone
        }
        onChange={
          handleChange
        }
        className="w-full border p-3 rounded"
      />

      <input
        name="email"
        placeholder="Email"
        value={
          formData.email
        }
        onChange={
          handleChange
        }
        className="w-full border p-3 rounded"
      />

   <input
  name="website"
  placeholder="Website"
  value={formData.website}
  onChange={handleChange}
  className="w-full border p-3 rounded"
/>

<label className="flex items-center gap-2">
  <input
    type="checkbox"
    checked={formData.isPublished || false}
    onChange={(e) =>
      setFormData({
        ...formData,
        isPublished: e.target.checked,
      })
    }
  />
  Published
</label>

<button
  type="submit"
  className="bg-blue-600 text-white px-6 py-3 rounded"
>
  Save Laboratory
</button>

    </form>
  );
};

export default LaboratoryForm;