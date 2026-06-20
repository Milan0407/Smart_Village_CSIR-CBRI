import SmartVillageHero
  from "../../sections/smartVillage/SmartVillageHero";

import SmartVillageOverview
  from "../../sections/smartVillage/SmartVillageOverview";

import SmartVillageObjectives
  from "../../sections/smartVillage/SmartVillageObjectives";

import SmartVillageFocusAreas
  from "../../sections/smartVillage/SmartVillageFocusAreas";

import SmartVillageFramework
  from "../../sections/smartVillage/SmartVillageFramework";

import SmartVillageImpact
  from "../../sections/smartVillage/SmartVillageImpact";

import SmartVillageVillages
  from "../../sections/smartVillage/SmartVillageVillages";

const SmartVillagePageRenderer =
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
              case "SMART_VILLAGE_HERO":
                return (
                  <SmartVillageHero
                    key={section._id}
                    data={section.content}
                  />
                );

              case "SMART_VILLAGE_OVERVIEW":
                return (
                  <SmartVillageOverview
                    key={section._id}
                    data={section.content}
                  />
                );

              case "SMART_VILLAGE_OBJECTIVES":
                return (
                  <SmartVillageObjectives
                    key={section._id}
                    data={section.content}
                  />
                );

              case "SMART_VILLAGE_FOCUS_AREAS":
                return (
                  <SmartVillageFocusAreas
                    key={section._id}
                    data={section.content}
                  />
                );

              case "SMART_VILLAGE_FRAMEWORK":
                return (
                  <SmartVillageFramework
                    key={section._id}
                    data={section.content}
                  />
                );

              case "SMART_VILLAGE_IMPACT":
                return (
                  <SmartVillageImpact
                    key={section._id}
                    data={section.content}
                  />
                );

              case "SMART_VILLAGE_VILLAGES":
                return (
                  <SmartVillageVillages
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
  SmartVillagePageRenderer;