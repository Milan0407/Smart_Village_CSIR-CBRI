export default function ContactSection({
  formData,
  handleChange,
}) {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Contact Information
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Contact Person */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Contact Person
          </label>

          <input
            type="text"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            placeholder="Village Head / Officer"
            className="w-full rounded-md border px-3 py-2"
          />
        </div>

        {/* Designation */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Designation
          </label>

          <input
            type="text"
            name="contactDesignation"
            value={formData.contactDesignation}
            onChange={handleChange}
            placeholder="Village Pradhan"
            className="w-full rounded-md border px-3 py-2"
          />
        </div>

        {/* Phone */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Contact Number
          </label>

          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className="w-full rounded-md border px-3 py-2"
          />
        </div>

        {/* Email */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="village@example.com"
            className="w-full rounded-md border px-3 py-2"
          />
        </div>

        {/* Website */}

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Website
          </label>

          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://example.com"
            className="w-full rounded-md border px-3 py-2"
          />
        </div>
      </div>
    </div>
  );
}