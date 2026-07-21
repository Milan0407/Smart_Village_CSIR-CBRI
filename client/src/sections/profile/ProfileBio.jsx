import SmartTextRenderer
  from "../../components/common/SmartTextRenderer";

const ProfileBio = ({
  data,
}) => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-12">

          <span
            className="
              text-blue-600
              uppercase
              tracking-widest
              font-semibold
            "
          >
            Biography
          </span>

          <h2
            className="
              text-4xl
              font-bold
              mt-3
            "
          >
            {data?.heading}
          </h2>

        </div>

        <div
          className="
            bg-white
            rounded-2xl
            p-10
            shadow-sm
          "
        >
          <SmartTextRenderer
            text={data?.description}
            className="max-w-none"
          />
        </div>

      </div>

    </section>
  );
};

export default ProfileBio;
