import Navbar from "../../components/common/Navbar/Navbar";
import HeroSection from "../../sections/hero/HeroSection";
import AboutMission from "../../sections/mission/AboutMission";
import MissionObjectives from "../../sections/mission/MissionObjectives";
import ImpactStatistics from "../../sections/mission/ImpactStatistics";
import CBRISection from "../../sections/cbri/CBRISection";
import LatestUpdates from "../../sections/updates/LatestUpdates";
import PoliciesSection from "../../sections/policies/PoliciesSection";
import VillagesSection from "../../sections/villages/VillagesSection";
import Footer from "../../components/common/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <HeroSection />

      <AboutMission />

      <MissionObjectives />

      <ImpactStatistics />

      <CBRISection />

      <LatestUpdates />

      <PoliciesSection />

      <VillagesSection />

      <Footer />
    </div>
  );
};

export default HomePage;