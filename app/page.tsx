import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import Services from "@/components/Services";
import Conditions from "@/components/Conditions";
import MeetSpecialist from "@/components/MeetSpecialist";
import MeetTeam from "@/components/MeetTeam";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Services />
      <Conditions />
      <MeetSpecialist />
      <MeetTeam />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}
