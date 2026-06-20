import HeroSection
  from "../../sections/hero/HeroSection";

import ImpactStatistics
  from "../../sections/mission/ImpactStatistics";


import LatestUpdates
  from "../../sections/updates/LatestUpdates";


  import AboutPreview
  from "../../sections/about/AboutPreview";


  import VideoSection
from "../../sections/videos/VideoSection";


const HomePageRenderer = ({
  sections,
}) => {
  return (
    <>
      {sections.map(
        (section) => {
          switch (
            section.sectionType
          ) {
            case "HERO":
              return (
                <HeroSection
                  key={
                    section._id
                  }
                  data={
                    section.content
                  }
                />
              );

                          case
              "LATEST_UPDATES":
              return (
                <LatestUpdates
                  key={
                    section._id
                  }
                  data={
                    section.content
                  }
                />
              );

case "ABOUT_PREVIEW":
  return (
    <VideoSection
      key={section._id}
    />
  );

            case
              "IMPACT_STATISTICS":
              return (
                <ImpactStatistics
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

export default HomePageRenderer;