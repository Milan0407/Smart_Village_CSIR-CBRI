import {
  BadgeInfo,
  Building2,
  Landmark,
  Mail,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react";

const sanitizePhone = (value = "") =>
  value.replace(/[^\d+]/g, "");

const ContactSkeleton = () => (
  <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
    <div className="animate-pulse">
      <div className="h-8 w-72 rounded bg-slate-200" />
      <div className="mt-3 h-4 w-96 max-w-full rounded bg-slate-200" />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className="h-80 rounded-2xl bg-slate-100"
          />
        ))}
      </div>
    </div>
  </section>
);

const DetailRow = ({
  label,
  value,
}) => {
  if (!value) {
    return null;
  }

  return (
    <div className="grid grid-cols-[120px_1fr] gap-3 text-sm">
      <dt className="font-semibold text-slate-500">
        {label}
      </dt>
      <dd className="break-words font-medium text-slate-800">
        {value}
      </dd>
    </div>
  );
};

const ContactLine = ({
  icon: Icon,
  value,
  href,
}) => {
  if (!value) {
    return null;
  }

  const className =
    "flex items-start gap-3 break-words text-sm font-medium text-slate-700";

  const content = (
    <>
      <Icon
        size={18}
        className="mt-0.5 shrink-0 text-blue-700"
      />
      <span>{value}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${className} hover:text-blue-800 hover:underline`}
      >
        {content}
      </a>
    );
  }

  return (
    <p className={className}>
      {content}
    </p>
  );
};

const normalizeContacts = (profile) => {
  if (!profile) {
    return [];
  }

  if (
    Array.isArray(profile.contactPersons) &&
    profile.contactPersons.length > 0
  ) {
    return [...profile.contactPersons].sort(
      (a, b) => (a.displayOrder || 0) - (b.displayOrder || 0)
    );
  }

  const hasLegacyContact = [
    profile.contactPerson,
    profile.designation,
    profile.phone,
    profile.alternatePhone,
    profile.email,
    profile.officeAddress,
  ].some(Boolean);

  if (!hasLegacyContact) {
    return [];
  }

  return [
    {
      name: profile.contactPerson || "",
      designation: profile.designation || "",
      phone: profile.phone || "",
      alternatePhone: profile.alternatePhone || "",
      email: profile.email || "",
      officeAddress: profile.officeAddress || "",
      gramPanchayat: profile.gramPanchayat || "",
      block: profile.block || "",
      district: profile.district || "",
      state: profile.state || "",
      pinCode: profile.pinCode || "",
      displayOrder: 0,
    },
  ];
};

const ContactPersonCard = ({ contact }) => (
  <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
        <UserRound size={24} />
      </div>

      <div className="min-w-0">
        <h3 className="break-words text-xl font-bold text-slate-950">
          {contact.name || "Village Contact"}
        </h3>

        {contact.designation ? (
          <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-blue-800">
            <BadgeInfo size={16} />
            {contact.designation}
          </p>
        ) : null}
      </div>
    </div>

    <div className="mt-6 space-y-3">
      <ContactLine
        icon={Phone}
        value={contact.phone}
        href={
          contact.phone
            ? `tel:${sanitizePhone(contact.phone)}`
            : null
        }
      />

      <ContactLine
        icon={Phone}
        value={contact.alternatePhone}
        href={
          contact.alternatePhone
            ? `tel:${sanitizePhone(contact.alternatePhone)}`
            : null
        }
      />

      <ContactLine
        icon={Mail}
        value={contact.email}
        href={contact.email ? `mailto:${contact.email}` : null}
      />

      <ContactLine
        icon={MapPin}
        value={contact.officeAddress}
      />
    </div>

    <dl className="mt-6 space-y-3 rounded-xl bg-slate-50 p-4">
      <DetailRow
        label="Gram Panchayat"
        value={contact.gramPanchayat}
      />
      <DetailRow
        label="Block"
        value={contact.block}
      />
      <DetailRow
        label="District"
        value={contact.district}
      />
      <DetailRow
        label="State"
        value={contact.state}
      />
      <DetailRow
        label="PIN"
        value={contact.pinCode}
      />
    </dl>
  </article>
);

const ContactSection = ({ profile }) => {
  if (!profile) {
    return <ContactSkeleton />;
  }

  const contacts = normalizeContacts(profile);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-8">
        <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
          <Landmark size={17} />
          Village Administration
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          Contact Information
        </h2>

        <p className="mt-2 text-slate-500">
          Official contact persons for village administration and public communication.
        </p>
      </div>

      {contacts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
          <Building2
            size={34}
            className="mx-auto text-blue-700"
          />
          <p className="mt-3 font-semibold text-slate-800">
            Contact persons will be updated soon.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {contacts.map((contact, index) => (
            <ContactPersonCard
              key={contact._id || `${contact.name}-${index}`}
              contact={contact}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ContactSection;
