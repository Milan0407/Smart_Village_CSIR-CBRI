const AboutSection = ({ overview }) => {
  return (
    <section className="bg-white rounded-xl border shadow-sm p-8">
      <h2 className="text-2xl font-bold mb-4">
        About Village
      </h2>

      <p className="text-slate-700 leading-8">
        {overview}
      </p>
    </section>
  );
};

export default AboutSection;