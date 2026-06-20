const ContactLocation = ({
  data = {},
}) => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold">
          {data.heading}
        </h2>

        <p className="mt-4">
          Map integration later
        </p>

      </div>
    </section>
  );
};

export default ContactLocation;