const ContactInformation = ({
  data = {},
}) => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold">
          Contact Information
        </h2>

        <p className="mt-4">
          {data.address}
        </p>

        <p>{data.email}</p>

        <p>{data.phone}</p>

      </div>
    </section>
  );
};

export default ContactInformation;