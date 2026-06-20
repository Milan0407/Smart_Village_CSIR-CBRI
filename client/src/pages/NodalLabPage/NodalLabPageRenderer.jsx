import NodalLabHero
  from "../../sections/nodalLab/NodalLabHero";

import NodalLabOverview
  from "../../sections/nodalLab/NodalLabOverview";

import NodalLabResponsibilities
  from "../../sections/nodalLab/NodalLabResponsibilities";

import NodalLabResearchAreas
  from "../../sections/nodalLab/NodalLabResearchAreas";

import NodalLabProjects
  from "../../sections/nodalLab/NodalLabProjects";

import NodalLabAchievements
  from "../../sections/nodalLab/NodalLabAchievements";

import NodalLabContact
  from "../../sections/nodalLab/NodalLabContact";

const NodalLabPageRenderer =
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
              case "NODAL_LAB_HERO":
                return (
                  <NodalLabHero
                    key={
                      section._id
                    }
                    data={
                      section.content
                    }
                  />
                );

              case "NODAL_LAB_OVERVIEW":
                return (
                  <NodalLabOverview
                    key={
                      section._id
                    }
                    data={
                      section.content
                    }
                  />
                );

              case "NODAL_LAB_RESPONSIBILITIES":
                return (
                  <NodalLabResponsibilities
                    key={
                      section._id
                    }
                    data={
                      section.content
                    }
                  />
                );

              case "NODAL_LAB_RESEARCH_AREAS":
                return (
                  <NodalLabResearchAreas
                    key={
                      section._id
                    }
                    data={
                      section.content
                    }
                  />
                );

              case "NODAL_LAB_PROJECTS":
                return (
                  <NodalLabProjects
                    key={
                      section._id
                    }
                    data={
                      section.content
                    }
                  />
                );

              case "NODAL_LAB_ACHIEVEMENTS":
                return (
                  <NodalLabAchievements
                    key={
                      section._id
                    }
                    data={
                      section.content
                    }
                  />
                );

              case "NODAL_LAB_CONTACT":
                return (
                  <NodalLabContact
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
  NodalLabPageRenderer;