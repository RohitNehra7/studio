
import { HeroSection } from '@/components/home/hero-section';
import { OurApproach } from '@/components/home/our-approach-section';
import { ContactCallToAction } from '@/components/home/contact-cta-section';

export default function HomePage() {
  return (
    <div className="animate-in fade-in duration-500">
      <HeroSection />
      <OurApproach />
      <ContactCallToAction />
    </div>
  );
}
