import Hero from "@/components/homepage/Hero";
import Founders from "@/components/homepage/Founders";
import WelcomeSection from "@/components/homepage/WelcomeSection";
import CastleMap from "@/components/kingdom-map/CastleMap";
import PageFrame from "@/components/layout/PageFrame";

export default function Home() {
  return (
    <PageFrame>
      <Hero />
      <Founders />
      <WelcomeSection />
      <CastleMap />
    </PageFrame>
  );
}