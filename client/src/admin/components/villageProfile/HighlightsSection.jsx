export default function HighlightsSection({
  formData,
  setFormData,
}) {
  const addHighlight = () => {
    setFormData((prev) => ({
      ...prev,
      highlights: [
        ...prev.highlights,
        {
          title: "",
          value: "",
          icon: "",
        },
      ],
    }));
  };

  const updateHighlight = (
    index,
    field,
    value
  ) => {
    const updated = [...formData.highlights];

    updated[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      highlights: updated,
    }));
  };

  const removeHighlight = (index) => {
    setFormData((prev) => ({
      ...prev,
      highlights: prev.highlights.filter(
        (_, i) => i !== index
      ),
    }));
  };

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Highlights
        </h2>

        <button
          type="button"
          onClick={addHighlight}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          + Add Highlight
        </button>
      </div>

      {formData.highlights.length === 0 ? (
        <p className="text-sm text-gray-500">
          No highlights added yet.
        </p>
      ) : (
        <div className="space-y-4">
          {formData.highlights.map(
            (highlight, index) => (
              <div
                key={index}
                className="rounded-md border p-4"
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Title
                    </label>

                    <input
                      type="text"
                      value={highlight.title}
                      onChange={(e) =>
                        updateHighlight(
                          index,
                          "title",
                          e.target.value
                        )
                      }
                      className="w-full rounded border px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Value
                    </label>

                    <input
                      type="text"
                      value={highlight.value}
                      onChange={(e) =>
                        updateHighlight(
                          index,
                          "value",
                          e.target.value
                        )
                      }
                      className="w-full rounded border px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Icon
                    </label>

                    <input
                      type="text"
                      value={highlight.icon}
                      onChange={(e) =>
                        updateHighlight(
                          index,
                          "icon",
                          e.target.value
                        )
                      }
                      placeholder="Lucide icon name"
                      className="w-full rounded border px-3 py-2"
                    />
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() =>
                      removeHighlight(index)
                    }
                    className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}