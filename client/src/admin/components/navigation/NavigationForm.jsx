import { useState } from "react";

const NavigationForm = ({
  initialValues,
  onSubmit,
}) => {
  const [formData,
    setFormData] =
    useState(
      initialValues
    );

  const handleChange =
    (e) => {
      const {
        name,
        value,
        type,
        checked,
      } = e.target;

      setFormData({
        ...formData,
        [name]:
          type === "checkbox"
            ? checked
            : value,
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
        name="label"
        placeholder="Label"
        value={
          formData.label
        }
        onChange={
          handleChange
        }
        className="w-full border p-3 rounded"
      />

      <input
        name="path"
        placeholder="Path"
        value={
          formData.path
        }
        onChange={
          handleChange
        }
        className="w-full border p-3 rounded"
      />

      <select
        name="menuType"
        value={
          formData.menuType
        }
        onChange={
          handleChange
        }
        className="w-full border p-3 rounded"
      >
        <option value="INTERNAL">
          Internal
        </option>

        <option value="EXTERNAL">
          External
        </option>
      </select>

      <input
        name="order"
        type="number"
        placeholder="Order"
        value={
          formData.order
        }
        onChange={
          handleChange
        }
        className="w-full border p-3 rounded"
      />

      <div className="flex gap-8">

        <label>

          <input
            type="checkbox"
            name="isVisible"
            checked={
              formData.isVisible
            }
            onChange={
              handleChange
            }
          />

          <span className="ml-2">
            Visible
          </span>

        </label>

        <label>

          <input
            type="checkbox"
            name="openInNewTab"
            checked={
              formData.openInNewTab
            }
            onChange={
              handleChange
            }
          />

          <span className="ml-2">
            Open In New Tab
          </span>

        </label>

      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Save Navigation
      </button>

    </form>
  );
};

export default NavigationForm;