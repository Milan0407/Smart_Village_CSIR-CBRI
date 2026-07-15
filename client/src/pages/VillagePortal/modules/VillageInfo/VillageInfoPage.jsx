import { useOutletContext } from "react-router-dom";

import AboutSection from "./components/AboutSection";
import HistorySection from "./components/HistorySection";
import GeographySection from "./components/GeographySection";
import ClimateSection from "./components/ClimateSection";
import CultureSection from "./components/CultureSection";
import SWOTSection from "./components/SWOTSection";
import HighlightsSection from "./components/HighlightsSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";

const VillageInfoPage = () => {
  const {
    village,
    profile,
  } = useOutletContext();

   console.log(profile?.highlights);
  return (
    <div className="space-y-8">

      <AboutSection
        overview={profile?.overview}
      />

      <HistorySection
        history={profile?.history}
      />

      <GeographySection
        geography={profile?.geography}
      />

      <ClimateSection
        climate={profile?.climate}
      />

      <CultureSection
        culture={profile?.culture}
      />

      <SWOTSection
        strengths={profile?.strengths}
        challenges={profile?.challenges}
        opportunities={profile?.opportunities}
      />

      <HighlightsSection
        highlights={profile?.highlights}
      />

<GallerySection
  images={
    profile?.galleryImages || []
  }
/>

<ContactSection
  profile={profile}
/>

    </div>
  );
};

export default VillageInfoPage;