const fields = [
  {
    key: "overview",
    label: "Village Overview",
    rows: 5,
  },
  {
    key: "history",
    label: "Village History",
    rows: 5,
  },
  {
    key: "geography",
    label: "Geography",
    rows: 4,
  },
  {
    key: "climate",
    label: "Climate",
    rows: 4,
  },
  {
    key: "culture",
    label: "Culture & Heritage",
    rows: 5,
  },
  {
    key: "strengths",
    label: "Strengths",
    rows: 4,
  },
  {
    key: "challenges",
    label: "Challenges",
    rows: 4,
  },
  {
    key: "opportunities",
    label: "Opportunities",
    rows: 4,
  },
];

export default function InformationSection({
  formData,
  handleChange,
}) {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Village Information
      </h2>

      <div className="space-y-6">
        {fields.map((field) => (
          <div key={field.key}>
            <label className="mb-2 block text-sm font-medium">
              {field.label}
            </label>

            <textarea
              name={field.key}
              rows={field.rows}
              value={formData[field.key]}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2"
              placeholder={`Enter ${field.label}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}