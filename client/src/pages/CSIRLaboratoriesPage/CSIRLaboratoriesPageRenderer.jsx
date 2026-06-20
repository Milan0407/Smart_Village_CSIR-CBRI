import CSIRLabsHero
  from "../../sections/csirLabs/CSIRLabsHero";

import CSIRLabsOverview
  from "../../sections/csirLabs/CSIRLabsOverview";

import CSIRLabsRole
  from "../../sections/csirLabs/CSIRLabsRole";

import CSIRLabsNetwork
  from "../../sections/csirLabs/CSIRLabsNetwork";

import CSIRLabsNodalPreview
  from "../../sections/csirLabs/CSIRLabsNodalPreview";

import CSIRLabsParticipatingPreview
  from "../../sections/csirLabs/CSIRLabsParticipatingPreview";

const CSIRLaboratoriesPageRenderer =
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
              case "CSIR_LABS_HERO":
                return (
                  <CSIRLabsHero
                    key={
                      section._id
                    }
                    data={
                      section.content
                    }
                  />
                );

              case "CSIR_LABS_OVERVIEW":
                return (
                  <CSIRLabsOverview
                    key={
                      section._id
                    }
                    data={
                      section.content
                    }
                  />
                );

              case "CSIR_LABS_ROLE":
                return (
                  <CSIRLabsRole
                    key={
                      section._id
                    }
                    data={
                      section.content
                    }
                  />
                );

              case "CSIR_LABS_NETWORK":
                return (
                  <CSIRLabsNetwork
                    key={
                      section._id
                    }
                    data={
                      section.content
                    }
                  />
                );

              case "CSIR_LABS_NODAL_PREVIEW":
                return (
                  <CSIRLabsNodalPreview
                    key={
                      section._id
                    }
                    data={
                      section.content
                    }
                  />
                );

              case "CSIR_LABS_PARTICIPATING_PREVIEW":
                return (
                  <CSIRLabsParticipatingPreview
                    key={
                      section._id
                    }
                    data={
                      section.content
                    }
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
  CSIRLaboratoriesPageRenderer;