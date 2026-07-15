import {
  User,
  Briefcase,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

const ContactSection = ({
  profile,
}) => {
  return (
    <section className="bg-white rounded-xl border shadow-sm p-8">

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-slate-900">
          Contact Information
        </h2>

        <p className="text-slate-500 mt-2">
          Official contact details of the village administration.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <InfoCard
          icon={<User size={20} />}
          label="Contact Person"
          value={profile?.contactPerson}
        />

        <InfoCard
          icon={<Briefcase size={20} />}
          label="Designation"
          value={profile?.contactDesignation}
        />

        <InfoCard
          icon={<Phone size={20} />}
          label="Phone Number"
          value={profile?.contactNumber}
        />

        <InfoCard
          icon={<Mail size={20} />}
          label="Email"
          value={profile?.email}
          link={
            profile?.email
              ? `mailto:${profile.email}`
              : null
          }
        />

        <InfoCard
          icon={<Globe size={20} />}
          label="Website"
          value={profile?.website}
          link={profile?.website}
        />

      </div>

    </section>
  );
};

const InfoCard = ({
  icon,
  label,
  value,
  link,
}) => {
  return (
    <div
      className="
        border
        rounded-xl
        p-5
        hover:shadow-md
        transition
      "
    >
      <div className="flex items-center gap-3 mb-3">

        <div className="bg-blue-100 text-blue-700 p-2 rounded-lg">
          {icon}
        </div>

        <h3 className="font-semibold text-slate-800">
          {label}
        </h3>

      </div>

      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="
            text-blue-700
            hover:underline
            break-all
          "
        >
          {value}
        </a>
      ) : (
        <p className="text-slate-600 break-all">
          {value || "Not Available"}
        </p>
      )}
    </div>
  );
};

export default ContactSection;