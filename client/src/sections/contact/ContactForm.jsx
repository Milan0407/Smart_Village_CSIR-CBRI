const ContactForm = ({
  data = {},
}) => {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-6">
          {data.heading}
        </h2>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Name"
            className="w-full border p-3"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full border p-3"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-blue-700 text-white rounded"
          >
            Submit
          </button>

        </form>

      </div>
    </section>
  );
};

export default ContactForm;