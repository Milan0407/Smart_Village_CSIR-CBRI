import ParticipatingLabsList
  from "../../sections/participatingLabs/ParticipatingLabsList";

const ParticipatingLabsPageRenderer =
  ({
    sections,
  }) => {
    return (
      <>
        {sections.map(
          (
            section
          ) => {
            switch (
              section.sectionType
            ) {
              case "PARTICIPATING_LABS_LIST":
  return (
    <ParticipatingLabsList
      key={section._id}
    />
  );
              default:
                return null;
            }
          }
        )}
      </>
    );
  };

export default
  ParticipatingLabsPageRenderer;