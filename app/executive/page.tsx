import Hero from "@/components/Hero";
import WhoSection from "@/components/WhoSection";
import BlueprintSection from "@/components/BlueprintSection";
import CoachSection from "@/components/CoachSection";
import FaqSection from "@/components/FaqSection";
import FunnelPopup from "@/components/FunnelPopup";
import Footer from "@/components/Footer";

export default function ExecutivePage() {
  return (
    <main>
      <FunnelPopup />
      <Hero />
      <WhoSection />
      <BlueprintSection />
      <CoachSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
