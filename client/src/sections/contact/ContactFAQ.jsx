const ContactFAQ = ({
  data = {},
}) => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold">
          {data.heading}
        </h2>

        <div className="mt-6 space-y-4">
          {data.items?.map(
            (faq, index) => (
              <div
                key={index}
              >
                <h4 className="font-semibold">
                  {faq.question}
                </h4>

                <p>
                  {faq.answer}
                </p>
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
};

export default ContactFAQ;