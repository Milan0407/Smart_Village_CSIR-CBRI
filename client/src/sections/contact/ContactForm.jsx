import { useState } from "react";
import { sendContactMessage } from "../../services/contact.service";
import SmartTextRenderer
  from "../../components/common/SmartTextRenderer";

const ContactForm = ({ data = {} }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await sendContactMessage(formData);

      setSuccess("Your message has been sent successfully.");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
setError(
  err?.response?.data?.errors?.[0]?.message ||
  err?.response?.data?.message ||
  "Failed to send message."
);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2">
          {data.heading}
        </h2>

        {data.description && (
          <SmartTextRenderer
            text={data.description}
            className="mb-6 max-w-none"
          />
        )}

        {success && (
          <div className="mb-4 rounded bg-green-100 border border-green-300 px-4 py-3 text-green-700">
            {success}
          </div>
        )}

        {error && (
          <div className="mb-4 rounded bg-red-100 border border-red-300 px-4 py-3 text-red-700">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded p-3"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded p-3"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border rounded p-3"
            required
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded p-3"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded bg-blue-700 px-6 py-3 text-white transition hover:bg-blue-800 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
