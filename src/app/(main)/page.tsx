
import { HeroSection } from '@/components/home/hero-section';
import { OurApproach } from '@/components/home/our-approach-section';
import { ServicesSection } from '@/components/home/services-section';
import { ContactCallToAction } from '@/components/home/contact-cta-section';
import { StatsSection } from '@/components/home/stats-section';

export default function HomePage() {
  return (
    <div className="animate-in fade-in duration-500">
      <HeroSection />
      <StatsSection />
      <div className="relative z-10 bg-background">
        <ServicesSection />
        <OurApproach />
        <ContactCallToAction />
      </div>
    </div>
  );
}
