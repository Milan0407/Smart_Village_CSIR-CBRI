import { useOutletContext } from "react-router-dom";

import AboutSection from "./components/AboutSection";
import HighlightsSection from "./components/HighlightsSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";

const VillageInfoPage = () => {
  const {
    village,
    profile,
    loading,
  } = useOutletContext();

  return (
    <div className="space-y-8">

      <AboutSection
        profile={profile}
        loading={loading}
      />

      <HighlightsSection
        villageId={village?._id}
      />

<GallerySection
  images={
    profile?.galleryImages || []
  }
  loading={loading}
/>

<ContactSection
  profile={profile}
/>

    </div>
  );
};

export default VillageInfoPage;
