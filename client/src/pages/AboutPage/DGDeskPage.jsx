import { useEffect, useState } from "react";

import { getPageBySlug }
  from "../../services/cms.service";

import ProfileHero
  from "../../sections/profile/ProfileHero";

import ProfileMessage
  from "../../sections/profile/ProfileMessage";

import ProfileBio
  from "../../sections/profile/ProfileBio";

const DGDeskPage = () => {
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
            "dg-desk"
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
      {sections.map(
        (section) => {
          switch (
            section.sectionType
          ) {
            case "PROFILE_HERO":
              return (
                <ProfileHero
                  key={
                    section._id
                  }
                  data={
                    section.content
                  }
                />
              );

            case "PROFILE_MESSAGE":
              return (
                <ProfileMessage
                  key={
                    section._id
                  }
                  data={
                    section.content
                  }
                />
              );

            case "PROFILE_BIO":
              return (
                <ProfileBio
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

export default DGDeskPage;