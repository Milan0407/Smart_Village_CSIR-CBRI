import AboutMission
  from "../../sections/mission/AboutMission";

import MissionObjectives
  from "../../sections/mission/MissionObjectives";

import CBRISection
  from "../../sections/cbri/CBRISection";

import AboutVision from "../../sections/about/AboutVision";
import AboutValues from "../../sections/about/AboutValues";

import AboutGallery from "../../sections/about/AboutGallery";
import AboutOverview from "../../sections/about/AboutOverview";
import AboutHistory from "../../sections/about/AboutHistory";

import AboutQuickLinks
  from "../../sections/about/AboutQuickLinks";

const AboutPageRenderer = ({
  sections,
}) => {
  return (
    <>
      {sections.map(
        (section) => {
          switch (
            section.sectionType
          ) {


  case "ABOUT_GALLERY":
  return (
    <AboutGallery
      key={section._id}
      data={section.content}
    />
  );

case "ABOUT_OVERVIEW":
  return (
    <AboutOverview
      key={section._id}
      data={section.content}
    />
  );

case "ABOUT_HISTORY":
  return (
    <AboutHistory
      key={section._id}
      data={section.content}
    />
  );



            case "ABOUT_VALUES":
  return (
    <AboutValues
      key={section._id}
      data={section.content}
    />
  );

            case "ABOUT_OBJECTIVES":
              return (
                <MissionObjectives
                  key={
                    section._id
                  }
                  data={
                    section.content
                  }
                />
              );

              case "ABOUT_QUICK_LINKS":
  return (
    <AboutQuickLinks
      key={section._id}
      data={section.content}
    />
  );  

            case "ABOUT_CBRI":
              return (
                <CBRISection
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

export default AboutPageRenderer;