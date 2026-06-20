const ProfileBio = ({
  data,
}) => {
  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-5xl mx-auto px-6">

        <h2
          className="
            text-4xl
            font-bold
            text-center
            mb-10
          "
        >
          {data?.heading}
        </h2>

        <div
          className="
            bg-white
            p-10
            rounded-2xl
            shadow-sm
            text-slate-600
            leading-relaxed
          "
        >
          {data?.description}
        </div>

      </div>

    </section>
  );
};

export default ProfileBio;