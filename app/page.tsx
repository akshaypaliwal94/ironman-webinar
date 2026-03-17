import Hero from "@/components/Hero";
import WhoSection from "@/components/WhoSection";
import BlueprintSection from "@/components/BlueprintSection";
import CoachSection from "@/components/CoachSection";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoSection />
      <BlueprintSection />
      <CoachSection />
      <FaqSection />
    </main>
  );
}
