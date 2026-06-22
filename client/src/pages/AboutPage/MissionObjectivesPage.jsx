import { useEffect, useState } from "react";

import { getPageBySlug }
  from "../../services/cms.service";

import Header
  from "../../components/common/Header/Header";

import Navbar
  from "../../components/common/Navbar/Navbar";

import Footer
  from "../../components/common/Footer";

import ObjectivesHero
  from "../../sections/missionObjectives/ObjectivesHero";

import ObjectivesContent
  from "../../sections/missionObjectives/ObjectivesContent";

import ObjectivesFocusAreas
  from "../../sections/missionObjectives/ObjectivesFocusAreas";

import ObjectivesOutcomes
  from "../../sections/missionObjectives/ObjectivesOutcomes";

const MissionObjectivesPage =
  () => {
    const [
      sections,
      setSections,
    ] = useState([]);

    const [
      loading,
      setLoading,
    ] = useState(true);

    useEffect(() => {
      loadPage();
    }, []);

    const loadPage =
      async () => {
        try {
          const page =
            await getPageBySlug(
              "mission-objectives"
            );

          setSections(
            page.sections || []
          );
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    if (loading) {
      return (
        <div className="py-20 text-center">
          Loading...
        </div>
      );
    }

   return (
  <>
    <Header />
    <Navbar />

    {sections.map(
      (section) => {
        switch (
          section.sectionType
        ) {

          case "OBJECTIVES_HERO":
            return (
              <ObjectivesHero
                key={section._id}
                data={section.content}
              />
            );

          case "OBJECTIVES_CONTENT":
            return (
              <ObjectivesContent
                key={section._id}
                data={section.content}
              />
            );

          case "OBJECTIVES_FOCUS_AREAS":
            return (
              <ObjectivesFocusAreas
                key={section._id}
                data={section.content}
              />
            );

          case "OBJECTIVES_OUTCOMES":
            return (
              <ObjectivesOutcomes
                key={section._id}
                data={section.content}
              />
            );

          default:
            return null;
        }
      }
    )}

    <Footer />
  </>
);
  };

export default MissionObjectivesPage;