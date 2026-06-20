import ParticipatingLabsHero
  from "../../sections/participatingLabs/ParticipatingLabsHero";

import ParticipatingLabsOverview
  from "../../sections/participatingLabs/ParticipatingLabsOverview";

import ParticipatingLabsList
  from "../../sections/participatingLabs/ParticipatingLabsList";

import ParticipatingLabsResearch
  from "../../sections/participatingLabs/ParticipatingLabsResearch";

import ParticipatingLabsContributions
  from "../../sections/participatingLabs/ParticipatingLabsContributions";

import ParticipatingLabsContact
  from "../../sections/participatingLabs/ParticipatingLabsContact";

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
              case "PARTICIPATING_LABS_HERO":
                return (
                  <ParticipatingLabsHero
                    key={section._id}
                    data={section.content}
                  />
                );

              case "PARTICIPATING_LABS_OVERVIEW":
                return (
                  <ParticipatingLabsOverview
                    key={section._id}
                    data={section.content}
                  />
                );

              case "PARTICIPATING_LABS_LIST":
                return (
                  <ParticipatingLabsList
                    key={section._id}
                    data={section.content}
                  />
                );

              case "PARTICIPATING_LABS_RESEARCH":
                return (
                  <ParticipatingLabsResearch
                    key={section._id}
                    data={section.content}
                  />
                );

              case "PARTICIPATING_LABS_CONTRIBUTIONS":
                return (
                  <ParticipatingLabsContributions
                    key={section._id}
                    data={section.content}
                  />
                );

              case "PARTICIPATING_LABS_CONTACT":
                return (
                  <ParticipatingLabsContact
                    key={section._id}
                    data={section.content}
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