const ProfileMessage = ({
  data,
}) => {
  return (
    <section className="py-20 bg-white">

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          grid
          lg:grid-cols-2
          gap-12
          items-center
        "
      >

        <div>

          <img
            src={
              data?.image ||
              "https://placehold.co/600x700"
            }
            alt={data?.name}
            className="
              w-full
              rounded-2xl
              shadow-xl
            "
          />

        </div>

        <div>

          <h2
            className="
              text-4xl
              font-bold
              text-slate-900
            "
          >
            {data?.name}
          </h2>

          <p
            className="
              text-blue-700
              font-semibold
              mt-3
              mb-6
            "
          >
            {data?.designation}
          </p>

          <div
            className="
              text-slate-600
              leading-relaxed
              text-lg
            "
          >
            {data?.message}
          </div>

        </div>

      </div>

    </section>
  );
};

export default ProfileMessage;