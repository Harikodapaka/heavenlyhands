import { AboutUs } from "@/components/AboutUs/AboutUs";
import { HeroContent } from "@/components/HeroContent/HeroContent";
import { OurMission } from "@/components/OurMission/OurMission";
import { ServicesCards } from "@/components/ServicesCards/ServicesCards";
import { WhyChooseUs } from "@/components/WhyChooseUs/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <HeroContent />
      <AboutUs />
      <ServicesCards />
      <OurMission />
      <WhyChooseUs />
    </>
  );
}
