import { HeroImageRight } from '@/components/HeroContent/HeroImageRight';
import { ServiceDetail } from '@/components/ServiceDetail/ServiceDetail';
import { BOOKING_JANEAPP_URL } from '@/utils/constants';

const description = [
  'Acupuncture supports the body’s natural healing response by stimulating targeted points to reduce pain and restore balance. Treatments are individualized to your symptoms and overall wellness goals.',
  'Many clients experience relief from chronic discomfort, improved sleep, and a greater sense of calm after a series of sessions.',
];

export default function AcupuncturePage() {
  return (
    <>
      <HeroImageRight
        backgroundImage="/acupuncture.png"
        title="Acupuncture"
        description="Targeted care to reduce pain, improve balance, and promote healing."
        cta={{ label: 'Book Appointment', href: BOOKING_JANEAPP_URL }}
      />
      <ServiceDetail
        title="How It Helps"
        description={description}
        image={{ src: '/acupuncture.png', alt: 'Acupuncture treatment' }}
      />
    </>
  );
}
