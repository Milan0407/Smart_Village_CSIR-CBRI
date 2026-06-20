import ContactHero from "../../sections/contact/ContactHero";
import ContactInformation from "../../sections/contact/ContactInformation";
import ContactForm from "../../sections/contact/ContactForm";
import ContactLocation from "../../sections/contact/ContactLocation";
import ContactFAQ from "../../sections/contact/ContactFAQ";

const ContactPageRenderer = ({
  sections,
}) => {
  return (
    <>
      {sections.map((section) => {
        switch (
          section.sectionType
        ) {
          case "CONTACT_HERO":
            return (
              <ContactHero
                key={section._id}
                data={section.content}
              />
            );

          case "CONTACT_INFORMATION":
            return (
              <ContactInformation
                key={section._id}
                data={section.content}
              />
            );

          case "CONTACT_FORM":
            return (
              <ContactForm
                key={section._id}
                data={section.content}
              />
            );

          case "CONTACT_LOCATION":
            return (
              <ContactLocation
                key={section._id}
                data={section.content}
              />
            );

          case "CONTACT_FAQ":
            return (
              <ContactFAQ
                key={section._id}
                data={section.content}
              />
            );

          default:
            return null;
        }
      })}
    </>
  );
};

export default ContactPageRenderer;