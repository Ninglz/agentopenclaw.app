import FaqSection from '@/components/blocks/faqs/faqs';
import Container from '@/components/layout/container';
import Pricing from '@/components/custom/Pricing';

export default async function PricingPage() {
  return (
    <div className="flex flex-col gap-0">
      <div className="pt-20">
        <Pricing />
      </div>

      <Container className="max-w-6xl px-4 pb-20">
        <FaqSection />
      </Container>
    </div>
  );
}
